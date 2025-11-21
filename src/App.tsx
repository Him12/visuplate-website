import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DemoMenu from "./pages/DemoMenu";
import Footer from "./components/Footer";
import Careers from "./pages/Careers";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop";
import MiniChatbot from "./components/MiniChatbot";
import ApplicationForm from "./components/ApplicationForm";


function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

    return (
  <BrowserRouter>
      <ScrollToTop />

      <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

        <div className="fixed inset-0 bg-gradient-to-br from-white via-slate-50 to-emerald-100/30 -z-10"></div>

        <div className="fixed inset-0 opacity-20 -z-10">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">

          <Navigation />

          <main className="flex-grow relative z-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/demo-menu" element={<DemoMenu />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/apply" element={<ApplicationForm />} />

            </Routes>
          </main>

          <Footer />

          <BottomNav />
          <MiniChatbot />
        </div>
      </div>
  </BrowserRouter>
);
}

export default App;