import React from "react";

const AdminActivityLogs = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">Activity Logs</h1>
          <p className="text-sm text-gray-500">
            Monitor all activities performed on your account
          </p>
        </div>

        {/* Summary */}
        <div className="grid gap-6 mb-10 md:grid-cols-3">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Total Activities</p>
            <p className="text-xl font-bold text-teal-900">245</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Logins</p>
            <p className="text-xl font-bold text-green-600">120</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-xl font-bold text-blue-600">85</p>
          </div>
        </div>

        {/* Activity Table */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Recent Activities
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="text-white bg-teal-900">
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
        <div className="grid gap-4 mt-8 md:grid-cols-2">
          <button className="py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800">
            Download Logs
          </button>

          <button className="py-3 font-semibold transition bg-gray-200 rounded-lg hover:bg-gray-300">
            Clear Logs
          </button>
        </div>
      </section>
    </main>
  );
};

export default AdminActivityLogs;
