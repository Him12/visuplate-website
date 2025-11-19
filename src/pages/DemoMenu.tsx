import { useState } from "react";
import "@google/model-viewer";
import { Video, Box } from "lucide-react";


const menuItems = [
  {
    id: 1,
    name: "Spicy Paneer Kebab",
    category: "Main Courses",
    price: "",
    description:
      "Tandoori paneer, mint chutney. **Vegetarian delight**",
    image: "/visuplate-website/images/Spicy Paneer Kebab.png",
    videoPath: "/visuplate-website/videos/Spicy Paneer Kebab.mp4",
    modelPath: "/visuplate-website/models/Spicy Paneer Kebab.glb",
  },
  {
    id: 2,
    name: "Slow Cooked Short Ribs",
    category: "Main Courses",
    price: "",
    description:
      "Red wine jus, truffle mash. **⏳ 3-hour preparation**",
    image: "/visuplate-website/images/Slow Cooked Short Ribs.png",
    videoPath: "/visuplate-website/videos/Slow Cooked Short Ribs.mp4",
    modelPath: "/visuplate-website/models/Slow Cooked Short Ribs.glb",
  },
  {
    id: 3,
    name: "Yakitori Skewers",
    category: "Main Courses",
    price: "",
    description:
      "Grilled chicken skewers, tare glaze. **🍢 Today's special**",
    image: "/visuplate-website/images/Yakitori Skewers.png",
    videoPath: "/visuplate-website/videos/Yakitori Skewers.mp4",
    modelPath: "/visuplate-website/models/Yakitori Skewers.glb",
  },
];

export default function DemoMenu() {
  const [showVideo, setShowVideo] = useState<string | null>(null);
  const [showModel, setShowModel] = useState<string | null>(null);


  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Experience the Demo Menu
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Scan the QR code below to see how The Visuplate transforms your menu
            with interactive features.
          </p>

          <div className="inline-block bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-emerald-200">
            <img src="/visuplate-website/images/New Demo QR.png" alt="QR" className="w-64 h-64" />
            <p className="text-sm text-gray-600 mt-4">
              Scan with your phone camera
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://him12.github.io/Web_Menu_QR_Demo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full 
               bg-gradient-to-r from-emerald-600 to-teal-500 
               text-white font-semibold shadow-lg shadow-emerald-200 
               hover:scale-105 hover:shadow-xl hover:from-emerald-700 hover:to-teal-600 
               transition-all duration-300"
            >
              🌐 Try Our Web Demo
            </a>
          </div>


        </div>

        {/* MENU ITEMS */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Sample Menu Items
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">
                    {item.name}
                  </h3>
                  <span className="text-emerald-600 font-bold text-lg whitespace-nowrap ml-2">
                    {item.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* ACTION BUTTONS */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  {/* VIDEO BUTTON */}
                  {item.videoPath && (
                    <div
                      onClick={() => setShowVideo(item.videoPath)}
                      className="flex items-center space-x-1 text-blue-600 text-xs font-semibold bg-blue-50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-blue-100"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Video</span>
                    </div>
                  )}

                  {/* AR 3D BUTTON */}
                  {item.modelPath && (
                    <div
                      onClick={() => setShowModel(item.modelPath)}
                      className="flex items-center space-x-1 text-purple-600 text-xs font-semibold bg-purple-50 px-3 py-1.5 rounded-full cursor-pointer hover:bg-purple-100"
                    >
                      <Box className="w-3.5 h-3.5" />
                      <span>AR 3D</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ------------------------------ */}
        {/* VIDEO POPUP MODAL */}
        {/* ------------------------------ */}
        {showVideo && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-4 w-[400px] shadow-xl">
              <video
                src={showVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              ></video>

              <button
                onClick={() => setShowVideo(null)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* ------------------------------ */}
        {/* 3D MODEL POPUP MODAL */}
        {/* ------------------------------ */}
        {showModel && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-4 w-[400px] shadow-xl">

              <model-viewer
                src={showModel}
                alt="3D Model"
                ar
                ar-modes="webxr scene-viewer quick-look"
                camera-controls
                auto-rotate
                style={{ width: "100%", height: "350px" }}
                quick-look-browsers="safari chrome"
              >
                {/* AR BUTTON MUST BE INSIDE TAG */}
                <button
                  slot="ar-button"
                  className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700"
                >
                  View in your space
                </button>
              </model-viewer>

              <button
                onClick={() => setShowModel(null)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
