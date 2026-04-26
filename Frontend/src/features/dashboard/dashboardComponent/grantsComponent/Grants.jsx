import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { confirmGrant } from "../../../../api/grantsApi";
import useAuth from "../../../../context/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Grants = () => {
  const [code, setCode] = useState("");
  const { user } = useAuth();

  // 🔐 SAFE TOKEN HANDLER
  const getToken = () => {
    return user?.accessToken || user?.token || localStorage.getItem("token");
  };

  // 🔥 MUTATION
  const confirmGrantMutation = useMutation({
    mutationFn: confirmGrant,

    onSuccess: (data) => {
      toast.success("Grant claimed successfully!");
      setCode("");
      console.log("New Balance:", data?.newBalance);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  // 🔥 HANDLE CLAIM
  const handleClaim = () => {
    if (!code) {
      toast.error("Enter your confirmation code");
      return;
    }

    const token = getToken();

    if (!token) {
      toast.error("You are not logged in");
      return;
    }

    confirmGrantMutation.mutate({
      code,
      token,
    });
  };

  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen bg-gray-50 px-4 lg:px-10">

      <ToastContainer position="top-right" autoClose={3000} />

      {/* HEADER */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Grants</h1>
        <p className="text-gray-500">
          Claim and track your financial grants
        </p>
      </section>

      {/* ================= CLAIM SECTION ================= */}
      <section className="bg-white rounded-2xl shadow p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Claim Grant
        </h2>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Confirmation Code"
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            className="border rounded-lg p-3 flex-1 tracking-widest focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            onClick={handleClaim}
            disabled={confirmGrantMutation.isPending}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
          >
            {confirmGrantMutation.isPending
              ? "Processing..."
              : "Confirm Grant"}
          </button>
        </div>
      </section>

      {/* ================= GRANT LIST ================= */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Your Grants
        </h2>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-4 font-semibold text-gray-500 border-b pb-3">
          <span>Amount</span>
          <span>Reference</span>
          <span>Status</span>
          <span>Date</span>
        </div>

        {/* SAMPLE ROW */}
        <div className="grid grid-cols-4 items-center py-4 border-b text-gray-700">
          <span>$500</span>
          <span>GR-123456</span>
          <span className="text-yellow-500 font-medium">Pending</span>
          <span>12 Aug 2025</span>
        </div>

        {/* EMPTY STATE */}
        <div className="text-center text-gray-400 py-6">
          No grants available
        </div>
      </section>
    </main>
  );
};

export default Grants;