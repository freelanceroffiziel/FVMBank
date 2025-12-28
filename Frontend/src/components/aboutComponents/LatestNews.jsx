import React, { useEffect } from "react";
import { latestNewsJs } from "./aboutJsFolder/latestNewsJs";
import ScrollReveal from "scrollreveal";

const LatestNews = () => {
  useEffect(() => {
    ScrollReveal().reveal("#newsConSon", {
      origin: "bottom",
      distance: "35px",
      duration: 1200,
      delay: 150,
    });
  });

  return (
    <>
      <main id="">
        <section
          id="newsConSon"
          className="grid gap-5 px-6 lg:grid-cols-3 lg:px-16 "
        >
          {latestNewsJs.map((newsItems) => (
            <div key={newsItems.id} className="hover:shadow group ">
              <div id="imgDivNews" className="">
                <img src={newsItems.newsImg} alt="" />
              </div>
              <div
                id=""
                className="bg-white shadow-md px-4 py-6 lg:h-[30vh] h-[35vh] group-hover:text-teal-700 "
              >
                <h2 className="text-[30px] md:text-[28px] lg:text-[30px] leading-8 group-hover:text-teal-800 ">
                  {" "}
                  {newsItems.heading}{" "}
                </h2>
                <p className="mt-2 group-hover:text-teal-500 text-[22px] md:text-[28px] lg:text-[18px]">
                  {newsItems.para}
                </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default LatestNews;
