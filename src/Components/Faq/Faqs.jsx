import HeroComponents from "../Shared/Hero/HeroComponents";
import FaqSection from "./FaqSection";

const Faqs = () => {
  return (
    <section>
      <HeroComponents
        title="FAQ"
        subtitle="I'm Dr. Runa Akhter Dhola a [Specialization, e.g., Internal Medicine Specialist] with a passion for providing holistic, evidence-based medical care."
        breadcrumbPath=""
        backgroundImage=""
      />
      <FaqSection />
    </section>
  );
};

export default Faqs;
