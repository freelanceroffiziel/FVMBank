import React, { useEffect } from "react";
import Slider from "react-slick";
import { dataReviews } from "../../components/homeComponents/homeJsonFolder/dataReViews";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollReveal from "scrollreveal";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 z-10 p-3 text-teal-800 transition transform -translate-y-1/2 border-2 border-teal-800 rounded-full opacity-0 cursor-pointer hover:bg-teal-800 hover:text-white top-1/2 group-hover:opacity-100 "
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 z-10 p-3 text-teal-800 transition transform -translate-y-1/2 border-2 border-teal-800 rounded-full opacity-0 cursor-pointer group-hover:opacity-100 hover:bg-teal-800 hover:text-white top-1/2 "
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const DataReViews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    ScrollReveal().reveal("#dataReviews", {
      origin: "bottom",
      distance: "35px",
      duration: 1100,
      delay: 100,
    });
  });

  return (
    <main className="flex items-center justify-center w-full py-12 ">
      <section id="dataReviews" className="w-full px-6 max-w-7xl lg:px-12 group ">
        <Slider {...settings}>
          {dataReviews.map((datas) => (
            <div key={datas.id} className="" id="">
              <div className=" h-[450px] text-navyBlue rounded-xl flex flex-col overflow-hidden">
                <div
                  id="imgCon"
                  className="flex items-center justify-center h-56 bg-navyBlue"
                >
                  <img
                    src={datas.Image}
                    alt={`${datas.name}' review`}
                    className="object-cover rounded-full h-44 w-44"
                  />
                </div>
                <div
                  id="textCon"
                  className="flex flex-col items-center justify-center gap-5 px-8 py-5 text-center md:px-11"
                >
                  <p className="text-[19px] md:text-[28px] lg:text-[17px] ">
                    {datas.para}
                  </p>
                  <p className="font-bold text-[25px] md:text-[33px] lg:text-[22px] ">
                    {datas.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default DataReViews;
