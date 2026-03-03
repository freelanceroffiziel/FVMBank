import React from "react";
import ReferralComponentsReferred from "./ReferralComponentsReferred";
import MyCurrentReferrals from "./MyCurrentReferrals";
import MyMeferralEarnings from "../referralComponents/MyMeferralEarnings";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";

const Referrals = () => {
  return (
    <main className="pt-[4vh] lg:pt-[0vh]">
      <section className="">
        <div id="referralSonCon">
          <div id="" className="mb-4">
            <ReferralComponentsReferred />
          </div>
          <div id="">
            <CopyAbleInput />
          </div>
          <div id="myCurrentReferrals" className="mt-4">
            <MyCurrentReferrals />
          </div>
          <div id="myMeferralEarnings" className="mt-4">
            <MyMeferralEarnings />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Referrals;
