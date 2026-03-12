import React from "react";

const AdminLoans = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">

        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Loans</h1>
          <p className="text-sm text-gray-500">
            Manage your loans and repayments
          </p>
        </div>

        {/* Loan Summary */}
        <div className="grid gap-6 mb-10 md:grid-cols-3">

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Total Loan</p>
            <p className="text-xl font-bold text-teal-900">$10,000</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Outstanding Balance</p>
            <p className="text-xl font-bold text-red-600">$4,200</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Next Payment</p>
            <p className="text-xl font-bold text-green-600">$500</p>
          </div>

        </div>

        {/* Loan Actions */}
        <div className="grid gap-4 mb-10 md:grid-cols-3">

          <button className="py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800">
            Apply for Loan
          </button>

          <button className="py-3 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-500">
            Repay Loan
          </button>

          <button className="py-3 font-semibold transition bg-gray-200 rounded-lg hover:bg-gray-300">
            Loan Details
          </button>

        </div>

        {/* Loan History */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Loan Repayment History
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">

              <thead className="text-white bg-teal-900">
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

export default AdminLoans;