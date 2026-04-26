import React from "react";
import {
  RiMoneyDollarBoxFill,
  RiBankFill,
  RiUserSharedFill,
  RiArrowUpCircleFill,
  RiNotification3Fill,
} from "react-icons/ri";
import DashboardBalance from "../dashboardBalance/DashboardBalance";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";
import DashboardRcTransactions from "../dashboardRcTransactionComp/DashboardRcTransaction";
import DashboardNotification2 from "../dashboardNotification2/DashboardNotification2";

const DashboardHome = ({setSelectedSection}) => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <div className="flex flex-col gap-10 px-0 mx-auto lg:px-2">
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="flex flex-col justify-between gap-4 p-4 transition bg-white rounded-lg shadow dashboard-card hover:shadow-lg">
            <RiMoneyDollarBoxFill className="text-4xl text-teal-600" />
            <p className="flex items-center justify-between font-semibold text-gray-800">
              Transfer via Card
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                0
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 p-4 transition bg-white rounded-lg shadow dashboard-card hover:shadow-lg">
            <RiBankFill className="text-4xl text-teal-600" />
            <p className="flex items-center justify-between font-semibold text-gray-800">
              Transfer to Another Bank
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                0
              </span>
            </p>
          </div>

          <div className="flex flex-col justify-between gap-4 p-4 transition bg-white rounded-lg shadow dashboard-card hover:shadow-lg">
            <RiArrowUpCircleFill className="text-4xl text-teal-600" />
            <p className="flex items-center justify-between font-semibold text-gray-800">
              Transfer within Bank
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                1
              </span>
            </p>
          </div>

          {/* Referral / Invite */}
          <div className="flex flex-col justify-between gap-4 p-4 transition bg-white rounded-lg shadow dashboard-card hover:shadow-lg">
            <RiUserSharedFill className="text-4xl text-teal-600" />
            <p className="flex items-center justify-between font-semibold text-gray-800">
              Invite & Earn
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                12
              </span>
            </p>
          </div>
        </div>

        {/* Dashboard Balance */}
        <DashboardBalance />

        {/* Notifications & Quick Links */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Notifications */}
          <section>
            <DashboardNotification2 />
          </section>

          {/* Quick Actions */}
          <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow">
            <h2 className="mb-2 text-lg font-bold text-teal-900">
              Quick Links
            </h2>
            <button
            onClick={() => setSelectedSection("loans")} className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              Apply for Loan
            </button>
            <button
            onClick={() => setSelectedSection("cards")} className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              View Cards
            </button>
            <button
            onClick={() => setSelectedSection("deposit")} className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              Fund Wallet
            </button>
          </div>

          {/* Copyable Account Info */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="mb-3 text-lg font-bold text-teal-900">
              Your Account
            </h2>
            <CopyAbleInput />
          </div>
        </section>

        {/* Recent Transactions */}
        <section>
          <DashboardRcTransactions />
        </section>
      </div>
    </main>
  );
};

export default DashboardHome;
