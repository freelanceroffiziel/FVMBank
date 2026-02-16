import React, { use, useEffect } from "react";
import { aboutTwo } from "./aboutJsFolder/aboutTwo";
import { IoMdArrowDropright } from "react-icons/io";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  useEffect(() => {
    ScrollReveal().reveal("#aboutTwoConSon", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 150,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#imgDiv", {
      origin: "bottom",
      distance: "35px",
      duration: 1000,
      delay: 140,
    });
  });

  useEffect(() => {
    ScrollReveal().reveal("#mappingBodyDiv", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 150,
    });
  });

  return (
    <>
      <main id="aboutTwoCon">
        <section
          id="aboutTwoConSon"
          className="grid gap-5 px-6 lg:grid-cols-4 lg:px-16 "
        >
          {aboutTwo.map((twoItems) => (
            <div
              id="aboutTwoConSonSec"
              key={twoItems.id}
              className="flex flex-col items-center justify-between gap-5 px-4 py-10 group "
            >
              <div id="imgDiv" className="relative">
                <img
                  src={twoItems.imgAbout}
                  alt=""
                  className="w-56 h-56 rounded-full lg:h-36 lg:w-36 md:h-72 md:w-72 "
                />
              </div>

              <div id="mappingBodyDiv" className="flex flex-col items-center ">
                <h1 className="text-[23px] md:text-[28px] lg:text-[30px]">
                  {" "}
                  {twoItems.title}{" "}
                </h1>
                <button className="relative">
                  <Link className="border-dashed group-hover:border-b-2 group-hover:text-teal-700 ">
                    {twoItems.button}
                    <IoMdArrowDropright className="inline-flex text-[23px] md:text-[28px] lg:text-[21px]  " />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default AboutTwo;
