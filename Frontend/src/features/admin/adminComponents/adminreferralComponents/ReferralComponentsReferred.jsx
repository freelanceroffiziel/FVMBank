import React, { useEffect, useMemo } from "react";
import { RiMoneyDollarBoxFill, RiUserSharedFill } from "react-icons/ri";
import useAuth from "../../../../context/useAuth";

const ReferralComponentsReferred = () => {
  const { referralStats, fetchReferralStats, user } = useAuth();

  useEffect(() => {
    if (user?.token) {
      fetchReferralStats();
    }
  }, [user, fetchReferralStats]);

  const totalReferrals = useMemo(
    () => referralStats?.referralCount ?? 0,
    [referralStats]
  );

  const earnings = useMemo(
    () => referralStats?.referralEarnings ?? 0,
    [referralStats]
  );

  if (!user) {
    return (
      <div className="text-center py-10 text-gray-500">
        Please log in to view your referral stats.
      </div>
    );
  }

  return (
    <main id="ReferralComponentsReferredCon">
      <section
        id="ReferralComponentsReferredSon"
        className="flex items-center gap-5 lg:flex-row"
      >
        {/* Referral Count */}
        <div
          id="noOfReferral"
          className="flex flex-row items-center justify-between w-full lg:w-[20vw] py-5 gap-6 p-4 transition-all bg-teal-700 rounded hover:bg-teal-800 text-gray-50"
        >
          <div className="flex flex-col gap-3">
            <p className="text-[22px] md:text-[25px] lg:text-[16px]">
              No. of Referrals
            </p>
            <span className="text-[29px] md:text-[30px] lg:text-[23px] font-semibold">
              {totalReferrals}
            </span>
          </div>
          <RiUserSharedFill className="text-[45px] md:text-[50px] lg:text-[30px] text-teal-600" />
        </div>

        {/* Referral Earnings */}
        <div
          id="referralearnings"
          className="flex flex-row items-center justify-between w-full lg:w-[20vw] py-5 gap-6 p-4 transition-all bg-teal-900 rounded hover:bg-teal-950 text-gray-50"
        >
          <div className="flex flex-col gap-3">
            <p className="text-[22px] md:text-[25px] lg:text-[16px]">
              Referral Earnings
            </p>
            <span className="text-[29px] md:text-[30px] lg:text-[23px] font-semibold">
              ${earnings.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </span>
          </div>
          <RiMoneyDollarBoxFill className="text-[45px] md:text-[50px] lg:text-[35px] text-teal-600" />
        </div>
      </section>
    </main>
  );
};

export default ReferralComponentsReferred;
