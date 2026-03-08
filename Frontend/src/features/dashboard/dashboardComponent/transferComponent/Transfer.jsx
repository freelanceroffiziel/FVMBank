import React from "react";

const Transfer = () => {
  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen ">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg ">
        {/* Header */}
        <div className="pb-4 mb-6 border-b">
          <h1 className="text-2xl font-bold text-teal-900">FVMBank Transfer</h1>
          <p className="text-sm text-gray-500">Send money worldwide securely</p>
        </div>

        {/* Transfer Form */}
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* From Account */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              From Account
            </label>
            <select className="p-2 mt-1 border rounded">
              <option>FVMBank USD Account - 204839293</option>
              <option>FVMBank EUR Account - 839201233</option>
              <option>FVMBank GBP Account - 382920199</option>
            </select>
          </div>

          {/* Recipient Bank */}
          {/* Recipient Bank */}
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

          {/* Country */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Destination Country
            </label>
            <select className="p-2 mt-1 border rounded">
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Germany</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Singapore</option>
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
              <option>CAD ($)</option>
              <option>AUD ($)</option>
            </select>
          </div>

          {/* IBAN */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">IBAN</label>
            <input
              type="text"
              placeholder="Enter IBAN"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* SWIFT */}
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

          {/* Recipient Name */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600">
              Recipient Name
            </label>
            <input
              type="text"
              placeholder="Full name"
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
              placeholder="Enter amount"
              className="p-2 mt-1 border rounded"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-semibold text-gray-600">
              Payment Description
            </label>
            <textarea
              placeholder="Purpose of transfer"
              className="p-2 mt-1 border rounded"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition bg-teal-900 rounded-lg hover:bg-teal-800"
            >
              Transfer
            </button>
          </div>
        </form>

        {/* Recent Transfers */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold text-teal-900">
            Recent Transfers
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="text-white bg-teal-900">
                <tr>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Recipient</th>
                  <th className="p-2 text-left">Bank</th>
                  <th className="p-2 text-left">Amount</th>
                  <th className="p-2 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-2">06 Mar 2026</td>
                  <td className="p-2">Michael Smith</td>
                  <td className="p-2">JPMorgan Chase</td>
                  <td className="p-2 text-red-600">-$1,500</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">04 Mar 2026</td>
                  <td className="p-2">Emma Wilson</td>
                  <td className="p-2">HSBC</td>
                  <td className="p-2 text-red-600">-€900</td>
                  <td className="p-2 text-green-600">Completed</td>
                </tr>

                <tr className="border-t">
                  <td className="p-2">02 Mar 2026</td>
                  <td className="p-2">Lucas Müller</td>
                  <td className="p-2">Deutsche Bank</td>
                  <td className="p-2 text-red-600">-€2,300</td>
                  <td className="p-2 text-yellow-600">Processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Transfer;
