import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { confirmGrant } from "../../../../api/grantsApi";
import useAuth from "../../../../context/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GrantsHistory from "./GrantsHistory";

const Grants = () => {
  const [code, setCode] = useState("");
  const { user } = useAuth();

  const getToken = () =>
    user?.accessToken || user?.token || localStorage.getItem("token");

  const confirmGrantMutation = useMutation({
    mutationFn: confirmGrant,

    onSuccess: (data) => {
      toast.success("Grant claimed successfully!");
      setCode("");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleClaim = () => {
    if (!code) return toast.error("Enter your confirmation code");

    const token = getToken();

    if (!token) return toast.error("You are not logged in");

    confirmGrantMutation.mutate({
      code,
      token,
    });
  };

  return (
    <main className=" min-h-screen pt-[14vh] lg:pt-[16vh] px-4 lg:px-6">

      <ToastContainer position="top-right" autoClose={3000} />

      {/* PAGE HEADER (ONLY ONCE - CLEAN FIXED STYLE) */}
      <section className="sticky top-[14vh] z-20  pb-4">
        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Grants
          </h1>
          <p className="text-gray-500">
            Claim and track your financial grants
          </p>
        </div>
      </section>

      {/* CLAIM SECTION */}
      <section className="bg-white rounded-2xl shadow p-6 mb-8">
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

      {/* HISTORY SECTION */}
      <section className="">
        <GrantsHistory />
      </section>

    </main>
  );
};

export default Grants;