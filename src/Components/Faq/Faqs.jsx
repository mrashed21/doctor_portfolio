import HeroComponents from "../Shared/Hero/HeroComponents";
import FaqSection from "./FaqSection";

const Faqs = () => {
  return (
    <section>
      <HeroComponents
        title="FAQ"
        subtitle="I'm Dr. Runa Akhter Dola, a Consultant Obstetrician, Gynaecologist, and Feto-Maternal Medicine Specialist, dedicated to providing compassionate, evidence-based care for women’s health and high-risk pregnancies."
        breadcrumbPath=""
        backgroundImage=""
      />

      <FaqSection />
    </section>
  );
};

export default Faqs;
