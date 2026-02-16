import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import firstImg from "../../assets/images/dream extra 2.jpeg";
import secImg from "../../assets/images/enjoy home 1.jpeg";
import thirdImg from "../../assets/images/retirementleisure 2.webp";
import { Link } from "react-router-dom";

const FinancialGSupport = () => {
  useEffect(() => {
    ScrollReveal().reveal("#financeH1", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 120,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#SectionFGSSon", {
      origin: "bottom",
      distance: "35px",
      duration: 1300,
      delay: 160,
    });
  });
  return (
    <>
      <main id="SectionFGSCon" className="lg:px-16 px-6 mt-[10vh]">
        <span
          id="financeH1"
          className="md:text-[25px] lg:text-[30px] text-[40px] text-teal-900 font-bold font-serif text-center block"
        >
          <h1>Financial Guidance and Support</h1>
        </span>
        <section
          id="SectionFGSSon"
          className="grid lg:gap-4 gap-8 mt-10 lg:grid-cols-3"
        >
          {/* First Card */}
          <section id="firstSectionFGSCon" className="relative">
            <div
              id="firstSectionFGSSon"
              className="relative w-full h-auto rounded shadow-md"
            >
              <div>
                <img src={firstImg} alt="" />
              </div>
              <div className="flex flex-col gap-5 px-4 py-4">
                <h1 className="md:text-[25px] lg:text-[25px] text-[24px]  text-teal-900 font-serif font-semibold">
                  Make it happen. Live it
                </h1>
                <p className="md:text-[25px] lg:text-[17px] text-[20px]">
                  Discover how smart saving habits could help make your dream
                  purchases a reality
                </p>
                <button className="px-5 py-2 border-2 border-teal-700 rounded-tr-full rounded-br-full w-fit md:text-[25px] lg:text-[18px] text-[19px] hover:bg-teal-800 hover:text-gray-50 transition-all">
                  <Link>Get tips for big purchase</Link>
                </button>
              </div>
            </div>
          </section>

          {/* Second Card */}
          <section id="secSectionCon">
            <div
              id="secSectionSon"
              className="relative w-full h-auto rounded shadow-md"
            >
              <div>
                <img src={secImg} alt="" />
              </div>
              <div className="flex flex-col gap-5 px-4 py-4 items-center text-center">
                <h1 className="md:text-[25px] lg:text-[25px] text-[24px]  text-teal-900 font-serif font-semibold">
                  Save. Invest. Retire well.
                </h1>
                <p className="md:text-[25px] lg:text-[17px] text-[20px]">
                  Discover how to start saving to meet your retirement goals.
                </p>
                <button className="px-5 py-2 border-2 border-teal-700 rounded-full md:text-[25px] lg:text-[18px] text-[19px] hover:bg-teal-800 hover:text-gray-50 transition-all self-center">
                  <Link className="w-fit">Get Ready for retirement</Link>
                </button>
              </div>
            </div>
          </section>

          {/* Third Card */}
          <section id="thirdSecCon">
            <div
              id="thirdSecSon"
              className="relative w-full h-auto rounded shadow-md"
            >
              <div>
                <img src={thirdImg} alt="" />
              </div>
              <div className="flex flex-col gap-5 px-4 py-4 h-full justify-between">
                <h1 className="md:text-[25px] lg:text-[25px] text-[24px]  text-teal-900 font-serif font-semibold">
                  Save. Invest. Retire well.
                </h1>
                <p className="md:text-[25px] lg:text-[17px] text-[20px]">
                  Discover tools and tips to help make buying or refinancing a
                  little easier.
                </p>
                <div className="flex justify-end">
                  <button className="px-5 py-2 border-2 border-teal-700 rounded-tl-full rounded-bl-full md:text-[25px] lg:text-[18px] text-[19px] hover:bg-teal-800 hover:text-gray-50 transition-all">
                    <Link>Get tips for homebuying</Link>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default FinancialGSupport;
