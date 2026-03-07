import React from "react";

const Cards = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen ">
      <section className=" mx-auto bg-white shadow-lg rounded-lg p-6">

        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-teal-900">FVMBank Cards</h1>
          <p className="text-gray-500 text-sm">
            Manage your debit and virtual cards
          </p>
        </div>

        {/* Card Display */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Card 1 */}
          <div className="bg-gradient-to-r from-teal-900 to-teal-700 text-white p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold">FVMBank</h2>
              <span className="text-sm">VISA</span>
            </div>

            <p className="tracking-widest text-lg mb-6">
              **** **** **** 4832
            </p>

            <div className="flex justify-between text-sm">
              <div>
                <p className="opacity-70">Card Holder</p>
                <p className="font-semibold">John Smith</p>
              </div>

              <div>
                <p className="opacity-70">Expiry</p>
                <p className="font-semibold">12/28</p>
              </div>
            </div>
          </div>

          {/* Card Info */}
          <div className="flex flex-col justify-center gap-4">

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Card Type</p>
              <p className="font-semibold">Virtual Debit Card</p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Currency</p>
              <p className="font-semibold">USD</p>
            </div>

            <div className="border rounded-lg p-4">
              <p className="text-sm text-gray-500">Card Status</p>
              <p className="font-semibold text-green-600">Active</p>
            </div>

          </div>

        </div>

        {/* Card Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <button className="bg-teal-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
            Freeze Card
          </button>

          <button className="bg-gray-200 py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            View Card Details
          </button>

          <button className="bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-500 transition">
            Request New Card
          </button>

        </div>

        {/* Card Transactions */}
        <div>
          <h2 className="text-lg font-bold text-teal-900 mb-4">
            Recent Card Transactions
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Merchant</th>
                  <th className="p-2 text-left">Type</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Amazon</td>
                  <td className="p-2">Online Payment</td>
                  <td className="p-2 text-red-600">-$120</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">05 Mar 2026</td>
                  <td className="p-2">Netflix</td>
                  <td className="p-2">Subscription</td>
                  <td className="p-2 text-red-600">-$15</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">03 Mar 2026</td>
                  <td className="p-2">Apple Store</td>
                  <td className="p-2">Online Purchase</td>
                  <td className="p-2 text-red-600">-$450</td>
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

export default Cards;