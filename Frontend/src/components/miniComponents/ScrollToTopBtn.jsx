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
              className="fixed lg:bottom-[115px] bottom-[11vh] lg:right-[64px] md:right-[30px] right-[26px] lg:text-[40px] md:text-[100px] z-50  flex items-center justify-center  ease-in-out    text-[32px] bg-teal-700 text-teal-100 hover:bg-teal-600 rounded-full p-2 shadow-md transition duration-200"
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
