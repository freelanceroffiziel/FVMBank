import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../../context/useAuth";

const SwapModal = ({
  isOpen,
  onClose,
  fromCurrency,
  toCurrency,
  fromBalance,
  setFromBalance,
  setToBalance,
}) => {
  const [swapAmount, setSwapAmount] = useState("");
  const [swapPin, setSwapPin] = useState("");
  const [loading, setLoading] = useState(false);
  const { swapCurrency } = useAuth();

  const isValidPin = (pin) => /^\d{4}$/.test(pin);

  const handleSwapSubmit = async () => {
    const amount = Number(swapAmount);

    if (!amount || amount <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    if (!isValidPin(swapPin)) {
      toast.error("Enter a valid 4-digit PIN");
      return;
    }

    if (amount > fromBalance) {
      toast.error(`Insufficient ${fromCurrency} balance`);
      return;
    }

    setLoading(true);
    try {
      // Example exchange rate
      const exchangeRate = fromCurrency === "NGN" ? 1.1 : 0.9;
      const convertedAmount = Number((amount * exchangeRate).toFixed(2));

      const result = await swapCurrency(
        fromCurrency,
        toCurrency,
        amount,
        exchangeRate,
        swapPin
      );

      if (result.success) {
        toast.success(
          result.message ||
            `Swapped ${fromCurrency === "NGN" ? "₦" : "$"}${amount} to ${
              toCurrency === "NGN" ? "₦" : "$"
            }${convertedAmount}`
        );
        setFromBalance((prev) => prev - amount);
        if (setToBalance) setToBalance((prev) => prev + convertedAmount);
        setSwapAmount("");
        setSwapPin("");
        onClose();
      } else {
        toast.error(result.message || "Swap failed");
      }
    } catch {
      toast.error("Network error during swap");
    } finally {
      setLoading(false);
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
          Swap {fromCurrency} to {toCurrency}
        </h3>

        <p className="text-sm text-gray-500 text-center mt-1">
          Available: {fromCurrency === "NGN" ? "₦" : "$"}
          {fromBalance?.toLocaleString() || "0"}
        </p>

        <input
          type="number"
          placeholder={`Enter ${fromCurrency} Amount`}
          value={swapAmount}
          onChange={(e) => setSwapAmount(e.target.value)}
          className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          placeholder="Enter 4-digit PIN"
          value={swapPin}
          onChange={(e) => setSwapPin(e.target.value)}
          className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between mt-6 space-x-4">
          <button
            className={`w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSwapSubmit}
            disabled={loading}
          >
            {loading ? "Processing..." : "Swap"}
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

export default SwapModal;
