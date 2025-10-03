import { Mail, MapPin, PhoneCall } from "lucide-react"; // Using lucide icons for modern look
import Container from "../Container/Container";

// Mock Data for the three contact cards
const contactCards = [
  {
    title: "Our Location",
    details: "121 King Street, Melbourne Victoria 3000 Bangladesh.",
    icon: MapPin,
    actionText: "Get Direction",
    actionLink: "#", // Placeholder link for map direction
    iconUrl: "https://placehold.co/100x100/FF5733/FFFFFF?text=Map", // Placeholder for the map icon image
  },
  {
    title: "Send me Email",
    details: (
      <>
        support@medwell.com
        <br />
        support@medwell.com
      </>
    ),
    icon: Mail,
    actionText: "Send Email",
    actionLink: "mailto:support@medwell.com",
    iconUrl: "https://placehold.co/100x100/F4D03F/333333?text=Email", // Placeholder for the email icon image
  },
  {
    title: "Our Location", // Note: This is labeled as "Our Location" in the image but contains phone numbers
    details: (
      <>
        +880 1252656296
        <br />
        +880 1252656296
      </>
    ),
    icon: PhoneCall,
    actionText: "Call Me",
    actionLink: "tel:+8801252656296",
    iconUrl: "https://placehold.co/100x100/40C7F9/FFFFFF?text=Phone", // Placeholder for the phone icon image
  },
];

// Component for a single contact card
const ContactCard = ({ card, index }) => {
  // Style the card based on the icon image used in the mockup
  let iconBackgroundColor = "bg-red-500"; // Default for the map
  if (index === 1) iconBackgroundColor = "bg-yellow-400"; // For the email
  if (index === 2) iconBackgroundColor = "bg-green-400"; // For the phone (adjusting to blue for phone)

  return (
    <div
      className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Icon Block (Simulating the icon images from the mockup) */}
      <div
        className={`flex justify-center items-center w-24 h-24 rounded-full ${iconBackgroundColor} mb-6 shadow-md`}
      >
        {/* We use a placeholder image URL for the colorful icons */}
        <img
          src={card.iconUrl}
          alt={`${card.title} icon`}
          className="w-16 h-16 object-contain"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>

      <p className="text-sm text-gray-500 mb-4 flex-grow">{card.details}</p>

      <a
        href={card.actionLink}
        className="text-green-600 font-semibold text-sm hover:underline mt-auto"
      >
        {card.actionText}
      </a>
    </div>
  );
};

const ContactInfoSection = () => {
  return (
    <section id="contact-info" className="py-20 bg-white">
      <Container>
        {/* Header Block */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-green-600 font-semibold text-base tracking-wider">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-2">
            Feel Free To Contact
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactCards.map((card, index) => (
            <ContactCard key={index} card={card} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactInfoSection;
