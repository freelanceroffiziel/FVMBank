import React from "react";
import { Link } from "react-router-dom";
import centerImg from "../../assets/securityImg/istockphoto-1479778391-612x612.jpg";

const SecuritySecond = () => {
  return (
    <main className=" space-y-11 ">
      <section className="lg:px-16 px-6">
        <h2 className="md:text-[25px] lg:text-[30px] text-[25px] text-center ">
          There’s a new scam targeting customers.{" "}
          <Link className="text-teal-600 hover:text-teal-800 underline">
            Learn how to help protect your money.
          </Link>{" "}
        </h2>
      </section>

      <section className=" flex justify-center lg:flex-row flex-col  gap-12 items-center lg:px-16 px-6">
        <div className="lg:text-right  space-y-6 ">
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

        <div className="h-60 w-60 ">
          <img
            src={centerImg}
            alt={centerImg.className}
            className=" rounded-full h-60 w-60 "
          />
        </div>

        <div className="lg:text-left  space-y-6 ">
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
