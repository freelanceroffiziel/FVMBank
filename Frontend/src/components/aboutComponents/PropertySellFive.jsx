import { Link } from "react-router-dom";
import TeamImage from "../../assets/images/istockphoto-2160707342-612x612.jpg";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const TeamSection = () => {
  useEffect(() => {
    ScrollReveal().reveal("#teamSection", {
      origin: "bottom",
      distance: "35px",
      delay: 150,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal("#imgTeamDiv", {
      origin: "bottom",
      distance: "35px",
      delay: 200,
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal("#teamTextBox", {
      origin: "bottom",
      distance: "35px",
      delay: 150,
      duration: 1000,
    });
  }, []);

  return (
    <section id="teamSection" className="bg-navyBlue bg-opacity-70">
      <div className="py-10 bg-teal-800 lg:px-20 px-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <h1 className="text-[28px] md:text-[33px] lg:text-[35px] text-brightTeal font-semibold font-sans tracking-wider">
            Meet Our Team
          </h1>
          <p className="text-[20px] md:text-[26px] lg:text-[20px] tracking-wider font-serif text-teal-50">
            At FVM Bank, our{" "}
            <span className="font-bold text-teal-500">
              dedicated professionals
            </span>{" "}
            power our mission with innovation, integrity, and a commitment to
            excellence.
          </p>
        </div>

        <div className="relative grid mt-10 lg:grid-cols-2">
          <div id="imgTeamDiv" className="lg:w-[60vw] md:w-full w-full">
            <img
              src={TeamImage}
              alt="Iconic Bank Team"
              className="w-full lg:h-full"
            />
          </div>

          <div
            id="teamTextBox"
            className="bg-navyBlue md:p-10 p-4 flex flex-col justify-between lg:gap-0 gap-20 lg:absolute lg:right-0 top-10 lg:h-[60vh] lg:w-[50vw] bg-teal-700"
          >
            <span>
              <h1 className="text-[20px] md:text-[26px] lg:text-[25px] uppercase tracking-wider font-serif text-brightTeal font-semibold">
                Spotlight: Leadership
              </h1>

              <div>
                <h1 className="text-[20px] md:text-[26px] lg:text-[20px] tracking-wide font-serif text-blue-50">
                  Alexis Morgan – Chief Innovation Officer
                </h1>
                <p className="text-[20px] md:text-[26px] lg:text-[20px] tracking-wider font-serif text-blue-200">
                  Driving change, embracing technology, and empowering teams.
                </p>
              </div>
            </span>

            <section className="relative">
              <div className="relative flex flex-row items-center">
                <div className="lg:w-[35vw] md:w-full w-[45vw] bg-white md:py-4 py-[13px] rounded-l-sm">
                  <Marquee speed={30}>
                    <div>
                      <h1 className="lg:text-[15px] md:text-[25px] text-[22px]">
                        “FVM Bank thrives because of people like Alexis – her
                        vision and collaborative energy inspire everyone around
                        her.”
                      </h1>
                    </div>
                  </Marquee>
                </div>

                <div className="relative lg:w-[10vw] md:w-[32vw] w-[30vw] bg-red-600 md:px-2 py-4.5 text-teal-50 transition duration-300 ease-in-out hover:bg-red-700 rounded-r-sm">
                  <Link
                    to={"/our-team"}
                    className="lg:text-[15px] md:text-[27px] text-[16px] font-semibold flex items-center justify-center"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
