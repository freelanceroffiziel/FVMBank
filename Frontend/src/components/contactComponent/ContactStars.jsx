import React from "react";
import ContactStarsImg from "../../assets/images/astronaut-8061095_640.webp";

import { RiStarFill } from "react-icons/ri";

const ContactStars = () => {
  return (
    <main className="contactStarsCon">
      <section className="grid gap-10 contactStarsConSon lg:grid-cols-2 ">
        <div className="leftdiv bg-white border-[1px] border-gray-100 shadow-md rounded-3xl ">
          <div className="p-2 ">
            {" "}
            <img src={ContactStarsImg} className="rounded-3xl lg:h-[60vh] w-full " alt="" />{" "}
          </div>

          <div className="grid gap-5 lg:grid-cols-2  mt-3.5 p-6   ">
            <span className="px-4 py-4 bg-gray-100 rounded spanOne ">
              <h2>WhatsApp</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanTwo ">
              <h2>WhatsApp</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanThree ">
              <h2>WhatsApp</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanFour ">
              <h2>WhatsApp</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border-[1px] border-gray-100 p-6 rounded-3xl shadow-md rightDiv ">
          <h1 className="lg:text-[40px] lg:leading-12 font-semibold ">Our Support are 24/7 Very active globally, free no charges and agents are always the best. </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae, ad tempore quidem accusamus laudantium a doloremque iusto perspiciatis aliquam voluptatibus odit, unde aliquid voluptas facilis corrupti modi nemo corporis?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae, ad tempore quidem accusamus laudantium a doloremque iusto perspiciatis aliquam voluptatibus odit, unde aliquid voluptas facilis corrupti modi nemo corporis?

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate molestiae, ad tempore quidem accusamus laudantium a doloremque iusto perspiciatis aliquam voluptatibus odit, unde aliquid voluptas facilis corrupti modi nemo corporis?
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactStars;
