import React, { useState, useEffect } from "react";
import { FiDollarSign, FiBarChart, FiPieChart } from "react-icons/fi";
import { HiDotsHorizontal } from "react-icons/hi";
import InvestmentCard from "./investmentsetup/InvestmentCard";
// import useAuth from "../../../../context/useAuth";
import { toast } from "react-toastify";

const MyInvestments = () => {
  // const { user } = useAuth();
  const [totals, setTotals] = useState({
    totalInvestment: 0,
    totalNetProfit: 0,
    totalROI: 0,
  });

  // useEffect(() => {
  //   const fetchInvestments = async () => {
  //     if (!user?.token) return;

  //     try {
  //       const res = await fetch("http://localhost:7000/api/v1/all", {
  //         headers: { Authorization: `Bearer ${user.token}` },
  //       });
  //       const data = await res.json();

  //       if (!res.ok) {
  //         toast.error(data.message || "Failed to fetch investments");
  //         return;
  //       }

  //       const investments = data.investments || [];

  //       let totalInvestment = 0;
  //       let totalNetProfit = 0;

  //       investments.forEach((inv) => {
  //         totalInvestment += inv.amount || 0;
  //         totalNetProfit += inv.netProfit || 0;
  //       });

  //       const totalROI =
  //         totalInvestment > 0
  //           ? ((totalNetProfit / totalInvestment) * 100).toFixed(2)
  //           : 0;

  //       setTotals({ totalInvestment, totalNetProfit, totalROI });

  //       console.log("📊 Totals:", { totalInvestment, totalNetProfit, totalROI });
  //     } catch (err) {
  //       toast.error(err.message || "Something went wrong");
  //     }
  //   };

  //   fetchInvestments();
  // }, [user?.token]);

  return (
    <main>
      <section className="space-y-3 h-[50vh] overflow-y-scroll hide-scrollbar relative top-0">
        {/* Header */}
        <div className="lg:w-[26%] bg-white border-b border-gray-200 fixed w-fit flex flex-row justify-between items-center text-teal-950 py-4 z-10">
          <h1 className="text-[19px] font-semibold">My Investments</h1>
          <span className="lg:text-[30px] text-teal-700">
            <HiDotsHorizontal />
          </span>
        </div>

        {/* Totals Cards */}
        <div className="pt-16 space-y-4">
          <InvestmentCard
            title="Total Investment"
            amount={`$${totals.totalInvestment.toLocaleString()}`}
            progress={totals.totalInvestment ? 100 : 0}
            icon={<FiDollarSign className="text-white" />}
          />

          <InvestmentCard
            title="Net Profit"
            amount={`$${totals.totalNetProfit.toLocaleString()}`}
            progress={
              totals.totalInvestment
                ? ((totals.totalNetProfit / totals.totalInvestment) * 100).toFixed(2)
                : 0
            }
            icon={<FiBarChart className="text-white" />}
          />

          <InvestmentCard
            title="Total ROI"
            amount={`${totals.totalROI}%`}
            progress={totals.totalROI}
            icon={<FiPieChart className="text-white" />}
          />
        </div>
      </section>
    </main>
  );
};

export default MyInvestments;
