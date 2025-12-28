import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="sideBarHeaderCon">
      <section className="sideBarHeaderCon">
        <div id="logoHeaderSohn" className="flex flex-col">
          <Link to={""}>
            <span className="text-[30px] font-extrabold ">
              FVM
              <span className="font-bold text-orange-600">Bank</span>
            </span>
          </Link>

          <p className="text-[20px] md:text-[25px] lg:text-[18px] font-extrabold tracking-wider ">
            Hello:{" "}
            <span className="font-semibold text-green-700 text-shadow-orange-950 ">
              Smitcheal
            </span>{" "}
          </p>
        </div>
      </section>
    </main>
  );
};

export default Header;
