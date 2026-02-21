import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import centerImg from "../../assets/securityImg/istockphoto-1479778391-612x612.jpg";
import ScrollReveal from "scrollreveal";

const SecuritySecond = () => {
    useEffect(() => {
    ScrollReveal().reveal(".main", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 100,
    });
  }, []); 

    useEffect(() => {
    ScrollReveal().reveal(".main1", {
      origin: "bottom",
      distance: "35px",
      duration: 900,
      delay: 50,
    });
  }, []); 

    useEffect(() => {
    ScrollReveal().reveal(".main2", {
      origin: "bottom",
      distance: "35px",
      duration: 1000,
      delay: 100,
    });
  }, []); 

    useEffect(() => {
    ScrollReveal().reveal(".main3", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 150,
    });
  }, []); 
  return (
    <main className="main space-y-11 ">
      <section className="main lg:px-16 px-6">
        <h2 className="md:text-[25px] lg:text-[30px] text-[25px] text-center ">
          There’s a new scam targeting customers.{" "}
          <Link className="text-teal-600 hover:text-teal-800 underline">
            Learn how to help protect your money.
          </Link>{" "}
        </h2>
      </section>

      <section className="main flex justify-center lg:flex-row flex-col  gap-12 items-center lg:px-16 px-6">
        <div className="main1 lg:text-right  space-y-6 ">
          <h2 className="md:text-[25px] lg:text-[30px] text-[25px] font-semibold  ">
            How we help protect you
          </h2>

          <ul className="space-y-2 md:text-[25px] lg:text-[18px] text-[19px]">
            <li>Help Fight Fraud</li>
            <li>
              Think you have experienced fraud?{" "}
              <Link
                to={"/Contact"}
                className="text-teal-600 hover:text-teal-800 hover:underline "
              >
                Report Now
              </Link>{" "}
            </li>
            <li>Resources for Parents, Caregivers, and Businesses</li>
          </ul>
        </div>

        <div className="main2 h-60 w-60 ">
          <img
            src={centerImg}
            alt={centerImg.className}
            className=" rounded-full h-60 w-60 "
          />
        </div>

        <div className="main3 lg:text-left  space-y-6 ">
          <h2 className="md:text-[25px] lg:text-[30px] text-[25px] font-semibold  ">
            How to help protect yourself
          </h2>

          <ul className="space-y-2 md:text-[25px] lg:text-[18px] text-[19px]">
            <li>Help protect your money. Pause, verify, help prevent scams</li>
            <li>
              Check out our{" "}
              <Link className="text-teal-600 hover:text-teal-800 hover:underline ">
                Fraud Checklist
              </Link>{" "}
            </li>
            <li>
              Help prevent{" "}
              <Link className="text-teal-600 hover:text-teal-800 hover:underline ">
                Fraud Checklist
              </Link>{" "}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default SecuritySecond;
