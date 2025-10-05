import { ArrowUpRight } from "lucide-react";
import Container from "../Container/Container";

const mockComments = [
  {
    id: 1,
    name: "Tasmima Ashraf Romana",
    date: "Dec 29, 2022",
    avatar: "/user_one.png",
    text: "I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care. I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care, and I found this article very helpful.",
  },
  {
    id: 2,
    name: "Tasmima Ashraf Romana",
    date: "Dec 29, 2022",
    avatar: "/use_two.png",
    text: "I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care. I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care.",
  },
];

const CommentItem = ({ comment }) => (
  <div data-aos="fade-up" className="flex items-start space-x-4 mb-6">
    <img
      src={comment.avatar}
      alt={comment.name}
      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-green-200"
    />

    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h4 className="font-semibold text-gray-800">{comment.name}</h4>
          <span className="text-xs text-green-500">{comment.date}</span>
        </div>
        <button className="text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700 transition">
          Reply
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">{comment.text}</p>
      <div className="border-b border-green-500 mt-4"></div>
    </div>
  </div>
);

const UnderlineInput = ({ placeholder, type = "text", name }) => (
  <div className="relative pt-6">
    <input
      type={type}
      name={name}
      className="w-full bg-transparent border-b border-green-300 focus:border-green-600 focus:outline-none pt-2 pb-1 text-gray-800 transition peer"
      placeholder=" "
      required
    />

    <label
      htmlFor={name}
      className="absolute top-2 left-0 text-gray-400 text-sm transition-all duration-300 pointer-events-nonepeer-placeholder-shown:text-base peer-placeholder-shown:top-9 peer-focus:text-green-600 peer-focus:text-sm peer-focus:top-2"
    >
      {placeholder}
    </label>
  </div>
);

const CommentSection = () => {
  return (
    <Container>
      <section id="comments" className="mt-10 pt-8 w-[70%]">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-8 pb-4">
          {mockComments.length} Comment
        </h3>

        <div className="space-y-6">
          {mockComments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
        <div data-aos="fade-left" className="mt-12 p-8 bg-white ">
          <form className="space-y-12">
            <div className="relative pt-6">
              <textarea
                placeholder=" "
                rows="3"
                name="comment"
                className="w-full bg-transparent border-b border-green-300 focus:border-green-600 focus:outline-none pt-2 pb-1 text-gray-800 transition resize-none peer"
                required
              ></textarea>
              <label
                htmlFor="comment"
                className="absolute top-2 left-0 text-gray-400 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-9 peer-focus:text-green-600 peer-focus:text-sm peer-focus:top-2"
              >
                Enter your comment here...
              </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <UnderlineInput placeholder="Your name" name="name" />
              <UnderlineInput
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>

            <div>
              <UnderlineInput placeholder="Your topic" name="topic" />
            </div>
            <button
              type="submit"
              className="inline-flex items-center space-x-2 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-md"
            >
              <span>Post Comment</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>
    </Container>
  );
};

export default CommentSection;
