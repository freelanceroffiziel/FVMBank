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
                <img src={plansSections.img} alt="" className="lg:w-[10vw] lg:h-[10vh] md:w-full md:h-full w-full" />
              </div>

              <div id="otherContentHere" className="">
                <div id="otherContentHereSon" className="flex flex-col items-center justify-center gap-1 text-center ">
                  <h1 className="text-[23px] md:text-[28px] lg:text-[19px] font-semibold tracking-wide "> {plansSections.heading} </h1>
                  <p className="text-[22px] md:text-[28px] lg:text-[17px]"> {plansSections.paragraph} </p>
                  <button className="w-full py-3 text-[25px] md:text-[28px] lg:text-[20px] mt-5 ">
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
