import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import learnone from "../../../../chartsjs/datajson/learnone.json";

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "#115E59"; 
defaults.plugins.legend.labels.color = "#0f766e"; 

const PortFolioSummary = () => {

  const chartData = {
    labels: learnone.map((data) => data.label),
    datasets: [
      {
        label: "Investment",
        data: learnone.map((data) => data.revenue), 
        backgroundColor: "#14B8A6", 
        borderColor: "#0D9488",
        borderWidth: 2,
        borderRadius: 5,
      },
      {
        label: "Gain",
        data: learnone.map((data) => data.cost),
        backgroundColor: "#99F6E4", 
        borderColor: "#2DD4BF", 
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  };


  console.log("📊 Portfolio Summary Chart Data:", chartData);

  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly Investment vs Gain Overview",
        color: "#115E59", 
      },
      legend: {
        labels: { color: "#0f766e" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#0f766e" }, 
        grid: { color: "rgba(20, 184, 166, 0.1)" }, 
      },
      y: {
        ticks: { color: "#0f766e" },
        grid: { color: "rgba(20, 184, 166, 0.1)" },
      },
    },
  };

  return (
    <main className="w-full bg-white shadow-sm p-4 rounded">
      <section className="space-y-4">
        {/* Header Row */}
        <div className="flex flex-row items-center justify-between">
          <h2 className="lg:text-lg text-[21px] font-semibold text-teal-800">
            Your Portfolio Summary
          </h2>

          <span>
            <select className="border border-teal-300 rounded px-3 py-1.5 lg:text-sm text-[17px] focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-800">
              <option value="feb-2021">February 2021</option>
              <option value="mar-2021">March 2021</option>
              <option value="apr-2021">April 2021</option>
            </select>
          </span>
        </div>

        {/* Chart Section */}
        <div className="text-teal-700 text-sm">
          <section className="lg:w-full lg:h-[40vh] w-full">
            <Bar data={chartData} options={chartOptions} />
          </section>
        </div>
      </section>
    </main>
  );
};

export default PortFolioSummary;
