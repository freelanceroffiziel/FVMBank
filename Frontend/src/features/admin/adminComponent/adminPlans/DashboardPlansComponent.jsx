import React, { useEffect } from "react";

import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";
import ScrollToTopBtn from "../../../../components/miniComponents/ScrollToTopBtn";

const DashboardPlansComponent = () => {
  useEffect(() => {
    ScrollReveal().reveal("#inPlans", {
      origin: "bottom",
      distance: "35px",
      duration: 1180,
      delay: 150,
    });
  });
  return (
    <div>
      <main
        id=""
        className="lg:mt-[0vh] mt-[10vh] md:mt-[8vh] relative py-10 w-full"
      >
        <section
          id=""
          className="grid w-full gap-8 cursor-pointer lg:grid-cols-3 lg:px-0 px-7"
        >
          {plans.map((items) => (
            <div
              id="inPlans"
              key={items.id}
              className=" shadow-md bottom-[1.5rem] z-10 md:bottom-[2rem] lg:hover:scale-95 hover:bg-gray-200 "
            >
              <div
                id="mappingTitle"
                className="text-center text-[30px] md:text-[35px] lg:text-[23px] mb-10 font-bold tracking-wider bg-orange-900 text-gray-50 py-3 "
              >
                <h1>{items.planType} </h1>
              </div>

              <div
                id="mappingContent"
                className="flex flex-col items-center justify-center px-2 pb-2 "
              >
                <span className="relative mb-6 rounded-full ">
                  <img
                    src={items.planImg}
                    alt="image"
                    className="lg:h-[100px] lg:w-[100px] w-[110px] h-[110px] rounded-full"
                  />
                </span>
                <span className="text-[25px] md:text-[30px] lg:text-[18px] font-sans mb-2 font-semibold tracking-wider">
                  <p>{items.maximiumPlan} </p>
                  <p>{items.maximiumPlan} </p>
                </span>
                <span className="text-center text-green-600  text-[20px] md:text-[25px] lg:text-[15px] tracking-wider ">
                  <p>{items.investSpan.duration} </p>
                  <p className="flex flex-row items-center">
                    {items.investSpan.moneyback}{" "}
                    <p className="pl-2 text-orange-500">
                      {items.investSpan.yesAns}
                    </p>{" "}
                  </p>
                  <p>{items.investSpan.EarnPercent} </p>
                </span>
                <Link
                  to={`/plans/${items.id}`}
                  className=" w-full py-3 hover:bg-orange-900 hover:text-gray-100 text-[25px] md:text-[28px] lg:text-[20px] mt-3 transition ease-in-out duration-300 text-center  "
                >
                  {items.Button}
                </Link>
              </div>
            </div>
          ))}
        </section>
        <ScrollToTopBtn />
      </main>
    </div>
  );
};

export default DashboardPlansComponent;
