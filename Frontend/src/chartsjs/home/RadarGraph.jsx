import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";
import lineData from "../datajson/lineData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "teal";

const RadarGraph = () => {
  return (
    <main>
      <section className="lg:h-[50vh] md:h-[40vh] h-[50vh] ">
        <Pie
          data={{
            labels: lineData.map((data) => data.label),
            datasets: [
              {
                label: "Sum",
                data: lineData.map((data) => data.value),
                backgroundColor: ["#D3D3D3", "teal", "gray"],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: " Revenue Source ",
              },
            },
          }}
        />
      </section>
    </main>
  );
};

export default RadarGraph;
