import React from "react";
import ReferralComponentsReferred from "./ReferralComponentsReferred";
import MyCurrentReferrals from "./MyCurrentReferrals";
import MyMeferralEarnings from "../referralComponents/MyMeferralEarnings";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";

const Referrals = () => {
  return (
    <main className="">
      <section className="">
        <div id="referralSonCon">
          <div id="" className="mb-10">
            <ReferralComponentsReferred />
          </div>
          <div id="">
            <CopyAbleInput />
          </div>
          <div id="myCurrentReferrals" className="mt-10">
            <MyCurrentReferrals />
          </div>
          <div id="myMeferralEarnings" className="mt-10">
            <MyMeferralEarnings />
          </div>
          <div id=""></div>
        </div>
      </section>
    </main>
  );
};

export default Referrals;
