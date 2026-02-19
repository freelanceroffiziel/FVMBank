import React from "react";
import ContactStarsImg from "../../assets/removedBg/Screenshot 2026-02-18 130910.png";

import { RiStarFill, RiStarLine } from "react-icons/ri";

const ContactStars = () => {
  return (
    <main className="contactStarsCon">
      <section className="grid gap-10 contactStarsConSon lg:grid-cols-2 ">
        <div className="leftdiv bg-white border-[1px] border-gray-100 shadow-md rounded-3xl ">
          <div className="p-2 ">
            {" "}
            <img
              src={ContactStarsImg}
              className="rounded-3xl lg:h-[60vh] w-full "
              alt=""
            />{" "}
          </div>

          <div className="grid gap-5 lg:grid-cols-2  mt-3.5 p-6   ">
            <span className="px-4 py-4 bg-gray-100 rounded spanOne ">
              <h2>WhatsApp</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] text-teal-900 ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanTwo ">
              <h2>Facebook</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] text-teal-900 ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanThree ">
              <h2>Instagam</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] text-teal-900 ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
                <RiStarLine />
              </p>
            </span>

            <span className="px-4 py-4 bg-gray-100 rounded spanFour ">
              <h2>Tiktok</h2>
              <p className="flex flex-row items-center text-navyBlue text-[22px] md:text-[29px] lg:text-[15px] text-teal-900 ">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarLine />
              </p>
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white border-[1px] border-gray-100 p-6 rounded-3xl shadow rightDiv ">
          <h1 className="lg:text-[40px] lg:leading-12 font-semibold ">
            Our Support are 24/7 Very active globally, free no charges and
            agents are always the best.{" "}
          </h1>

          <p>
            <span className="text-teal-900 font-semibold ">
              Always Available
            </span>{" "}
            – Day or night, weekday or weekend, our team is online and ready to
            assist you whenever you need help.{" "}
            <span className="text-teal-900 font-semibold ">
              Fast & Responsive
            </span>{" "}
            – We value your time. That’s why we aim to provide quick responses
            and efficient solutions without unnecessary delays.{" "}
            <span className="text-teal-900 font-semibold " s>
              Completely Free
            </span>{" "}
            – No hidden fees, no surprise charges, and no complicated terms. Our
            support is 100% free for all users.{" "}
            <span className="text-teal-900 font-semibold ">
              Highly Professional
            </span>{" "}
            – Our trained agents are knowledgeable, courteous, and committed to
            delivering accurate and helpful guidance every time.{" "}
            <span className="text-teal-900 font-semibold ">
              Friendly & Approachable
            </span>{" "}
            – We treat every customer with respect, patience, and genuine care.{" "}
            <span className="text-teal-900 font-semibold ">
              Globally Active
            </span>{" "}
            – No matter where you are in the world, our support team is
            available across all time zones.{" "}
            <span className="text-teal-900 font-semibold ">
              Reliable & Consistent
            </span>{" "}
            – You can count on us to provide dependable assistance whenever you
            reach out. Whether you have a quick question, need technical
            support, or require detailed guidance, our dedicated team is
            committed to delivering the highest level of service and ensuring
            your complete satisfaction. Reach out anytime — we’re always ready
            to help.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactStars;
