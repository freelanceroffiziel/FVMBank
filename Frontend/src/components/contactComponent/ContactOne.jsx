import React from "react";
import supportBgImg from "../../assets/images/istockphoto-2221131453-612x612.jpg"

const ContactOne = () => {
  return (
    <main className="mainCon">
      <section className="mainConSon b-[url(' ')] bg-teal-950/55  bg-cover bg-no-repeat w-full h-fit "
      style={{ backgroundImage: `url(${supportBgImg})  ` }}
      >

        <div className="px-6 py-48 lg:py-40 contentDiv text-teal-50 lg:px-16 ">
          <h1 className="lg:text-[50px] text-[35px]  font-semibold ">Contact Us</h1>
          <p className="lg:text-[19px] text-[18px]">Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </section>
    </main>
  );
};

export default ContactOne;
