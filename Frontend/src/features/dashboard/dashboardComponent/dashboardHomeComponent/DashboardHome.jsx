import React, { useEffect } from "react";
import {
  RiMoneyDollarBoxFill,
  RiBankFill,
  RiUserSharedFill,
  RiArrowUpCircleFill,
  RiNotification3Fill,
} from "react-icons/ri";
import DashboardBalance from "../dashboardBalance/DashboardBalnace";
import CopyAbleInput from "../dashboardMniComponents/CopyAbleInput";

const DashboardHome = () => {
  useEffect(() => {
    // Example: ScrollReveal for card animations (optional)
    // ScrollReveal().reveal(".dashboard-card", { interval: 200 });
  }, []);

  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen">
      <div className="mx-auto px-4 lg:px-2 flex flex-col gap-10">
        {/* Quick Action Cards */}
        <div className="grid gap-4 lg:grid-cols-4">
          {/* Transfer via Card */}
          <div className="dashboard-card flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <RiMoneyDollarBoxFill className="text-4xl text-teal-600" />
            <p className="font-semibold text-gray-800 flex justify-between items-center">
              Transfer via Card
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                0
              </span>
            </p>
          </div>

          {/* Transfer to Another Bank */}
          <div className="dashboard-card flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <RiBankFill className="text-4xl text-teal-600" />
            <p className="font-semibold text-gray-800 flex justify-between items-center">
              Transfer to Another Bank
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                0
              </span>
            </p>
          </div>

          {/* Internal Bank Transfer */}
          <div className="dashboard-card flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <RiArrowUpCircleFill className="text-4xl text-teal-600" />
            <p className="font-semibold text-gray-800 flex justify-between items-center">
              Transfer within Bank
              <span className="bg-gray-200 text-gray-800 text-sm px-2 py-0.5 rounded-full">
                1
              </span>
            </p>
          </div>

          {/* Referral / Invite */}
          <div className="dashboard-card flex flex-col justify-between gap-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
            <RiUserSharedFill className="text-4xl text-teal-600" />
            <p className="font-semibold text-gray-800 flex justify-between items-center">
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
        <section className="grid lg:grid-cols-3 gap-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-teal-900 mb-3 flex items-center gap-2">
              <RiNotification3Fill /> Notifications
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="border-b pb-1">Payment of $120 completed</li>
              <li className="border-b pb-1">New login from Lagos, Nigeria</li>
              <li className="border-b pb-1">Virtual card request approved</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
            <h2 className="text-lg font-bold text-teal-900 mb-2">
              Quick Links
            </h2>
            <button className="py-2 bg-teal-900 text-white rounded hover:bg-teal-800 transition">
              Apply for Loan
            </button>
            <button className="py-2 bg-teal-900 text-white rounded hover:bg-teal-800 transition">
              View Cards
            </button>
            <button className="py-2 bg-teal-900 text-white rounded hover:bg-teal-800 transition">
              Fund Wallet
            </button>
          </div>

          {/* Copyable Account Info */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-teal-900 mb-3">
              Your Account
            </h2>
            <CopyAbleInput />
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-bold text-teal-900 mb-3">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-2">07 Mar 2026</td>
                  <td className="p-2">Transfer to John Smith</td>
                  <td className="p-2">Debit</td>
                  <td className="p-2 text-red-600">-$120</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Received from Alice</td>
                  <td className="p-2">Credit</td>
                  <td className="p-2 text-green-600">+$250</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>
                <tr className="border-t">
                  <td className="p-2">05 Mar 2026</td>
                  <td className="p-2">Netflix Subscription</td>
                  <td className="p-2">Debit</td>
                  <td className="p-2 text-red-600">-$15</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DashboardHome;
