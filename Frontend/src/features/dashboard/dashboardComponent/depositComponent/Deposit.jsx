import React from "react";

const Deposit = () => {
  return (
    <main className="pt-[14.2vh] lg:pt-[16vh] min-h-screen ">
      <section className="mx-auto bg-white shadow-lg rounded-lg p-6">

        {/* Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-teal-900">FVMBank Deposit</h1>
          <p className="text-gray-500 text-sm">
            Add funds to your FVMBank account securely
          </p>
        </div>

        {/* Deposit Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Select Account */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Deposit To
            </label>
            <select className="border rounded p-2 mt-1">
              <option>FVMBank USD Account - 204839293</option>
              <option>FVMBank EUR Account - 839201233</option>
              <option>FVMBank GBP Account - 382920199</option>
            </select>
          </div>

          {/* Deposit Method */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Deposit Method
            </label>
            <select className="border rounded p-2 mt-1">
              <option>Bank Wire Transfer</option>
              <option>International Transfer</option>
              <option>Card Deposit</option>
              <option>Crypto Deposit</option>
            </select>
          </div>

          {/* Currency */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Currency
            </label>
            <select className="border rounded p-2 mt-1">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter deposit amount"
              className="border rounded p-2 mt-1"
            />
          </div>

          {/* Reference */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-600">
              Deposit Reference
            </label>
            <input
              type="text"
              placeholder="Transaction reference or note"
              className="border rounded p-2 mt-1"
            />
          </div>

          {/* Upload Receipt */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-600">
              Upload Payment Proof (Optional)
            </label>
            <input
              type="file"
              className="border rounded p-2 mt-1 bg-white"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
            >
              Submit Deposit
            </button>
          </div>

        </form>

        {/* Recent Deposits */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-teal-900 mb-4">
            Recent Deposits
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-teal-900 text-white">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Method</th>
                  <th className="p-2 text-left">Currency</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Wire Transfer</td>
                  <td className="p-2">USD</td>
                  <td className="p-2 text-green-600">+$2,500</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">04 Mar 2026</td>
                  <td className="p-2">Card Deposit</td>
                  <td className="p-2">EUR</td>
                  <td className="p-2 text-green-600">+€900</td>
                  <td className="p-2 text-yellow-600">Processing</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">02 Mar 2026</td>
                  <td className="p-2">Crypto Deposit</td>
                  <td className="p-2">USD</td>
                  <td className="p-2 text-green-600">+$1,200</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>
    </main>
  );
};

export default Deposit;