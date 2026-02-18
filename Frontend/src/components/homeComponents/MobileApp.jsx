import React, { useEffect } from "react";
import appFoto from "../../assets/mobileImg/422737-google-485611_1920-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
const MobileApp = () => {
   useEffect(() => {
    ScrollReveal().reveal("#appFirstSecCon", {
      origin: "top",
      distance: "35px",
      duration: 1100,
      delay: 100,
    });
  });

   useEffect(() => {
    ScrollReveal().reveal("#appSecondSecCon", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 100,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#mobileH1", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 100,
    });
  });


  useEffect(() => {
    ScrollReveal().reveal("#mobileUL", {
      origin: "bottom",
      distance: "35px",
      duration: 1300,
      delay: 100,
    });
  });


  useEffect(() => {
    ScrollReveal().reveal("#span", {
      origin: "bottom",
      distance: "35px",
      duration: 1400,
      delay: 100,
    });
  });

   useEffect(() => {
    ScrollReveal().reveal("#spanh1", {
      origin: "bottom",
      distance: "35px",
      duration: 1500,
      delay: 100,
    });
  });


  return (
    <>
      <main id="appCon">
        <section
          id="appConSon"
          className="flex flex-col items-center justify-between w-full gap-10 px-6 mt-10 lg:flex-row lg:px-16 lg:mt-14"
        >
          <section id="appFirstSecCon">
            <div id="appFirstSecConSon">
              <h1 id="mobileH1" className="md:text-[25px] lg:text-[30px] text-[30px] font-serif text-teal-700  lg:text-start text-center font-bold tracking-wider">Banking made easy</h1>
              <ul id="mobileUL" className="flex flex-col lg:text-start text-center gap-2 mb-6 md:text-[25px] lg:text-[15px] text-[18px] ">
                <li>
                  Our IconicBank Mobile app gives you fast and secure access to
                  your finances
                </li>
                <li>Check your account balance</li>
                <li>View your latest FICO Score</li>
                <li>Send and receive money with IconicBank</li>
                <li></li>
              </ul>
              <span id="span" className="s">
                <h2 id="span" className="md:text-[25px] lg:text-[25px] text-[30px] font-serif text-teal-700  lg:text-start text-center font-bold tracking-wider lg:mb-2 mb-4 ">Download our app</h2>
                <ul id="spanh1" className="flex flex-row items-center justify-center gap-3 lg:justify-start ">
                  <li className="flex flex-row justify-center items-center gap-1 bg-teal-700 px-4 py-2 rounded text-gray-50 hover:bg-teal-800 transition ease-in-out duration-300 shadow-md md:text-[25px] lg:text-[17px] text-[20px] ">
                    <FaApple className="md:text-[25px] lg:text-[20px] text-[22px]"/>
                    <Link>App Store</Link>{" "}
                  </li>
                  <li className="flex flex-row justify-center items-center gap-1 bg-teal-700 px-4 py-2 rounded text-gray-50 hover:bg-teal-800 transition ease-in-out duration-300 shadow-md md:text-[25px] lg:text-[17px] text-[20px] ">
                    <FaGooglePlay className="md:text-[25px] lg:text-[20px] text-[22px]"/>
                    <Link>Google Play </Link>{" "}
                  </li>
                </ul>
              </span>
            </div>
          </section>

          <section id="appSecondSecCon" className="">
            <div id="appSecondSecConSon" className="relative w-full h-full">
              <img src={appFoto} alt="" className="lg:w-[50vw] lg:h-[75vh] md:w-full md:h-full w-full" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default MobileApp;
