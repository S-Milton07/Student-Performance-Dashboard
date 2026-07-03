import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function BarChart({ result }) {

  const data = {
    labels: ["A", "B", "C", "D", "F"],

    datasets: [
      {
        label: "Students",

        data: [
          result.a,
          result.b,
          result.c,
          result.d,
          result.f,
        ],

        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#facc15",
          "#fb923c",
          "#ef4444",
        ],
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;