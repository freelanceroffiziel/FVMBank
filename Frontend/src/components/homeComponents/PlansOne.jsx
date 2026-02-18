import React, { useEffect } from "react";
import { plans } from "./homeJsonFolder/plansOne";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
const PlansOne = () => {
  useEffect(() => {
    ScrollReveal().reveal("#con", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 130,
    });
  });

   useEffect(() => {
    ScrollReveal().reveal("#plansConSon", {
      origin: "bottom",
      distance: "35px",
      duration: 1000,
      delay: 150,
    });
  });

  return (
    <>
      <main id="plansCon" className="">
        <section
          id="plansConSon"
          className="grid gap-5 px-6 lg:grid-cols-4 lg:px-16 "
        >
          {plans.map((plansSections) => (
            <div id="con"
              key={plansSections.id}
              className="flex flex-col items-center gap-5 px-4 py-10 transition duration-300 ease-in-out shadow-md bg-teal-50 hover:bg-teal-800 hover:text-teal-50 group "
            >
              <div id="imgHere">
                <img src={plansSections.img} alt="" className="w-56 h-56 rounded-full lg:h-36 lg:w-36  md:h-72 md:w-72" />
              </div>

              <div id="otherContentHere" className="">
                <div id="otherContentHereSon" className="flex flex-col items-center justify-center gap-1 text-center ">
                  <h1 className="text-[23px] md:text-[28px] lg:text-[19px] font-semibold tracking-wide "> {plansSections.heading} </h1>
                  <p className="text-[19px] md:text-[28px] lg:text-[16px]"> {plansSections.paragraph} </p>
                  <button className="w-full py-3 text-[23px] md:text-[28px] lg:text-[18px] mt-5 ">
                    <Link className="border-dashed group-hover:border-b-2"> {plansSections.button} </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default PlansOne;
