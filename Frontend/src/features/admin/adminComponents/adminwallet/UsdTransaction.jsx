import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRightArrowLeft,
  FaDollarSign,
  FaPlus,
  FaStackExchange,
} from "react-icons/fa6";
import { RiEyeCloseFill, RiEyeOffFill } from "react-icons/ri";
import useAuth from "../../../../context/useAuth";
import { toast, ToastContainer } from "react-toastify";
import SwapModal from "./SwapModal";
import WithdrawalModal from "./WithdrwalModal";

const UsdTransaction = ({ setActiveWallet }) => {
  const [show, setShow] = useState(false);
  const [balance, setBalance] = useState(0);
  const [modal, setModal] = useState(false);
  const [swapModalOpen, setSwapModalOpen] = useState(false);

  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [fundAmount, setFundAmount] = useState("");
  const [transactionPin, setTransactionPin] = useState("");
  const [loading, setLoading] = useState(false);

  const { fetchWallets, fundWallet } = useAuth();

  useEffect(() => {
    const loadWallet = async () => {
      const result = await fetchWallets();
      if (result.success) {
        setBalance(result.data?.USD || 0);
      } else {
        toast.error(result.message || "Failed to fetch wallet balance");
      }
    };
    loadWallet();
  }, [fetchWallets]);

  const handleModalFund = async () => {
    if (!fundAmount || Number(fundAmount) <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    if (!transactionPin || transactionPin.length < 4) {
      toast.error("Enter your 4-digit transaction PIN");
      return;
    }

    setLoading(true);
    const result = await fundWallet("USD", Number(fundAmount), transactionPin);
    setLoading(false);

    if (result.success) {
      toast.success(result.message || "Wallet funded successfully!");
      setBalance((prev) => prev + Number(fundAmount));
      setFundAmount("");
      setTransactionPin("");
      setModal(false);
    } else {
      toast.error(result.message || "Funding failed");
    }
  };

  const openSwapModal = () => setSwapModalOpen(true);

  return (
    <main>
      <ToastContainer />
      <section>
        <aside className="recent-transations">
          <div className="bg-white rounded-2xl lg:px-4 lg:pt-4 lg:pb-4 px-3 py-4 flex flex-col justify-center lg:gap-12 gap-16">
            {/* Header */}
            <div className="cursor-pointer mb-[3vh] flex flex-row justify-between items-center bg-teal-950 lg:p-1.5 p-2.5 rounded-full shadow">
              <span className="cursor-pointer flex flex-row items-center gap-1 bg-teal-700 shadow hover:bg-teal-900 text-teal-50 lg:px-4 px-2 py-1 rounded-full">
                <FaDollarSign />
                <span className="lg:text-[14px] text-[18px] tracking-wide">
                  USD Balance
                </span>
              </span>

              <strong className="text-teal-50 lg:text-[27px] text-[25px]">
                <FaStackExchange />
              </strong>

              <span
                onClick={() => setActiveWallet("NGN")}
                className="cursor-pointer flex flex-row items-center gap-1 shadow hover:bg-teal-800 text-teal-50 focus:bg-teal-900 lg:px-4 px-2 py-1 rounded-full"
              >
                <FaDollarSign />
                <span className="lg:text-[14px] text-[18px] tracking-wide">
                  NGN Wallet
                </span>
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-row items-center gap-1">
                <p className="lg:text-[16px] text-[24px] font-semibold tracking-wide text-teal-900">
                  USD Balance
                </p>
                <div id="menuIcon" className="p-2 text-teal-800">
                  {show ? (
                    <RiEyeCloseFill
                      className="text-[33px] md:text-[35px] lg:text-[25px]"
                      onClick={() => setShow(false)}
                    />
                  ) : (
                    <RiEyeOffFill
                      className="text-[33px] md:text-[35px] lg:text-[25px]"
                      onClick={() => setShow(true)}
                    />
                  )}
                </div>
              </div>
              <span className="amount lg:text-[30px] text-[35px] flex flex-row items-center font-semibold tracking-wide text-teal-600">
                ${show ? balance.toLocaleString() : "****"}
              </span>
            </div>

            <div className="transactionshistodivs flex flex-row items-center justify-center lg:gap-10 gap-12">
              <div className="flex flex-col items-center lg:gap-2">
                <button
                  onClick={() => setWithdrawModalOpen(true)}
                  className="bg-teal-400 rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition"
                >
                  <FaArrowRightArrowLeft />
                </button>
                <p className="lg:text-[16px] font-medium">Withdraw</p>
              </div>

              <div className="flex flex-col items-center lg:gap-2">
                <button
                  onClick={() => setModal(true)}
                  className="bg-teal-400 rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition"
                >
                  <FaPlus />
                </button>
                <p className="lg:text-[16px] font-medium tracking-wide">Fund</p>
              </div>

              <div className="flex flex-col items-center lg:gap-2">
                <button
                  onClick={openSwapModal}
                  className="bg-teal-400 rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition"
                >
                  <FaArrowRightArrowLeft />
                </button>
                <p className="lg:text-[16px] font-medium tracking-wide">
                  NGN Swap
                </p>
              </div>
            </div>

            <div className="flex flex-row justify-between items-center bg-teal-700 p-1.5 rounded-full shadow">
              <span className="flex flex-row items-center gap-1 lg:text-[13px] tracking-wide text-teal-50 px-4 py-1 rounded-full">
                Wallet Interest
              </span>
              <span className="flex flex-row items-center text-teal-50 px-4 py-1 rounded-full">
                <FaDollarSign />
                <span className="lg:text-[14px] font-semibold tracking-wide">
                  0.00
                </span>
              </span>
            </div>
          </div>
        </aside>
      </section>

      {modal && (
        <div
          onClick={() => setModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-80 p-6 bg-white rounded-lg shadow-lg"
          >
            <h3 className="text-lg font-medium text-center text-gray-800">
              Fund Your USD Wallet
            </h3>

            <input
              type="number"
              placeholder="Enter Amount"
              value={fundAmount}
              onChange={(e) => setFundAmount(e.target.value)}
              className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              placeholder="Enter 4-digit PIN"
              value={transactionPin}
              onChange={(e) => setTransactionPin(e.target.value)}
              className="w-full mt-4 px-3 py-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between mt-6 space-x-4">
              <button
                className={`w-full px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700 transition ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleModalFund}
                disabled={loading}
              >
                {loading ? "Processing..." : "Fund"}
              </button>

              <button
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {swapModalOpen && (
        <SwapModal
          isOpen={swapModalOpen}
          onClose={() => setSwapModalOpen(false)}
          usdBalance={balance}
          setUsdBalance={setBalance}
        />
      )}

      {withdrawModalOpen && (
        <WithdrawalModal
          isOpen={withdrawModalOpen}
          onClose={() => setWithdrawModalOpen(false)}
          usdBalance={balance}
          setUsdBalance={setBalance}
        />
      )}
    </main>
  );
};

export default UsdTransaction;
