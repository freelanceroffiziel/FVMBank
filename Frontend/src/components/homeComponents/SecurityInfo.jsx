import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SecurityInfoImage from "../../assets/removedBg/istockphoto-1748403403-612x612.jpg";
import ScrollReveal from "scrollreveal";

const SecurityInfo = () => {
  useEffect(() => {
    ScrollReveal().reveal("#securityText", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 130,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#h2test", {
      origin: "bottom",
      distance: "35px",
      duration: 1300,
      delay: 140,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#paragraph", {
      origin: "bottom",
      distance: "35px",
      duration: 1400,
      delay: 150,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#button", {
      origin: "bottom",
      distance: "35px",
      duration: 1500,
      delay: 160,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#securityfInfoSecondCon", {
      origin: "bottom",
      distance: "35px",
      duration: 1700,
      delay: 180,
    });
  });
  return (
    <>
      <main id="securityfInfoCon">
        <span
          id="securityText"
          className="md:text-[25px] lg:text-[35px] text-[40px] font-extrabold font-serif text-center text-teal-900 "
        >
          <h1>Your news and information</h1>
        </span>
        <section
          id="securityfInfoSon"
          className="flex flex-col items-center justify-between w-full gap-10 px-6 mt-10 lg:px-16 lg:flex-row lg:mt-14 "
        >
          <section id="securityfInfoFirstCon">
            <div
              id="securityfInfoFirstSon"
              className="flex flex-col items-start gap-5 "
            >
              <h2
                id="h2test"
                className="md:text-[25px] lg:text-[30px] text-[35px] font-serif text-teal-900  lg:text-start text-center "
              >
                Level up your account security
                <span className="text-teal-500 cursor-pointer ">*</span>
              </h2>

              <p
                id="paragraph"
                className=" text-[20px] md:text-[24px] lg:text-[18px] tracking-wide lg:text-start text-center "
              >
                Watch your security level rise as you take actions against
                fraud.See it in the Security Center in Mobile and Online
                Banking.
              </p>

              <button
                id="button"
                className="border-2 border-teal-800 rounded-br-full rounded-tr-full lg:px-3 lg:py-2 px-5 py-2.5 hover:bg-teal-800 hover:text-gray-50 trans ease-in-out duration-300  text-[19px] md:text-[24px] lg:text-[19px] "
              >
                <Link>Check your level</Link>
              </button>
            </div>
          </section>

          <section id="securityfInfoSecondCon">
            <div id="securityfInfoSecondSon" className="relative w-full h-full">
              <img
                src={SecurityInfoImage}
                alt=""
                className="lg:w-[50vw] lg:h-[50vh] md:w-full md:h-full w-full"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default SecurityInfo;
