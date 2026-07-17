import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

function RevenueChart({ chartData, selectedYear, setSelectedYear }) {
  const years = [2024, 2025, 2026, 2027];

  const data = {
    labels: chartData.map((item) => item.month),

    datasets: [
      {
        label: "VT Revenue",

        data: chartData.map((item) => item.vtRevenue),

        borderColor: "#dc3545",

        backgroundColor: "#dc3545",

        tension: 0.4,
      },

      {
        label: "LT Revenue",

        data: chartData.map((item) => item.ltRevenue),

        borderColor: "#0d6efd",

        backgroundColor: "#0d6efd",

        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="card shadow border-0 mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Revenue Report</h4>

          <select
            className="form-select"
            style={{ width: "150px" }}
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>

        <div
          style={{
            height: "380px",
          }}
        >
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;
