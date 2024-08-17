import { useState } from "react";
import carhome from "../assets/images/carhome.jpg";
import carA1 from "../assets/images/carA1.png";
import carA2 from "../assets/images/carA2.png";
import carA3 from "../assets/images/carA3.png";
import carA4 from "../assets/images/carA4.png";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      {/* <!-- First Section --> */}
      <section className="bg-gray-300 rounded-2xl h-auto lg:h-[470px] p-5 lg:pl-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className=" lg:p-5 lg:pt-10">
            <h1 className="pl-5">Openings hours</h1>
            <div className="lg:pt-5 lg:space-y-1 pt-1">
              {["Mondays", "Tuesdays", "Wednesdays", "Thursdays"].map((day) => (
                <div key={day}>
                  <h2 className="font-bold text-xs">
                    {day}:
                    <span className="font-normal block pl-5">
                      7:30am to 6:00pm
                    </span>
                  </h2>
                </div>
              ))}

              <div>
                <h2 className="font-bold text-xs pt-1">
                  Fridays:
                  <span className="font-normal block pl-5">
                    7:30am to 10:00pm
                  </span>
                </h2>
              </div>

              <div>
                <h2 className="font-bold text-xs pt-1">
                  Saturdays:
                  <span className="font-normal block pl-5">
                    9:30am to 10:00pm
                  </span>
                </h2>
              </div>

              <div className="">
                <h2 className="font-bold text-xs pt-1">
                  Sundays:
                  <span className="font-normal block pl-5">
                    9:30am to 6:00pm
                  </span>
                </h2>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-xs pt-2 lg:pt-5">
                Location:
                <span className="font-normal block pl-5">
                  New York, Liverpool
                </span>
              </h2>
            </div>
          </div>
          <div className="flex-1  lg:p-5 lg:w-1/2">
            <img
              className="w-full  rounded-2xl h-[250px] lg:h-[400px] "
              src={carhome}
              alt="carhome"
            />
          </div>
        </div>
      </section>

      {/* <!-- Second Section --> */}
      <section className=" mt-10 pt-10 rounded-2xl h-[250px] lg:h-[500px] p-5 lg:pl-0 mx-0   lg:p-10">
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
                Hennessey Performance’s Tuner School offers two industry-leading
                certification courses to prepare you for a professional,
                long-term career in the fast-paced and exciting world of
                automotive tuning!
              </p>

              {/* {showMore && ( */}
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
              {/* )} */}

              <button
                onClick={() => setShowMore(!showMore)}
                className="hidden text-blue-500 mt-1 "
              >
                {showMore ? "See Less" : "See More"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
