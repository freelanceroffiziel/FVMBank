import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAccountsByUser, createAccount, deleteAccount } from "../../../../api/accountApi";
import useAuth from "../../../../context/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accounts = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const [accountType, setAccountType] = useState("personal");
  const [transactionPin, setTransactionPin] = useState("");

  // Fetch user accounts
  const { data: accounts = [], isLoading } = useQuery({
    queryKey: ["accounts", user?.id],
    queryFn: () => getAccountsByUser(user.id),
    enabled: !!user,
  });

  // Create account
  const createAccountMutation = useMutation({
    mutationFn: createAccount,
    onSuccess: () => {
      toast.success("Account created successfully!");
      queryClient.invalidateQueries(["accounts", user.id]);
      setTransactionPin("");
      setAccountType("personal");
    },
    onError: (err) => toast.error(err.message),
  });

  // Delete account
  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      toast.success("Account deleted successfully!");
      queryClient.setQueryData(["accounts", user.id], data); // update cache
    },
    onError: (err) => toast.error(err.message),
  });

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!transactionPin || transactionPin.length !== 6) {
      toast.error("Transaction PIN must be 6 digits");
      return;
    }
    createAccountMutation.mutate({ accountType, transactionPin });
  };

  const handleDelete = (accountNumber) => {
    if (window.confirm("Are you sure you want to delete this account?")) {
      deleteAccountMutation.mutate(accountNumber);
    }
  };

  return (
    <main className="pt-[14vh] lg:pt-[16vh] min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={3000} />
      <section className="max-w-5xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold text-teal-800">Your Accounts</h1>

        {isLoading ? (
          <p>Loading accounts...</p>
        ) : accounts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {accounts.map((acc) => (
              <div
                key={acc._id}
                className="flex flex-col justify-between p-5 bg-white shadow-md rounded-xl hover:shadow-xl"
              >
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                      acc.accountType === "personal"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {acc.accountType.charAt(0).toUpperCase() + acc.accountType.slice(1)}
                  </span>
                  <h2 className="text-lg font-bold text-gray-800">
                    Account Number: {acc.accountNumber}
                  </h2>
                  <p className="font-medium text-gray-600">
                    Balance: ${Number(acc.balance || 0).toFixed(2)}
                  </p>
                  <p className="font-medium text-gray-600">IBAN: {acc.iban}</p>
                  <p className="font-medium text-gray-600">SWIFT: {acc.swiftCode}</p>
                </div>

                <button
                  onClick={() => handleDelete(acc.accountNumber)}
                  className="px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">You have no accounts yet.</p>
        )}

        {/* Create Account Form */}
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h2 className="mb-4 text-2xl font-semibold text-teal-700">Open a New Account</h2>
          <form onSubmit={handleCreateAccount} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Account Type</label>
              <select
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="personal">Personal</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Transaction PIN (6 digits)</label>
              <input
                type="password"
                value={transactionPin}
                onChange={(e) => setTransactionPin(e.target.value)}
                maxLength={6}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <button
              type="submit"
              disabled={createAccountMutation.isLoading}
              className="px-6 py-3 mt-2 font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700"
            >
              {createAccountMutation.isLoading ? "Creating..." : "Create Account"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Accounts;