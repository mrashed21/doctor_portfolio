import { Calendar, User } from "lucide-react";

// Placeholder image for the main article
const MainImage =
  "https://via.placeholder.com/800x450/F0F4F8/333333?text=Doctor+Patient+Consultation";

const PostContent = () => {
  return (
    <article className="space-y-6">
      {/* Featured Image */}
      <div className="rounded-xl overflow-hidden shadow-lg" data-aos="zoom-in">
        <img
          src={MainImage}
          alt="Trusted & Care for Women's Health."
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 pt-4">
        Trusted & Care for Women's Health.
      </h1>

      {/* Metadata (By Admin | Date) */}
      <div className="flex items-center space-x-6 text-sm text-gray-500 border-b border-gray-100 pb-4">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-green-600" />
          <span>By Admin</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-green-600" />
          <span>July 08 2025</span>
        </div>
      </div>

      {/* Main Body Text */}
      <div className="text-gray-600 leading-relaxed space-y-5">
        <p>
          I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine
          Specialist] with a passion for providing holistic, evidence-based
          medical care. I'm Dr. Runa Akhter Dhola a [Specialization, e.g.,
          Internal Medicine Specialist] with a passion for providing holistic,
          evidence-based medical care.
        </p>
        <p>
          I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine
          Specialist] with a passion for providing holistic, evidence-based
          medical care. I'm Dr. Runa Akhter Dhola a [Specialization, e.g.,
          Internal Medicine Specialist] with a passion for providing holistic,
          evidence-based medical care.
        </p>
        <p>
          I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine
          Specialist] with a passion for providing holistic, evidence-based
          medical care. I'm Dr. Runa Akhter Dhola a [Specialization, e.g.,
          Internal Medicine Specialist] with a passion for providing holistic,
          evidence-based medical care.
        </p>
      </div>
    </article>
  );
};

export default PostContent;
