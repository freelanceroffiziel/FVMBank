import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Revenue from "../datajson/Revenue.json";

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "teal";

function LineGraph() {
  return (
    <main>
      <section className=" h-[50vh] ">
        <Line
          data={{
            labels: Revenue.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: Revenue.map((data) => data.revenue),
                backgroundColor: ["teal"],
                borderColor: "teal",
              },
              {
                label: "Cost",
                data: Revenue.map((data) => data.cost),
                backgroundColor: ["red"],
                borderColor: "red",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost ",
              },
            },
          }}
        />
      </section>
    </main>
  );
}

export default LineGraph;
