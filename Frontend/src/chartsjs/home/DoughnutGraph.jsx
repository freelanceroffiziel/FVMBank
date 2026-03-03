import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut, Pie } from "react-chartjs-2";
import lineData from "../datajson/lineData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 25;
defaults.plugins.title.color = "teal";

const DoughnutGraph = () => {
  return (
    <main>
      <section className="lg:h-[53vh]  md:h-[40vh] h-[50vh] ">
        <Doughnut
          data={{
            labels: lineData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: lineData.map((data) => data.value),
                backgroundColor: ["gray ", "teal", "#D3D3D3"],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: " Popular Cities & Continents ",
              },
            },
          }}
        />
      </section>
    </main>
  );
};

export default DoughnutGraph;
