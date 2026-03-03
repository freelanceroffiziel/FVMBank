import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../../context/useAuth";

const WithdrawalModal = ({ isOpen, onClose, setUsdBalance }) => {
  const [loading, setLoading] = useState(false);
  const [transactionPin, setTransactionPin] = useState("");
  const [toAccountNumber, setToAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const { withdrawWallet } = useAuth();

  const handleWithdraw = async () => {
    if (!toAccountNumber) {
      return toast.error("Enter the recipient account number");
    }

    if (!amount || amount <= 0) {
      return toast.error("Enter a valid amount");
    }

    if (!transactionPin || transactionPin.length < 4) {
      return toast.error("Enter your 4-digit transaction PIN");
    }

    // Print all values before API call
    console.log("Withdrawal Details:", {
      toAccountNumber,
      amount,
      transactionPin,
    });

    setLoading(true);
    const result = await withdrawWallet(toAccountNumber, amount, transactionPin);
    setLoading(false);

    if (result.success) {
      toast.success(result.message || "Withdrawal successful!");
      setUsdBalance(result.data.balance); 
      onClose();
      setTransactionPin("");
      setToAccountNumber("");
      setAmount("");
    } else {
      toast.error(result.message || "Withdrawal failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-80 p-6 bg-white rounded-lg shadow-lg"
      >
        <h3 className="text-lg font-medium text-center text-gray-800">
          Withdraw USD
        </h3>

        <input
          type="text"
          placeholder="Recipient Account Number"
          value={toAccountNumber}
          onChange={(e) => setToAccountNumber(e.target.value)}
          className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          maxLength={4}
          placeholder="Enter 4-digit PIN"
          value={transactionPin}
          onChange={(e) => setTransactionPin(e.target.value)}
          className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between mt-6 space-x-4">
          <button
            className={`w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleWithdraw}
            disabled={loading}
          >
            {loading ? "Processing..." : `Withdraw`}
          </button>

          <button
            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalModal;
