import React, { useState } from "react";

const AdminGrants = () => {
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [userId, setUserId] = useState("");

  // 🔹 Mock role (replace with auth context)
  const role = "admin"; // or "user"

  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen bg-gray-50 px-4 lg:px-10">
      
      {/* HEADER */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Grants</h1>
        <p className="text-gray-500">
          Manage and claim financial grants
        </p>
      </section>

      {/* ================= ADMIN PANEL ================= */}
      {role === "admin" && (
        <section className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create Grant
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border rounded-lg p-3 w-full"
            />

            <input
              type="number"
              placeholder="Amount ($)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded-lg p-3 w-full"
            />

            <button className="bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700 transition">
              Create Grant
            </button>
          </div>
        </section>
      )}

      {/* ================= USER CLAIM ================= */}
      {role === "user" && (
        <section className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Claim Grant
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter Confirmation Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border rounded-lg p-3 flex-1"
            />

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Confirm Grant
            </button>
          </div>
        </section>
      )}

      {/* ================= GRANT LIST ================= */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          All Grants
        </h2>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-5 font-semibold text-gray-500 border-b pb-3">
          <span>User</span>
          <span>Amount</span>
          <span>Reference</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* SAMPLE ROW (map your API data here) */}
        <div className="grid grid-cols-5 items-center py-4 border-b text-gray-700">
          <span>user123</span>
          <span>$500</span>
          <span>GR-123456</span>

          <span className="text-yellow-500 font-medium">Pending</span>

          <div className="flex gap-2">
            {role === "admin" && (
              <>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Reject
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminGrants;