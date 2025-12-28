import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardCharts = () => {
  const chartLabels = [
    "Deposit",
    "Deposit Balance",
    "Profit Balance",
    "Referral Balance",
    "Users Referred",
    "Amount Invested",
    "Amount Withdrawn",
    "Active Investments",
    "Finished Investments",
  ];

  const chartDataValues = [20000, 20000, 20000, 5000, 8, 5000, 18000, 6, 8];

  const chartColors = [
    "#431407",
    "#7c2d12",
    "#052e16",
    "#9ca3af",
    "#22c55e",
    "#166534",
    "#16a34a",
    "#6b7280",
    "#f97316",
  ];

  const pieData = {
    labels: chartLabels,
    datasets: [
      {
        data: chartDataValues,
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#f3f4f6", 
        },
      },
    },
  };

  return (
    <main className="">
      <section className="p-8 bg-white shadow-xl rounded-xl">
        <h2 className="mb-6 text-3xl font-semibold text-orange-900">
          Analytics Overview
        </h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Summary Chart */}
          <div className="flex-1 p-4 bg-orange-800 rounded-lg">
            <h3 className="mb-4 text-xl font-medium text-gray-100">Summary</h3>
            <Pie data={pieData} />
          </div>

          {/* Department Stats Chart */}
          <div className="flex-1 p-4 bg-orange-800 rounded-lg">
            <h3 className="mb-4 text-xl font-medium text-gray-100">
              Department Stats
            </h3>
            <Pie data={pieData} options={options} />
          </div>
        </div>
        {/* linechart below */}
        
      </section>
    </main>
  );
};

export default DashboardCharts;
