import React from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";

const MyCurrentReferrals = () => {
  return (
    <main>
      <section className="px-6 py-6 text-gray-100 bg-teal-900 rounded ">
        <div
          id=""
          className="text-[29px] md:text-[30px] lg:text-[23px] font-semibold flex flex-col items-center justify-center gap-10"
        >
          <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-green-600 ">
            My<p className="font-bold text-orange-600 ">Current</p>{" "}
            <p className="text-gray-600">Referrals</p>
          </p>
          <p className="text-[29px] md:text-[30px] lg:text-[18px] ">
            You have no referral at the moment.
          </p>
        </div>
        
        <div id="currentReferralsCon" className="">
          <div id="currentReferralsSon" className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-between text-[29px] md:text-[30px] lg:text-[20px]">
              <span className="flex flex-row items-center gap-2">
                <span className="flex flex-row items-center gap-2">
                  <label htmlFor="show">Show:</label>
                  <select
                    name="show"
                    id="show"
                    className="bg-teal-900 border-none rounded outline-none ring-1 ring-gray-100"
                  >
                    <option value="10">10</option>
                    <option value="10">25</option>
                    <option value="10">50</option>
                    <option value="10">100</option>
                  </select>
                </span>
                <p>entries</p>
              </span>
              
              <span className="flex flex-row justify-center gap-1">
                <label htmlFor="search">Search:</label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  className="w-full "
                />
              </span>
            </div>

            <div
              id="currentReferralsCon"
              className="border-[1px] border-gray-50 p-1 "
            >
              <div
                id="currentReferralsSon"
                className="border-[1px] border-gray-50 p-1 "
              >
                <div className="grid gap-1 lg:grid-cols-5">
                  <span className="flex flex-row items-center justify-between border-[1px] border-gray-50 py-3 px-3 ">
                    <p>#</p>
                    <span>
                        <CgArrowsExchangeAltV />
                    </span>
                  </span>

                  <span className="flex flex-row items-center justify-between border-[1px] border-gray-50 py-3 px-3 ">
                    <p>Upliner</p>
                    <span>
                        <CgArrowsExchangeAltV />
                    </span>
                  </span>

                  <span className="flex flex-row items-center justify-between border-[1px] border-gray-50 py-3 px-3 ">
                    <p>Downliner</p>
                    <span>
                        <CgArrowsExchangeAltV />
                    </span>
                  </span>

                  <span className="flex flex-row items-center justify-between border-[1px] border-gray-50 py-3 px-3 ">
                    <p>Amount</p>
                    <span>
                        <CgArrowsExchangeAltV />
                    </span>
                  </span>
                  
                  <span className="flex flex-row items-center justify-between border-[1px] border-gray-50 py-3 px-3 ">
                    <p>Date</p>
                    <span>
                        <CgArrowsExchangeAltV />
                    </span>
                  </span>
                </div>
                <div className="border-[1px] border-gray-50 px-4 py-4 flex justify-center mt-1 ">
                    <span>No data available in table</span>
                </div>
              </div>
            </div>

            <div id="footerDiv">
              <span className="flex flex-row items-center gap-1">
                Showing<span>0</span>to<span>0</span>of<span>0</span>entries
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyCurrentReferrals;
