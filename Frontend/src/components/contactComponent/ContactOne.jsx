import React, { useEffect } from "react";
import salesHeroImg from "../../assets/contactImg/mv-fotos-woman-10113152_1920.png";
import ScrollReveal from "scrollreveal";

const ContactOne = () => {
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
      <section id="welcomeFather ">
        <div
          id=""
          className="bg-cover bg-center w-full lg:h-[85vh] md:[85vh] h-screen relative flex items-start justify-start lg:pt-[20vh] "
          style={{ backgroundImage: `url(${salesHeroImg})` }}
        >
          <div
            id="text"
            className="lg:px-8 md:px-8 md:py-8 px-8 py-8 lg:py-8 lg:ml-16 md:ml-6 bg-white rounded bg-opacity-40 text-teal-80 lg:mt-10 md:mt-[35vh] ml-0 md:top-0  bottom-[-10vh] lg:relative md:relative absolute md:shadow-none shadow "
          >
            <h1 className="text-[30px] md:text-[45px] lg:text-[50px] font-serif text-teal-700 ">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <p className=" lg:w-[30vw] md:w-[40vw] w-[80vw] text-[18px] md:text-[24px] lg:text-[16px] ">
              Fill out the contact form below and we’ll get back to you as soon
              as possible.
            </p>
          </div>

          <div className="before:block before:inset-0 before:bg-navyBlue z-10 before:content-[' '] before:absolute before:opacity- "></div>
        </div>
      </section>
    </main>
  );
};

export default ContactOne;
