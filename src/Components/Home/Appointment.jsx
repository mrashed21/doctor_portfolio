import { ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Container from "../Container/Container";

// Mock data for time slots
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

const MapMockup = () => (
  <div className="relative w-full h-32 bg-gray-50 rounded-lg border">
    <img
      src="https://via.placeholder.com/400x150/f5f5f5/333333?text=Map+View+Mockup"
      alt="Clinic Location Map"
      className="w-full h-full object-cover rounded-lg"
    />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
      <MapPin className="w-6 h-6 text-red-500" fill="red" />
    </div>
    <div className="absolute right-2 top-2 space-y-1 bg-white rounded-md p-1 shadow">
      <div className="w-5 h-5 bg-gray-200 text-xs flex items-center justify-center">
        +
      </div>
      <div className="w-5 h-5 bg-gray-200 text-xs flex items-center justify-center">
        -
      </div>
    </div>
  </div>
);

const StyledInput = ({
  label,
  placeholder,
  type = "text",
  className = "",
  ...props
}) => (
  <div className="relative w-full">
    <input
      type={type}
      className={`w-full bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      placeholder={placeholder}
      {...props}
    />
  </div>
);

const StyledSelect = ({
  label,
  placeholder,
  options,
  className = "",
  ...props
}) => (
  <div className="relative w-full">
    <select
      className={`appearance-none w-full bg-gray-50 p-3 rounded-lg text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
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
    // 🔗 You can replace console.log with API POST request
  };

  return (
    <section
      id="appointment"
      className="flex justify-center items-center py-20 bg-gray-100 min-h-screen relative"
    >
      {/* Background Split */}
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

      <Container className="relative z-10 flex justify-center w-full">
        <div
          className="w-full max-w-4xl bg-white p-8 sm:p-10 rounded-xl shadow-2xl"
          data-aos="fade-up"
        >
          <div className="mb-8 text-center">
            <p className="text-green-600 font-semibold text-sm mb-1">
              Request a Consultation
            </p>
            <h2 className="text-3xl font-bold text-gray-800">
              Make an Appointment
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4"
          >
            {/* LEFT */}
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
                placeholder="Write a short brief..."
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none h-28"
              />
            </div>

            {/* RIGHT */}
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
                  { label: "Other", value: "other" },
                ]}
              />

              {/* Chamber */}
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
                <MapMockup />
              </div>

              <div className="relative w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setFormData((prev) => ({ ...prev, date }));
                  }}
                  placeholderText="Select Date"
                  className="w-full bg-gray-50 p-3 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()} 
                />
              </div>
            </div>

            {/* TIME + BUTTON */}
            <div className="lg:col-span-2 space-y-4">
              <p className="text-sm font-medium text-gray-700 mt-2">
                Select Time
              </p>
              <div className="flex flex-wrap gap-2">
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
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition mt-6"
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
