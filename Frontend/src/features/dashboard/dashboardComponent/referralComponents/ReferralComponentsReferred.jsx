import React from "react";
import { RiMoneyDollarBoxFill, RiUserSharedFill } from "react-icons/ri";

const ReferralComponentsReferred = () => {
  return (
    <>
      <main id="ReferralComponentsReferredCon">
        <section
          id="ReferralComponentsReferredSon"
          className="flex items-center gap-5 lg:flex-row "
        >
          <div
            id=" noOfReferral"
            className="flex flex-row items-center justify-between w-full lg:w-[20vw] py-5 gap-6 p-4 transition-all bg-gray-900 rounded hover:bg-gray-950 text-gray-50 "
          >
            <div className="flex flex-col gap-3">
              <p className="text-[22px] md:text-[25px] lg:text-[16px] u">
                No. Of Referral
              </p>
              <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                <span
                  className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                  data-target="20"
                >
                  0
                </span>
              </span>
            </div>

            <span>
              {" "}
              <RiUserSharedFill className="text-[45px] md:text-[50px] lg:text-[30px] text-green-600  " />
            </span>
          </div>

          <div
            id=" referralearnings"
            className="flex flex-row items-center justify-between w-full lg:w-[20vw] py-5 gap-6 p-4 transition-all bg-green-900 rounded hover:bg-green-950 text-gray-50 "
          >
            <div className="flex flex-col gap-3">
              <p className="text-[22px] md:text-[25px] lg:text-[16px]  ">
                Referral Earnings
              </p>
              <span className="flex flex-row items-center text-[29px] md:text-[30px] lg:text-[23px] font-semibold ">
                $
                <span
                  className="count-numbers text-[29px] md:text-[30px] lg:text-[23px] font-semibold "
                  data-target="20000"
                >
                  0
                </span>
              </span>
            </div>

            <span>
              {" "}
              <RiMoneyDollarBoxFill className="text-[45px] md:text-[50px] lg:text-[35px] text-green-600  " />
            </span>
          </div>
        </section>
      </main>
    </>
  );
};

export default ReferralComponentsReferred;
