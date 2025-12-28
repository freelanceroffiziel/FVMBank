import React from "react";

const MiniBelow = () => {
  return (
    <main>
      <section id="thirdHeroSec" className="px-4 lg:px-16 pt-4 ">
        <ul className="flex flex-col items-center gap-5 lg:flex-row text-teal-900">
          <li className="flex flex-col items-center justify-center gap-2 lg:text-start lg:justify-start lg:items-start">
            <span className="text-[45px] md:text-[25px] lg:text-[34px] font-serif font-semibold">
              25<span>K</span>
            </span>
            <p className="text-[20px] md:text-[25px] lg:text-[20px]">
              Active Users
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 lg:text-start lg:justify-start lg:items-start">
            <span className="text-[45px] md:text-[25px] lg:text-[34px] font-serif font-semibold">
              12<span>+</span>
            </span>
            <p className="text-[20px] md:text-[25px] lg:text-[20px]">
              Years of Experience
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 lg:text-start lg:justify-start lg:items-start">
            <span className="text-[45px] md:text-[25px] lg:text-[34px] font-serif font-semibold">
              28
            </span>
            <p className="text-[20px] md:text-[25px] lg:text-[20px]">
              Available Countries
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MiniBelow;
