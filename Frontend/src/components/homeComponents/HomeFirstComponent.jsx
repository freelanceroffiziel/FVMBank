import React from "react";
import { useEffect } from "react";
import HomePaymentTracker from "./HomePaymentTracker";
import salesHeroImg from "../../assets/images/confident.jpg";
import ScrollReveal from "scrollreveal";

const HomeFirstComponent = () => {
  useEffect(() => {
    const srConfig = [
      { id: "#heroTextSec", duration: 900, delay: 70 },
      { id: "#homeForm", duration: 1300, delay: 90 },
      { id: "#homeText", duration: 1600, delay: 160 },
      { id: "#heroImg", duration: 2000, delay: 180 },
      { id: "#thirdHeroSec", duration: 2000, delay: 130 },
    ];

    srConfig.forEach(({ id, duration, delay }) => {
      ScrollReveal().reveal(id, {
        origin: "bottom",
        distance: "35px",
        duration,
        delay,
      });
    });
  }, []);

  return (
    <main>
      <section className="lg:pt-16 pt-16 ">
        <section
          id="heroSecTionGenCon"
          className=" px-4 lg:px-16 lg:gap-5 text-gray-100"
        >
          <section
            id="secondHeroSec"
            className="flex flex-col-reverse items-center  lg:flex-row py-8 px-4 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${salesHeroImg})` }}
          >
            <div className="flex flex-col items-center justify-center gap-2 md:gap-2 lg:flex-row lg:gap-5 w-full  ">
              <div id="homeForm" className="lg:w-[35vw] w-full ">
                <HomePaymentTracker />
              </div>

              <div className="relative w-full lg:w-[53vw] lg:h-[70vh] md:h-[85vh] h-[60vh] flex items-start justify-center ">
                <div
                  id="homeText"
                  className="relative z-10 lg:px-8 md:px-6 px-4 py-6 lg:py-12 bg-white bg-opacity-40 rounded shadow-md text-teal-800 lg:ml-16 md:ml-6 ml-0 md:mt-[35vh] mt-16 lg:mt-28"
                >
                  <p className="lg:w-[30vw] md:w-[70vw] w-[80vw] text-[20px] md:text-[24px] lg:text-[18px]">
                    Welcome to IconicBank where your financial security and
                    convenience are our top priorities. With a commitment to
                    excellence, we ensure seamless banking experiences for all
                    our customers.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default HomeFirstComponent;
