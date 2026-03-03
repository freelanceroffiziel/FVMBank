import React from "react";
import { Link } from "react-router-dom";
import { GiFrayedArrow } from "react-icons/gi";

const AdminHeader = () => {
  return (
    <main className="sideBarHeaderCon mt-0  ">
      <div
        id="logoHeaderSohn"
        className=" border-b-[1px] border-gray-300 pt-3 pb-2.5 rounded-tl-2xl pl-3 "
      >
        <Link to={""} className="flex flex-row items-center ">
          
          <span className="text-[30px] font-extrabold font-serif tracking-wider ">
            FVM<span className="font-bold text-red-700">Bank</span>
          </span>
        </Link>
      </div>
    </main>
  );
};

export default AdminHeader;
