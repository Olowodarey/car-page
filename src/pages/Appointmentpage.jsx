import { useState } from "react";
import carA1 from "../assets/images/carA1.png";

import carA2 from "../assets/images/carA2.png";
import carA3 from "../assets/images/carA3.png";
import carA4 from "../assets/images/carA4.png";
import Footer from "../components/Footer";
import Endnote from "../components/Endnote";





const Appointmentpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div>
      <div className="mx-auto mt-5 max-w-7xl px-5 lg:px-10">
        <h1 className="text-blue-800 font-bold text-xl">Appointment</h1>

        <section className=" mt-0 pt-5 rounded-2xl h-[250px] lg:h-[500px] p-5 lg:pl-0 mx-0   lg:p-10">
          <div className="">
            <div className="flex flex-col lg:flex-row  gap-[150px] lg:gap-0 ">
              <div className=" w-1/2 lg:w-1/2">
                <div className="relative grid grid-cols-1 md:grid-cols-2">
                  <img
                    src={carA1}
                    alt="carA3"
                    className="absolute top-1 lg:top-1 left-[50px] lg:left-[27px] w-1/2 lg:w-1/2 lg:h-auto object-cover z-10"
                  />
                  <img
                    src={carA2}
                    alt="carA2"
                    className="absolute top-[15px]   lg:top-[30px]  left-[115px]  lg:left-[270px] object-cover w-1/2 lg:h-auto z-10"
                  />

                  <img
                    src={carA3}
                    alt="carA1"
                    className="absolute top-[50px] lg:top-[230px] left-[20px] lg:left-0  w-1/2 lg:w-1/4 h-outo  "
                  />

                  <img
                    src={carA4}
                    alt="carA4"
                    className="absolute top-[60px] lg:top-[200px] left-[75px] lg:left-[125px] w-1/2  h-auto   "
                  />
                </div>
              </div>
              <div className=" flex-1 lg:w-1/2  lg:mt-0 lg:p-4">
                <p className="text-xs lg:text-sm">
                  Hennessey Performance’s Tuner School offers two
                  industry-leading certification courses to prepare you for a
                  professional, long-term career in the fast-paced and exciting
                  world of automotive tuning!
                </p>

                <>
                  <p className="text-xs lg:text-sm pt-1 lg:pt-10">
                    Our Automotive Technology course is our most popular
                    program, as it teaches the basics of automotive performance
                    in just 14 weeks. Over the semester, you will learn about
                    every vital component of modern-day performance vehicles.
                    The Automotive Technology program combines lecture hall
                    instruction and first-hand lab/shop training, so there’s
                    never a dull moment. Students get to practice the thrill of
                    working on today’s latest and most common domestic
                    performance cars while learning from the industry’s top
                    skilled and experienced instructors.
                  </p>

                  <p className="text-xs lg:text-sm pt-1 lg:pt-10">
                    After completing the Automotive Technology course, many
                    graduates opt to further their knowledge and progress to our
                    Advanced Tuning program. This advanced program teaches
                    attendees everything from fundamental dynamics and strategy
                    to safety and analytics when modifying performance cars,
                    trucks, and SUVs. The Advanced Tuning course is 14 weeks
                    long. While it includes the obligatory classroom lectures,
                    there is even more hands-on time in the lab or shop tuning
                    today’s muscle cars.
                  </p>
                </>
              </div>
            </div>
          </div>
        </section>

        <div>
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Endnote />
    </div>
  );
};

export default Appointmentpage;
