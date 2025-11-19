import {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  ChangeEvent,
} from "react";
import { MessageCircle, X } from "lucide-react";

/**
 * MiniChatbot.tsx — cleaned & ESLint safe
 */

type Message = {
  from: "user" | "bot";
  text: string;
  time?: string;
};

const WHATSAPP_NUMBERS = [
  "+919599202386",
  "+918377861214",
  "+916387811493",
];

const SALES_EMAIL = "thevisuplate@gmail.com";

const PLAN_TEXTS = {
  silver: `Silver Plan:
• One-time setup: ₹5,999
• Monthly subscription: ₹599/month
• First year total: ₹13,187`,
  gold: `Gold Plan:
• One-time setup: ₹6,999
• Monthly subscription: ₹699/month
• First year total: ₹15,387`,
  platinum: `Platinum Plan:
• One-time setup: ₹9,999
• Monthly subscription: ₹999/month
• First year total: ₹21,987`,
};

const QUICK_BUTTONS = [
  "Pricing",
  "Book Demo",
  "See Plans",
  "Contact Team",
  "How VisuPlate Works",
  "Features",
  "Try Live Menu",
  "WhatsApp Support",
];

export default function MiniChatbot(): JSX.Element {
  const [open, setOpen] = useState<boolean>(() => {
    try {
      return localStorage.getItem("visu_chat_open") === "1";
    } catch {
      return false;
    }
  });

  const [input, setInput] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const raw = localStorage.getItem("visu_chat_msgs");
      return raw
        ? (JSON.parse(raw) as Message[])
        : [{ from: "bot", text: "Hey! 👋 I'm VisuBuddy — ask me about Pricing, Demo, or Plans!" }];
    } catch {
      return [{ from: "bot", text: "Hey! 👋 I'm VisuBuddy — ask me about Pricing, Demo, or Plans!" }];
    }
  });

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  // Persist messages + auto-scroll
  useEffect(() => {
    try {
      localStorage.setItem("visu_chat_msgs", JSON.stringify(messages));
      localStorage.setItem("visu_chat_open", open ? "1" : "0");
    } catch {
      // Ignore localStorage errors (Safari private mode)
    }

    if (messagesRef.current) {
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, open]);

  const nowTime = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const pushMessage = (m: Message) =>
    setMessages((prev) => [...prev, { ...m, time: m.time ?? nowTime() }]);

  // Typing simulation
  const botReplyWithTyping = (text: string) => {
    setIsTyping(true);

    const timeout = Math.min(1200 + text.length * 12, 2200);

    setTimeout(() => {
      setIsTyping(false);
      pushMessage({ from: "bot", text });
    }, timeout);
  };

  // Bot logic
  const getBotReply = (userText: string) => {
    const s = userText.toLowerCase();

    if (s.includes("silver")) return PLAN_TEXTS.silver;
    if (s.includes("gold")) return PLAN_TEXTS.gold;
    if (s.includes("platinum")) return PLAN_TEXTS.platinum;

    if (/\b(price|pricing|cost|plans|fees|subscription)\b/.test(s))
      return "We have 3 plans — Silver, Gold, Platinum.\nType 'Silver' / 'Gold' / 'Platinum' for details.";

    if (s.includes("demo") || s.includes("book"))
      return "Great! Tap 'Book Demo' or tell me your preferred time.";

    if (s.includes("how visuplate") || s.includes("what is"))
      return "VisuPlate is a digital QR-menu system for restaurants with multi-outlet management & free maintenance.";

    if (s.includes("outlet")) return "Yes — we support multiple outlets.";

    if (s.includes("design")) return "Yes — menu design support is included.";

    if (s.includes("maintenance") || s.includes("service"))
      return "Yes — we offer free maintenance based on your plan tier.";

    if (s.includes("whatsapp"))
      return "Tap 'WhatsApp Support' and I'll open chats with our team.";

    if (s.includes("live menu"))
      return "Tap 'Try Live Menu' to preview your menu experience.";

    const fallbacks = [
      "Hmm, can you rephrase that? Try asking about 'Pricing' or 'Demo'.",
      "Not sure I understood — want to explore Silver, Gold, or Platinum plans?",
      "You can ask me about pricing, demo, features, or menu design!",
    ];

    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  };

  // Send message
  const sendMessage = (rawInput?: string) => {
    const text = (rawInput ?? input).trim();
    if (!text) return;

    pushMessage({ from: "user", text });
    setInput("");

    const reply = getBotReply(text);
    botReplyWithTyping(reply);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // Quick buttons
  const handleQuick = (label: string) => {
    if (label === "Pricing" || label === "See Plans") {
      sendMessage("pricing");
      return;
    }
    if (label === "Book Demo") {
      pushMessage({
        from: "bot",
        text: "Sure — please enter your name & phone number below.",
      });
      setShowForm(true);
      return;
    }
    if (label === "Contact Team") {
      pushMessage({
        from: "bot",
        text: `You can email us at ${SALES_EMAIL} or message us on WhatsApp.`,
      });
      return;
    }
    if (label === "How VisuPlate Works") {
      sendMessage("how visuplate");
      return;
    }
    if (label === "Features") {
      pushMessage({
        from: "bot",
        text: "VisuPlate: QR menus, multi-outlet, menu design, analytics & integrations.",
      });
      return;
    }
    if (label === "Try Live Menu") {
      pushMessage({ from: "bot", text: "Opening live menu preview..." });
      return;
    }
    if (label === "WhatsApp Support") {
      openWhatsAppToAll("Hello! I want information about VisuPlate pricing & demo.");
      pushMessage({ from: "bot", text: "Opening WhatsApp chats..." });
      return;
    }
    sendMessage(label);
  };

  const openWhatsAppToAll = (message = "") => {
    const encoded = encodeURIComponent(message);
    WHATSAPP_NUMBERS.forEach((num) => {
      const bare = num.replace(/\D/g, "");
      const url = `https://wa.me/${bare}?text=${encoded}`;
      window.open(url, "_blank");
    });
  };

  // Submit lead to email + WhatsApp
  const sendLead = (name: string, phone: string, restaurant?: string) => {
    const subject = encodeURIComponent("VisuPlate Demo Request / Callback");
    const body = encodeURIComponent(
      `Demo request from chatbot:\nName: ${name}\nPhone: ${phone}\nRestaurant: ${
        restaurant ?? "—"
      }\nPlease contact ASAP.`
    );

    const mailto = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailto, "_blank");

    openWhatsAppToAll(
      `Demo request: Name: ${name}, Phone: ${phone}, Restaurant: ${
        restaurant ?? "—"
      }`
    );

    pushMessage({
      from: "bot",
      text: "Thanks! Our team will reach out shortly.",
    });
  };

  const [showForm, setShowForm] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formRest, setFormRest] = useState("");

  const submitForm = () => {
    if (!formName.trim() || !formPhone.trim()) {
      pushMessage({
        from: "bot",
        text: "Please enter both your name and phone number.",
      });
      return;
    }

    sendLead(formName.trim(), formPhone.trim(), formRest.trim());

    setFormName("");
    setFormPhone("");
    setFormRest("");
    setShowForm(false);
  };

  const Avatar = () => (
    <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold select-none">
      VP
    </div>
  );

  return (
    <>
      {/* CHAT ICON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 bg-white/90 backdrop-blur-sm border border-gray-200 p-2 rounded-full shadow-xl hover:scale-105 transition z-50"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow">
            <MessageCircle className="w-6 h-6" />
          </div>
        </button>
      )}

      {/* CHAT WINDOW */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-emerald-600 text-white">
            <Avatar />
            <div className="flex-1">
              <div className="font-semibold">VisuBuddy</div>
              <div className="text-xs opacity-90">
                Ask anything — Pricing, Demo, Plans
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/10 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Buttons */}
          <div className="px-3 py-2 border-b border-gray-100 bg-white">
            <div className="flex flex-wrap gap-2">
              {QUICK_BUTTONS.map((b) => (
                <button
                  key={b}
                  onClick={() => handleQuick(b)}
                  className="text-xs px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-gray-50"
          >
            {messages.map((m, i) => (
              <div key={i} className="w-full flex">
                {m.from === "bot" ? (
                  <div className="max-w-[78%] bg-gray-100 text-gray-800 px-3 py-2 rounded-xl whitespace-pre-line">
                    {m.text}
                    <div className="text-[10px] text-gray-400 mt-1">{m.time}</div>
                  </div>
                ) : (
                  <div className="ml-auto max-w-[78%] bg-emerald-600 text-white px-3 py-2 rounded-xl whitespace-pre-line">
                    {m.text}
                    <div className="text-[10px] text-emerald-200 mt-1 text-right">
                      {m.time}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="w-28 bg-gray-100 px-3 py-2 rounded-xl">
                <div className="flex items-center gap-1">
                  <div className="typing-dot" />
                  <div className="typing-dot delay-200" />
                  <div className="typing-dot delay-400" />
                </div>
              </div>
            )}
          </div>

          {/* Demo Form */}
          {showForm && (
            <div className="px-4 py-3 border-t bg-white space-y-2">
              <input
                placeholder="Your name"
                value={formName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormName(e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
              <input
                placeholder="Phone (e.g. +9198xxxx)"
                value={formPhone}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormPhone(e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />
              <input
                placeholder="Restaurant (optional)"
                value={formRest}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormRest(e.target.value)
                }
                className="w-full px-3 py-2 border rounded-lg text-sm"
              />

              <div className="flex gap-2">
                <button
                  onClick={submitForm}
                  className="flex-1 bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm"
                >
                  Request Callback
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    pushMessage({ from: "bot", text: "Cancelled." });
                  }}
                  className="px-3 py-2 rounded-lg border text-sm"
                >
                  Cancel
                </button>
              </div>

              <div className="text-xs text-gray-500">
                We will email {SALES_EMAIL} and message our WhatsApp numbers.
              </div>
            </div>
          )}

          {/* Input */}
          {!showForm && (
            <div className="px-3 py-3 border-t bg-white flex items-center gap-2">
              <input
                placeholder="Type a message..."
                value={input}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInput(e.target.value)
                }
                onKeyDown={handleKeyDown}
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none"
              />
              <button
                onClick={() => sendMessage()}
                className="bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          )}
        </div>
      )}

      {/* Styles */}
      <style>{`
        .typing-dot {
          width: 7px;
          height: 7px;
          background: #9ca3af;
          border-radius: 9999px;
          animation: blink 1s infinite;
        }
        .typing-dot.delay-200 { animation-delay: .15s; }
        .typing-dot.delay-400 { animation-delay: .3s; }

        @keyframes blink {
          0% { opacity: .2; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-4px); }
          100% { opacity: .2; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn .22s ease;
        }
      `}</style>
    </>
  );
}
