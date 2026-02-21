import React, { useEffect } from "react";
import PropertySellFive from "../components/aboutComponents/PropertySellFive";
import salesHeroImg from "../assets/images/istockphoto-2221280710-612x612.jpg";
import AboutTwo from "../components/aboutComponents/AboutTwo";
import LatestNews from "../components/aboutComponents/LatestNews";
import ScrollReveal from "scrollreveal";

const About = () => {
  useEffect(() => {
    ScrollReveal().reveal("#text", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 150,
    });
  });
  return (
    <>
      <main className="">
        <section id="propertySellSon" className="w-full ">
          <section id="welcomeFather ">
            <div
              id=""
              className="bg-cover bg-center w-full lg:h-[85vh] md:[85vh] h-[91vh] lg:pt-[20vh]  relative flex items-start justify-start  "
              style={{ backgroundImage: `url(${salesHeroImg})` }}
            >
              <div
                id="text"
                className="lg:px-8 md:px-8 md:py-8 px-8 py-8 lg:py-12 lg:ml-16 md:ml-6 bg-white rounded bg-opacity-40 text-teal-80 lg:mt-28 md:mt-[35vh] ml-0 md:top-0  bottom-[-10vh] lg:relative md:relative absolute md:shadow-none shadow "
              >
                <h1 className="text-[30px] md:text-[45px] lg:text-[50px] font-serif text-teal-700 ">
                  About FVM<span className="text-red-600">Bank</span>
                </h1>
                <p className=" lg:w-[30vw] md:w-[40vw] w-[80vw] text-[18px] md:text-[24px] lg:text-[16px] ">
                  More than 25 years ago, FVM Bank revolutionized the credit
                  card industry with data and technology. Today, we are one of
                  the most widely recognized brands in banking — serving more
                  than 100 million customers across a diverse set of businesses.
                </p>
              </div>

              <div className="before:block before:inset-0 before:bg-navyBlue z-10 before:content-[' '] before:absolute before:opacity- "></div>
            </div>
          </section>
        </section>
      </main>

      <section className="py-16 lg:mt-[0vh] mt-[6vh] ">
        <AboutTwo />
      </section>
      <section className="">
        <PropertySellFive />
      </section>
      <section className=" lg:mt-[15vh] mt-[10vh]">
        <LatestNews />
      </section>
    </>
  );
};

export default About;
