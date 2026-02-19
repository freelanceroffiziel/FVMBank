import React from "react";
import supportBgImg from "../../assets/images/astronaut-8061095_640.webp";

const ContactOne = () => {
  return (
    <main className="mainCon">
      <section
        className="mainConSon b-[url(' ')] bg-teal-950/55  bg-cover bg-no-repeat w-full h-fit "
        style={{ backgroundImage: `url(${supportBgImg})  ` }}
      >
        <div className="px-6 py-48 lg:py-40 contentDiv text-teal-50 lg:px-16 ">
          <h1 className="lg:text-[50px] text-[40px]  font-semibold ">
            Contact Us,
          </h1>
          <p className="lg:text-[19px] text-[18px]  shadow-black ">
            Fill out the contact form below and we’ll get back to you as soon as
            possible.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactOne;
