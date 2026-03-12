import React from "react";
import ReferralComponentsReferred from "./ReferralComponentsReferred";
import MyCurrentReferrals from "./MyCurrentReferrals";
import MyMeferralEarnings from "./MyMeferralEarnings";
import AdminCopyAbleInput from "../adminMniComponents/AdminCopyAbleInput";

const AdminReferrals = () => {
  return (
    <main className="pt-[12vh] lg:pt-[16vh] min-h-screen">
      <section className="">
        <div id="referralSonCon">
          <div id="" className="mb-3">
            <ReferralComponentsReferred />
          </div>
          <div id="">
            <AdminCopyAbleInput />
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

export default AdminReferrals;
