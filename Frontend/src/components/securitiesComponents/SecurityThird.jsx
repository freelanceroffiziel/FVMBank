import React from "react";
import { Link } from "react-router-dom";
import completeDetails from "../../assets/securityImg/thedigitalartist-point-4503630_1920.jpg"

const SecurityThird = () => {
  return (
    <main className="bg-teal-600">
      <section className="flex lg:flex-row flex-col lg:gap-0 gap-12 justify-between items-center lg:px-16 px-6 py-10 ">
        <div className="space-y-5  text-teal-50">
          <h1 className="text-teal-950 md:text-[25px] lg:text-[18px] text-[24px]">Our Online & Mobile Security Guarantee</h1>
          <p className=" lg:w-[30vw] w-full md:text-[25px] lg:text-[18px] text-[18px] ">
            You’re never liable for unauthorized purchases or transactions—as
            long as they’re reported promptly.
          </p>
          <Link className="bg-teal-900 rounded-2xl lg:py-1 lg:px-4 py-1 px-4  md:text-[25px] lg:text-[17px] text-[20px] text-center ">Get Complete Details</Link>
        </div>

        <div className="h-60 w-60">
            <img src={completeDetails} alt={completeDetails.className} className="h-60 w-60" />
        </div>
      </section>
    </main>
  );
};

export default SecurityThird;
