import React from "react";
import {
  RiMoneyDollarBoxFill,
  RiBankFill,
  RiUserSharedFill,
  RiArrowUpCircleFill,
  RiNotification3Fill,
} from "react-icons/ri";
import AdminBalnace from "../adminBalance/AdminBalnace";
import AdminCopyAbleInput from "../adminMniComponents/AdminCopyAbleInput";

const AdminHome = () => {
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
        <AdminBalnace />

        {/* Notifications & Quick Links */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Notifications */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="flex items-center gap-2 mb-3 text-lg font-bold text-teal-900">
              <RiNotification3Fill /> Notifications
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="pb-1 border-b">Payment of $120 completed</li>
              <li className="pb-1 border-b">New login from Lagos, Nigeria</li>
              <li className="pb-1 border-b">Virtual card request approved</li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col gap-3 p-4 bg-white rounded-lg shadow">
            <h2 className="mb-2 text-lg font-bold text-teal-900">
              Quick Links
            </h2>
            <button className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              Apply for Loan
            </button>
            <button className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              View Cards
            </button>
            <button className="py-2 text-white transition bg-teal-900 rounded hover:bg-teal-800">
              Fund Wallet
            </button>
          </div>

          {/* Copyable Account Info */}
          <div className="p-4 bg-white rounded-lg shadow">
            <h2 className="mb-3 text-lg font-bold text-teal-900">
              Your Account
            </h2>
            <AdminCopyAbleInput />
          </div>
        </section>

        {/* Recent Transactions */}
        <section className="p-4 bg-white rounded-lg shadow">
          <h2 className="mb-3 text-lg font-bold text-teal-900">
            Recent Transactions
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="text-white bg-teal-900">
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

export default AdminHome;
