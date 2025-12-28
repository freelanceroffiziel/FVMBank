import React, { useEffect, useState } from "react";
import { RiArrowDropUpFill } from "react-icons/ri";

const ScrollToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <main>
        <section>
          {backToTop && (
            <button
              onClick={scrollUp}
              className="fixed lg:bottom-[90px] bottom-[4vh] lg:right-[64px] md:right-[30px] right-[26px] lg:text-[40px] md:text-[100px] text-[60px] text-teal-100 z-50  flex items-center justify-center  bg-teal-700 hover:bg-teal-600 rounded-full p-1.5 transition duration-100 ease-in-out"
            >
              <RiArrowDropUpFill />
            </button>
          )}
        </section>
      </main>
    </>
  );
};

export default ScrollToTopBtn;
