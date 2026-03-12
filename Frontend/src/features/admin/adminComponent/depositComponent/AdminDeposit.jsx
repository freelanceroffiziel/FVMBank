import React from "react";

const AdminDeposit = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen ">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg">

        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">FVMBank Deposit</h1>
          <p className="text-sm text-gray-500">
            Add funds to your FVMBank account securely
          </p>
        </div>

        {/* Deposit Form */}
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Select Account */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Deposit To
            </label>
            <select className="p-2 mt-1 border rounded">
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
            <select className="p-2 mt-1 border rounded">
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
            <select className="p-2 mt-1 border rounded">
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
              className="p-2 mt-1 border rounded"
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
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* Upload Receipt */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-600">
              Upload Payment Proof (Optional)
            </label>
            <input
              type="file"
              className="p-2 mt-1 bg-white border rounded"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800"
            >
              Submit Deposit
            </button>
          </div>

        </form>

        {/* Recent Deposits */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Recent Deposits
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="text-white bg-teal-900">
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

export default AdminDeposit;