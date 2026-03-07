import React from "react";

const Loans = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen">
      <section className="mx-auto bg-white shadow-lg rounded-lg p-6">

        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-teal-900">Loans</h1>
          <p className="text-gray-500 text-sm">
            Manage your loans and repayments
          </p>
        </div>

        {/* Loan Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Loan</p>
            <p className="text-xl font-bold text-teal-900">$10,000</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Outstanding Balance</p>
            <p className="text-xl font-bold text-red-600">$4,200</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Next Payment</p>
            <p className="text-xl font-bold text-green-600">$500</p>
          </div>

        </div>

        {/* Loan Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <button className="bg-teal-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
            Apply for Loan
          </button>

          <button className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition">
            Repay Loan
          </button>

          <button className="bg-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Loan Details
          </button>

        </div>

        {/* Loan History */}
        <div>
          <h2 className="text-lg font-bold text-teal-900 mb-4">
            Loan Repayment History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">

              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Description</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Monthly Loan Repayment</td>
                  <td className="p-2 text-green-600">$500</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">06 Feb 2026</td>
                  <td className="p-2">Monthly Loan Repayment</td>
                  <td className="p-2 text-green-600">$500</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">06 Jan 2026</td>
                  <td className="p-2">Monthly Loan Repayment</td>
                  <td className="p-2 text-green-600">$500</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Loans;