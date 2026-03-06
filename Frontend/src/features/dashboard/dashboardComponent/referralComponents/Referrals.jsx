import React from "react";
import ReferralComponentsReferred from "./ReferralComponentsReferred";
import MyCurrentReferrals from "./MyCurrentReferrals";
import MyMeferralEarnings from "../referralComponents/MyMeferralEarnings";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";

const Referrals = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] ">
      <section className="">
        <div id="referralSonCon">
          <div id="" className="mb-3">
            <ReferralComponentsReferred />
          </div>
          <div id="">
            <CopyAbleInput />
          </div>
          <div id="myCurrentReferrals" className="mt-3">
            <MyCurrentReferrals />
          </div>
          <div id="myMeferralEarnings" className="mt-3">
            <MyMeferralEarnings />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Referrals;
