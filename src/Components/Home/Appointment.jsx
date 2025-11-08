import { ChevronDown } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Container from "../Container/Container";

const timeSlots = [
  "10:00 PM",
  "10:15 PM",
  "10:30 PM",
  "10:45 PM",
  "11:00 PM",
  "11:15 PM",
  "11:30 PM",
  "11:45 PM",
];

const StyledInput = ({
  placeholder,
  type = "text",
  className = "",
  ...props
}) => (
  <div className="relative w-full">
    <input
      type={type}
      className={`w-full bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 
                  focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

const StyledSelect = ({ placeholder, options, className = "", ...props }) => (
  <div className="relative w-full">
    <select
      className={`appearance-none w-full bg-gray-50 p-3 rounded-lg text-gray-400 
                  focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      {...props}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option
          key={index}
          value={option.value || option.label}
          className="text-gray-800"
        >
          {option.label}
        </option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
);

const Appointment = () => {
  const [startDate, setStartDate] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    notes: "",
    phone: "",
    gender: "",
    chamber: "Popular Diagnostic Centre Ltd, Dhaka",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="appointment"
      className="flex justify-center items-center py-10 lg:py-20 bg-gray-100 min-h-screen relative"
    >
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="bg-[url(/app_left.png)] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "url(/mock-dna-pattern.svg)" }}
          ></div>
        </div>
        <div className="relative">
          <img
            src="/app_right.png"
            alt="Medical Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Container className="relative z-10 flex justify-center w-full px-5">
        <div
          className="w-full max-w-4xl bg-white p-3 lg:p-8 sm:p-10 rounded-xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="mb-8 text-center">
            <p className="text-green-600 font-semibold text-sm mb-1">
              Request a Consultation
            </p>
            <h2 className="text-xl lg:text-3xl font-bold text-gray-800">
              Make an Appointment
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4"
          >
            <div className="space-y-4">
              <StyledInput
                placeholder="Enter patient name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <StyledInput
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <StyledInput
                placeholder="Enter your age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <textarea
                placeholder="Write here short brief..."
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-28"
              />
            </div>

            <div className="space-y-4">
              <StyledInput
                placeholder="Enter phone number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <StyledSelect
                placeholder="Select gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
              />

              <div className="border border-gray-200 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="radio"
                    id="chamber1"
                    name="chamber"
                    value="Popular Diagnostic Centre Ltd, Dhaka"
                    checked={
                      formData.chamber ===
                      "Popular Diagnostic Centre Ltd, Dhaka"
                    }
                    onChange={handleChange}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="chamber1"
                    className="text-sm font-medium text-gray-800"
                  >
                    Popular Diagnostic Centre Ltd, Dhaka
                  </label>
                  <span className="text-xs text-gray-500">10 AM - 1 PM</span>
                </div>

                <div className="relative w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.3843573770543!2d90.38164322518969!3d23.868751679035256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c573f4be7859%3A0xfe148d927ed0353a!2sClassic%20IT%20%26%20Sky%20Mart%20Ltd.!5e1!3m2!1sen!2sbd!4v1759552930993!5m2!1sen!2sbd"
                    className="w-full h-32 sm:h-40 md:h-48 rounded-lg border border-gray-200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFormData((prev) => ({ ...prev, date }));
                }}
                placeholderText="Select Date"
                className="w-[290px] lg:w-[400px] bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-1 focus:ring-blue-500"
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
            </div>

            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm font-medium text-gray-700 mt-2">
                Select Time
              </p>
              <div className=" grid grid-cols-2 lg:flex lg:flex-wrap gap-2">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    onClick={() => handleTimeSelect(time)}
                    className={`px-4 py-2 rounded-lg text-sm cursor-pointer border transition ${
                      formData.time === time
                        ? "bg-blue-600 text-white border-blue-600 shadow"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300"
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm lg:text-lg 
                           hover:bg-blue-700 transition mt-6 cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Appointment;
