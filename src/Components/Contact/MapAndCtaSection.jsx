import { ArrowRight, MapPin } from "lucide-react";

const MapAndCtaSection = () => {
  // --- Mock Data ---
  // Placeholder image that looks like a map of the area
  const mapPlaceholderUrl =
    "https://placehold.co/1200x500/E5E7EB/4B5563?text=Map+of+121+King+Street";

  // Placeholder image for the doctor in the CTA
  const doctorImageUrl = "https://placehold.co/150x200/FFFFFF/000?text=Doctor";

  return (
    <section
      id="map-and-cta"
      className="relative w-full overflow-hidden bg-gray-100"
    >
      {/* 1. Full-Width Map Area */}
      <div className="w-full h-[500px]">
        {/* In a real application, this would be an embedded Google Map or other map service.
                  Here we use a placeholder image URL to simulate the map background.
                */}
        <img
          src={mapPlaceholderUrl}
          alt="Map showing 121 King Street location"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. CTA Overlay (Positioned centrally over the map) */}
      <div className="absolute inset-0 flex justify-center items-center p-4">
        <div
          className="w-full max-w-4xl bg-green-600 rounded-2xl shadow-2xl overflow-hidden relative"
          style={{ height: "250px" }} // Fixed height for visual consistency
          data-aos="zoom-in"
        >
          <div className="flex h-full">
            {/* Doctor Image Column (Left) */}
            <div className="flex-shrink-0 w-40 sm:w-64 h-full relative">
              {/* This image is positioned to partially stick out of the green background */}
              <img
                src={doctorImageUrl}
                alt="Doctor ready to assist"
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-full object-cover"
              />
            </div>

            {/* Text and Button Column (Right) */}
            <div className="flex-grow p-6 sm:p-10 flex flex-col justify-center text-white">
              <p className="text-sm font-semibold tracking-wider opacity-80 mb-1">
                GET IN TOUCH
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-tight">
                Provide The Best Quality Service for You!
              </h3>

              <a
                href="#"
                className="inline-flex items-center space-x-2 font-bold text-lg hover:underline transition"
              >
                <span>Book An Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Small Address/Direction Box (Top Left, as seen in the mockup) - Overlayed for context */}
      <div className="absolute top-8 left-8 p-4 bg-white rounded-lg shadow-md max-w-xs hidden sm:block">
        <h4 className="font-semibold text-gray-800 mb-1">121 King St</h4>
        <p className="text-xs text-gray-500 mb-2">
          121 King Street, Melbourne VIC 3000, Bangladesh
        </p>
        <a
          href="#"
          className="text-blue-600 text-xs font-medium hover:underline flex items-center"
        >
          <MapPin className="w-3 h-3 mr-1" /> View large map
        </a>
      </div>
    </section>
  );
};

export default MapAndCtaSection;
