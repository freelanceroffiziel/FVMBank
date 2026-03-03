import React from "react";
import ReferralComponentsReferred from "./ReferralComponentsReferred";
import MyCurrentReferrals from "./MyCurrentReferrals";
import MyMeferralEarnings from "./MyMeferralEarnings";
import CopyAbleInput from "./AdminCopyAbleInput";

const AdminReferrals = () => {
  return (
    <main className="">
      <section className="lg:pt-[9vh] pt-[8vh] pb-6 lg:pb-1 px-0.5 space-y-5 ">
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

export default AdminReferrals;
