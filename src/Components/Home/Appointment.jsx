import React from "react";
import Container from "../Container/Container";

export default function Appointment() {
  return (
    <section id="appointment" className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl shadow" data-aos="fade-up">
            <h3 className="text-2xl font-bold">Request a Consultation</h3>
            <p className="text-gray-600 mt-2">Make an appointment quickly — choose your date and provide details.</p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="border p-3 rounded-lg" placeholder="Full Name" />
              <input className="border p-3 rounded-lg" placeholder="Phone Number" />
              <input className="border p-3 rounded-lg" placeholder="Email" />
              <input type="date" className="border p-3 rounded-lg" />
              <select className="border p-3 rounded-lg md:col-span-2">
                <option>Choose Service</option>
                <option>General Consultation</option>
                <option>Pregnancy Checkup</option>
                <option>Laparoscopy</option>
              </select>
              <textarea placeholder="Describe your problem" className="border p-3 rounded-lg md:col-span-2" />
              <button className="md:col-span-2 bg-primary text-white py-3 rounded-lg">Book Appointment</button>
            </form>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="bg-primary text-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold">Clinic Hours</h4>
              <ul className="mt-3 text-sm space-y-2">
                <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                <li>Sat: 9:00 AM - 1:00 PM</li>
                <li>Sun: Closed</li>
              </ul>

              <div className="mt-4 bg-white text-primary p-3 rounded-lg">
                <div className="text-sm font-medium">Contact</div>
                <div className="text-xs">+880 1234 567 890</div>
                <div className="text-xs">info@doctor.com</div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-2xl border">
              <div className="text-sm font-semibold">Clinic Location</div>
              <div className="mt-3 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500">
                Map placeholder
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
