import { Facebook, Instagram, Search, Youtube } from "lucide-react";

// Mock data for the Feeds
const mockFeeds = [
  {
    img: "https://via.placeholder.com/60x60/D1F0CC/555?text=Feed1",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "https://via.placeholder.com/60x60/B9E6A6/555?text=Feed2",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "https://via.placeholder.com/60x60/A0D1B0/555?text=Feed3",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "https://via.placeholder.com/60x60/CCE5CC/555?text=Feed4",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "https://via.placeholder.com/60x60/8FC09F/555?text=Feed5",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
];

// --- Search Widget ---
export const SearchWidget = (props) => (
  <div {...props} className="p-4 bg-gray-50 rounded-xl shadow-sm">
    <h4 className="text-lg font-semibold text-gray-800 mb-4">Search News</h4>
    <div className="relative flex">
      <input
        type="text"
        placeholder="Search Here..."
        className="w-full p-3 pr-12 rounded-l-lg border border-gray-200 focus:ring-green-600 focus:border-green-600 focus:outline-none transition text-sm"
      />
      <button className="bg-green-600 text-white p-3 rounded-r-lg hover:bg-green-700 transition">
        <Search className="w-5 h-5" />
      </button>
    </div>
  </div>
);

// --- Follow Us Widget ---
export const FollowUsWidget = (props) => (
  <div {...props} className="space-y-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h4>
    <div className="flex space-x-4 border-t border-b border-gray-200 py-4">
      <a
        href="#"
        aria-label="Facebook"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="#"
        aria-label="Instagram"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="#"
        aria-label="YouTube"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Youtube className="w-5 h-5" />
      </a>
    </div>
  </div>
);

// --- Feeds Widget ---
export const FeedsWidget = (props) => (
  <div {...props} className="space-y-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-4">Feeds</h4>
    <div className="space-y-4">
      {mockFeeds.map((feed, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 group cursor-pointer"
        >
          <img
            src={feed.img}
            alt={`Feed ${index + 1}`}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0 transition-transform group-hover:scale-105"
          />
          <p className="text-sm text-gray-600 transition-colors group-hover:text-green-600">
            {feed.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);
