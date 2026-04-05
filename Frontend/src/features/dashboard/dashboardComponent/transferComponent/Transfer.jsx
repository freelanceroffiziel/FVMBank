import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { transferMoney } from "../../../../api/transferApi";
import { getAccountsByUser } from "../../../../api/accountApi";
import useAuth from "../../../../context/useAuth";
import { toast } from "react-toastify";

const Transfer = () => {
  const { user } = useAuth();

  const [selectedAccount, setSelectedAccount] = useState(null);
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionPin, setTransactionPin] = useState("");

  // Fetch real user accounts
  const { data: accounts = [], isLoading: accountsLoading } = useQuery({
    queryKey: ["accounts", user?.id],
    queryFn: () => getAccountsByUser(user.id),
    enabled: !!user,
  });

  // Transfer mutation
  const mutation = useMutation({
    mutationFn: transferMoney,
    onMutate: () => console.log("Transfer started..."),
    onSuccess: (data) => {
      toast.success(data.message || "Transfer successful!");
      setToAccountNumber("");
      setAmount("");
      setTransactionPin("");
      setSelectedAccount(null);
    },
    onError: (error) =>
      toast.error(error?.message || "Transfer failed. Please try again."),
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAccount) return toast.error("Select an account");
    if (!toAccountNumber.trim())
      return toast.error("Enter recipient account number");
    if (!amount || Number(amount) <= 0)
      return toast.error("Enter a valid amount");
    if (!transactionPin) return toast.error("Enter transaction PIN");

    mutation.mutate({
      fromAccountType: selectedAccount.accountType,
      toAccountNumber: toAccountNumber.trim(),
      amount: Number(amount),
      transactionPin,
    });
  };

  if (accountsLoading) return <p>Loading your accounts...</p>;
  if (!accounts.length)
    return <p>No accounts found. Please create an account first.</p>;

  return (
    <main className="pt-[21vh] min-h-screen">
      <section className="p-6 mx-auto bg-white rounded-lg shadow-lg lg:max-w-4xl">
        <h1 className="mb-6 text-2xl font-bold text-teal-900">
          Transfer Money
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* From Account */}
          <div>
            <label className="block text-sm font-semibold">From Account</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedAccount?._id || ""}
              onChange={(e) =>
                setSelectedAccount(
                  accounts.find((acc) => acc._id === e.target.value),
                )
              }
            >
              <option value="">Select account</option>
              {accounts.map((acc) => (
                <option key={acc._id} value={acc._id}>
                  {acc.accountType.toUpperCase()} - {acc.accountNumber}
                </option>
              ))}
            </select>
            {selectedAccount && (
              <p className="mt-1 text-sm text-gray-500">
                Balance: ${selectedAccount.balance.toLocaleString()}
              </p>
            )}
          </div>

          {/* Recipient Account Number */}
          <div>
            <label className="block text-sm font-semibold">
              Recipient Account Number
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={toAccountNumber}
              onChange={(e) => setToAccountNumber(e.target.value)}
              placeholder="Enter recipient account number"
            />
          </div>

          {/* Amount */}
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* Transaction PIN */}
          <input
            type="password"
            placeholder="Transaction PIN"
            className="w-full p-2 border rounded"
            value={transactionPin}
            onChange={(e) => setTransactionPin(e.target.value)}
          />

          {/* Submit button */}
          <button
            type="submit"
            className={`w-full py-3 rounded text-white ${
              mutation.isLoading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-teal-900"
            }`}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Processing..." : "Transfer"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Transfer;
