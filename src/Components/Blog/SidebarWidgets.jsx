import { Facebook, Instagram, Search, Youtube } from "lucide-react";
import Link from "next/link";

// Mock data for the Feeds
const mockFeeds = [
  {
    img: "/about_two.png",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "/service_two.png",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "/service_eight.png",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "/work.webp",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
  {
    img: "/service_three.png",
    text: "Creekside Center for Women is a renowned establishment providing gynecology...",
  },
];

// --- Search Widget ---
export const SearchWidget = (props) => (
  <div {...props} className="p-4 bg-gray-50 rounded-xl shadow-sm">
    <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
      Search News
    </h4>
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
    <h4 className="text-lg font-semibold text-gray-800 mb-2 text-center">
      Follow Us
    </h4>
    <div className="flex items-center justify-center space-x-4 border-t border-b border-gray-200 py-4">
      <Link
        href="/"
        aria-label="Facebook"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Facebook className="w-5 h-5" />
      </Link>
      <Link
        href="/"
        aria-label="Instagram"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Instagram className="w-5 h-5" />
      </Link>
      <Link
        href="/"
        aria-label="YouTube"
        className="p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
      >
        <Youtube className="w-5 h-5" />
      </Link>
    </div>
  </div>
);

// --- Feeds Widget ---
export const FeedsWidget = (props) => (
  <div {...props} className="space-y-4">
    <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">
      Feeds
    </h4>

    <div className="space-y-4">
      {mockFeeds.map((feed, index) => (
        <div
          key={index}
          className="flex items-start space-x-3 group cursor-pointer pt-5 border-t-[2px] border-[#00984A]"
        >
          <img
            src={feed.img}
            alt={`Feed ${index + 1}`}
            className="w-16 h-16 object-cover rounded-lg flex-shrink-0 transition-transform group-hover:scale-105"
          />
          <p className="text-sm text-gray-600 transition-colors group-hover:text-green-600">
            {feed.text}
          </p>

          <hr className=" " />
        </div>
      ))}
    </div>
  </div>
);
