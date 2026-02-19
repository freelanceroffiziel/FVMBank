import React, { useEffect } from "react";
import salesHeroImg from "../../assets/securityImg/thedigitalartist-point-4503630_1920.jpg";
import ScrollReveal from "scrollreveal";

const SecurityFirst = () => {
  useEffect(() => {
    ScrollReveal().reveal("#text", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 100,
    });
  }, []); 
  return (
    <main className="mainCon">
      <section id="propertySellSon" className="w-full ">
        <section id="welcomeFather ">
          <div
            id=""
            className="bg-cover bg-center w-full lg:h-[85vh] md:[85vh] h-[95vh] lg:pt-[20vh]  relative flex items-start justify-end"
            style={{ backgroundImage: `url(${salesHeroImg})` }}
          >
            <div
              id="text"
              className="lg:px-8 md:px-8 md:py-8 px-8 py-8 lg:py-8 lg:mr-16 md:mr-6 bg-white rounded bg-opacity-40 text-teal-80 lg:mt-10 md:mt-[35vh] ml-0 md:top-0  bottom-[-10vh] lg:relative md:relative absolute md:shadow-none shadow"
            >
              <h1 className="text-[30px] md:text-[45px] lg:text-[50px] font-serif text-teal-700 ">
                Our <span className="text-red-600">Security</span>
              </h1>
              <p className=" lg:w-[30vw] md:w-[40vw] w-[80vw] text-[18px] md:text-[24px] lg:text-[16px] ">
                At FVM Bank, security is our top priority. With over 25 years of
                experience in safeguarding financial information, we leverage
                cutting-edge technology and rigorous protocols to ensure your
                data, transactions, and privacy are protected—always.
              </p>
            </div>

            <div className="before:block before:inset-0 before:bg-navyBlue z-10 before:content-[' '] before:absolute before:opacity- "></div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default SecurityFirst;
