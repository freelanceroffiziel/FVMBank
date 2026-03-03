import React from "react";
import Marquee from "react-fast-marquee";
// import { paymentjsontwo } from "../../dashboard/dashboardComponent/dashboardjson/paymentjsontwo";
const AdminPaymentMaquee2 = () => {
  return (
    <div className=" lg:w-full md:w-full text-gray-950/25 w-full ">
      <Marquee
        speed={35}
        direction="right"
        className="flex gap- w-full overflow-y-hidden"
      >
        {paymentjsontwo.map((companies) => (
          <div
            key={companies.id}
            className="flex flex-col items-center justify-center bg-white/80 border border-gray-200 shadow-md w-40 h-40 rounded-xl hover:shadow-lg hover:bg-white transition-all duration-300 "
          >
            <div className="imgDiv flex items-center justify-center h-16">
              <img
                src={companies.Img}
                alt={companies.name}
                onError={(e) => (e.target.src = "/fallback-logo.png")}
                className="max-h-10 w-auto object-contain"
              />
            </div>

            <div className="content text-center mt-3">
              <p className="text-[16px] text-gray-800 font-semibold"> {companies.name} </p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AdminPaymentMaquee2;
