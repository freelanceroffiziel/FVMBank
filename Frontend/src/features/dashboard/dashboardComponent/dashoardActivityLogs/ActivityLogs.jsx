import React from "react";

const ActivityLogs = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen">
      <section className="mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-teal-900">Activity Logs</h1>
          <p className="text-gray-500 text-sm">
            Monitor all activities performed on your account
          </p>
        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Total Activities</p>
            <p className="text-xl font-bold text-teal-900">245</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Logins</p>
            <p className="text-xl font-bold text-green-600">120</p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-xl font-bold text-blue-600">85</p>
          </div>
        </div>

        {/* Activity Table */}
        <div>
          <h2 className="text-lg font-bold text-teal-900 mb-4">
            Recent Activities
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Activity</th>
                  <th className="p-2 text-left">Device</th>
                  <th className="p-2 text-left">Location</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">07 Mar 2026</td>
                  <td className="p-2">Login to Account</td>
                  <td className="p-2">Chrome - Windows</td>
                  <td className="p-2">Lagos, Nigeria</td>
                  <td className="p-2 text-green-600">Successful</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Transfer to John Smith</td>
                  <td className="p-2">Mobile App</td>
                  <td className="p-2">Lagos, Nigeria</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">05 Mar 2026</td>
                  <td className="p-2">Password Change</td>
                  <td className="p-2">Chrome - Mac</td>
                  <td className="p-2">Abuja, Nigeria</td>
                  <td className="p-2 text-green-600">Successful</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">03 Mar 2026</td>
                  <td className="p-2">Card Payment - Amazon</td>
                  <td className="p-2">Web App</td>
                  <td className="p-2">Lagos, Nigeria</td>
                  <td className="p-2 text-yellow-600">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <button className="bg-teal-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
            Download Logs
          </button>

          <button className="bg-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Clear Logs
          </button>
        </div>
      </section>
    </main>
  );
};

export default ActivityLogs;
