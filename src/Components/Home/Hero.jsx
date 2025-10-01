"use client";
import Container from "../Container/Container";

const HeroSection = () => {
  return (
    <div className="relative bg-[url('/hero_banner.jpg')] bg-cover bg-center bg-no-repeat pt-24 pb-12 overflow-hidden min-h-screen flex items-center">
      {/* Main Content Container */}
      <Container className="relative z-10">
        <section className="grid grid-cols-8 gap-3">
          <div className="">
            <h1>Trusted & Care for Women’s Health.</h1>
            <p>
              Dr. Runa Akhter is a highly experienced and compassionate
              Specialization, e.g., Gynecologist Doctorsand Surgeons.
            </p>
            <div> 24 HOUR AVAILABLE </div>
            <button>BOOK AN APPOIUNTMENT</button>
          </div>
          <div className="">
            <img src="/hero_doctor.png" alt="doctor" />
          </div>
          <div className="">
            <p>
              Trusted Care for Women’s Health" ensures compassionate, expert
              medical support tailored to every stage of a woman's life and
              wellness.
            </p>
            <div className="">
              <div className=""></div>
              <h1>95%</h1>
              <p>Patients satisfied</p>
            </div>
            <div className="">
              <div className=""></div>
              <h1>95%</h1>
              <p>Patients satisfied</p>
            </div>
            <div className="">
              <div className=""></div>
              <h1>95%</h1>
              <p>Patients satisfied</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default HeroSection;
