import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRightArrowLeft,
  FaDollarSign,
  FaNairaSign,
  FaPlus,
  FaStackExchange,
} from "react-icons/fa6";
import { RiEyeCloseFill, RiEyeOffFill } from "react-icons/ri";
import useAuth from "../../../../context/useAuth";
import { toast } from "react-toastify";

const NgnTransaction = ({ setActiveWallet }) => {
  const [menu, setMenu] = useState(false);
  const [balance, setBalance] = useState(0);

  const { fetchWallets, fundWallet, withdrawWallet, swapCurrency } = useAuth();

  // Fetch wallet balance
  useEffect(() => {
    const loadWallet = async () => {
      const result = await fetchWallets();
      if (result.success) {
        setBalance(result.data?.NGN || 0);
      } else {
        toast.error(result.message || "Failed to fetch wallet balance");
      }
    };
    loadWallet();
  }, [fetchWallets]);

  // Handle funding
  const handleFund = async () => {
    const result = await fundWallet("NGN", 5000);
    if (result.success) {
      toast.success(result.message || "Wallet funded!");
      setBalance((prev) => prev + 5000);
    } else {
      toast.error(result.message || "Funding failed");
    }
  };

  // Handle withdrawal
  const handleWithdraw = async () => {
    const result = await withdrawWallet("NGN", 2000);
    if (result.success) {
      toast.success(result.message || "Withdrawal successful!");
      setBalance((prev) => prev - 2000);
    } else {
      toast.error(result.message || "Withdrawal failed");
    }
  };

  // Handle currency swap
  const handleSwap = async () => {
    const result = await swapCurrency("NGN", "USD", 1000);
    if (result.success) {
      toast.success(result.message || "Swap successful!");
      setBalance((prev) => prev - 1000);
    } else {
      toast.error(result.message || "Swap failed");
    }
  };

  return (
    <main className="">
      <section className="">
        <aside className="recent-transations">
          <div className=" bg-white rounded-2xl lg:px-4 lg:pt-4 lg:pb-4 px-3 py-4 flex flex-col justify-center lg:gap-12 gap-16 ">
            <div className=" mb-[3vh] flex flex-row  justify-between items-center bg-teal-950 lg:p-1.5 p-2.5 rounded-full shadow ">
              <span
                onClick={() => setActiveWallet("USD")}
                className="  cursor-pointer flex flex-row items-center gap-1  shadow hover:bg-teal-800 text-teal-50 focus:bg-teal-900 lg:px-4 px-2 py-1 rounded-full "
              >
                <span>
                  {" "}
                  <FaDollarSign />{" "}
                </span>
                <span className=" lg:text-[14px] text-[18px] tracking-wide">
                  {" "}
                  USD Balance{" "}
                </span>
              </span>

              <strong className="text-teal-50 lg:text-[27px] text-[25px] ">
                <FaStackExchange />
              </strong>

              <span className=" cursor-pointer flex flex-row items-center gap-1  bg-teal-700 shadow hover:bg-teal-900 text-teal-50 lg:px-4 px-2 py-1 rounded-full">
                <span>
                  {" "}
                  <FaNairaSign />{" "}
                </span>
                <span className="lg:text-[14px] text-[18px] tracking-wide">
                  {" "}
                  NGN Wallet
                </span>
              </span>
            </div>

            <div className=" flex flex-col items-center justify-center ">
              <div className="flex flex-row items-center gap-1 ">
                {" "}
                <p className="lg:text-[16px] text-[24px]  font-semibold tracking-wide text-teal-900">
                  {" "}
                  NGN Balance
                </p>
                <div id="menuIcon" className="p-2 text-teal-800  ">
                  {menu ? (
                    <RiEyeCloseFill
                      className=" text-[33px] md:text-[35px] lg:text-[25px] font-extrabold "
                      onClick={() => setMenu(false)}
                    />
                  ) : (
                    <RiEyeOffFill
                      className=" text-[33px] md:text-[35px] lg:text-[25px] font-extrabold "
                      onClick={() => setMenu(true)}
                    />
                  )}
                </div>
              </div>
              <span className="amount lg:text-[30px] text-[35px] flex flex-row items-center  font-semibold tracking-wide text-teal-600">
                ₦
                <span className="lg:text-[30px] text-[36px]">
                  {menu ? balance.toLocaleString() : "****"}
                </span>
              </span>
            </div>

            <div className="transactionshistodivs flex flex-row items-center justify-center lg:gap-10 gap-12 ">
              <div className="  flex flex-col items-center  lg:gap-2 ">
                <Link
                  onClick={handleWithdraw}
                  className=" bg-teal-400  rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition ease-in-out duration-200   "
                >
                  {" "}
                  <FaArrowRightArrowLeft />{" "}
                </Link>
                <p className=" lg:text-[16px] font-medium "> Withdraw </p>
              </div>

              <div className="  flex flex-col items-center  lg:gap-2 ">
                <Link
                  onClick={handleFund}
                  className=" bg-teal-400  rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition ease-in-out duration-200   "
                >
                  {" "}
                  <FaPlus />{" "}
                </Link>
                <p className=" lg:text-[16px] font-medium tracking-wide ">
                  Fund
                </p>
              </div>

              <div className="  flex flex-col items-center lg:gap-2 ">
                <Link
                  onClick={handleSwap}
                  className=" bg-teal-400  rounded-full p-2.5 lg:text-[20px] text-teal-50 text-[22px] hover:bg-teal-500 transition ease-in-out duration-200   "
                >
                  <FaArrowRightArrowLeft />
                </Link>

                <p className=" lg:text-[16px] font-medium tracking-wide ">
                  {" "}
                  USD Swap
                </p>
              </div>
            </div>

            <div className=" flex flex-row  justify-between items-center bg-teal-700 p-1.5 rounded-full shadow ">
              <span className=" flex flex-row items-center gap-1 lg:text-[13px] tracking-wide  text-teal-50 px-4 py-1 rounded-full">
                <p> Wallet Interest </p>
              </span>

              <span className=" flex flex-row items-center text-teal-50  px-4 py-1 rounded-full  ">
                <span>
                  {" "}
                  <FaDollarSign />{" "}
                </span>
                <span className="lg:text-[14px] font-semibold tracking-wide">
                  0.00
                </span>
              </span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default NgnTransaction;
