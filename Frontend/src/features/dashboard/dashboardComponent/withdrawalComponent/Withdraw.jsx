import React from "react";

const Withdraw = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen ">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg ">

        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">
            FVMBank Withdrawal
          </h1>
          <p className="text-sm text-gray-500">
            Withdraw funds from your FVMBank account
          </p>
        </div>

        {/* Withdrawal Form */}
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {/* Withdraw From */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Withdraw From
            </label>
            <select className="p-2 mt-1 border rounded">
              <option>FVMBank USD Account - 204839293</option>
              <option>FVMBank EUR Account - 839201233</option>
              <option>FVMBank GBP Account - 382920199</option>
            </select>
          </div>

          {/* Withdrawal Method */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Withdrawal Method
            </label>
            <select className="p-2 mt-1 border rounded">
              <option>International Bank Transfer</option>
              <option>Wire Transfer</option>
              <option>Card Withdrawal</option>
              <option>Crypto Withdrawal</option>
            </select>
          </div>

          {/* Bank Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Recipient Bank
            </label>
            <select className="p-2 mt-1 border rounded">
              <option>FVMBank</option>
              <option>JPMorgan Chase Bank</option>
              <option>Bank of America</option>
              <option>HSBC</option>
              <option>Barclays Bank</option>
              <option>Deutsche Bank</option>
              <option>Citibank</option>
              <option>Standard Chartered</option>
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

          {/* Account Number / IBAN */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Account Number / IBAN
            </label>
            <input
              type="text"
              placeholder="Enter account number or IBAN"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* SWIFT Code */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              SWIFT / BIC Code
            </label>
            <input
              type="text"
              placeholder="Enter SWIFT code"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* Amount */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Amount
            </label>
            <input
              type="number"
              placeholder="Enter withdrawal amount"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Description
            </label>
            <input
              type="text"
              placeholder="Optional note"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800"
            >
              Submit Withdrawal
            </button>
          </div>

        </form>

        {/* Recent Withdrawals */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Recent Withdrawals
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
                  <td className="p-2 text-red-600">-$1,200</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">04 Mar 2026</td>
                  <td className="p-2">International Transfer</td>
                  <td className="p-2">EUR</td>
                  <td className="p-2 text-red-600">-€800</td>
                  <td className="p-2 text-yellow-600">Processing</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">02 Mar 2026</td>
                  <td className="p-2">Crypto Withdrawal</td>
                  <td className="p-2">USD</td>
                  <td className="p-2 text-red-600">-$500</td>
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

export default Withdraw;