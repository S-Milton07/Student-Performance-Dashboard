import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function PieChart({ result }) {

  const data = {
    labels: ["A", "B", "C", "D", "F"],

    datasets: [
      {
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

        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
      }}
    >
      <Pie data={data} />
    </div>
  );
}

export default PieChart;