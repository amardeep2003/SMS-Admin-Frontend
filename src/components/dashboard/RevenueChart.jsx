import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function RevenueChart({
  chartData,
  selectedYear,
  setSelectedYear,
}) {

  const data = {

    labels: chartData.map(item => item.month),

    datasets: [

      {
        label: "VT Revenue",

        data: chartData.map(item => item.vtRevenue),

        borderColor: "#18d6b5",

        backgroundColor: "#18d6b5",

        tension: .4,

        borderWidth: 3,

        fill: false,

      },

      {
        label: "LT Revenue",

        data: chartData.map(item => item.ltRevenue),

        borderColor: "#ffb703",

        backgroundColor: "#ffb703",

        tension: .4,

        borderWidth: 3,

        fill: false,

      }

    ]

  };

  const options = {

    responsive: true,

    plugins: {

      legend: {

        position: "top",

      }

    },

    maintainAspectRatio: false,

  };

  return (

    <div className="card-box mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h4 className="fw-bold">

          Revenue Analytics

        </h4>

        <p className="text-muted mb-0">

          Monthly VT & LT Revenue

        </p>

        <select

          className="form-select year-dropdown"

          value={selectedYear}

          onChange={(e) => setSelectedYear(Number(e.target.value))}

        >

          <option>2024</option>

          <option>2025</option>

          <option>2026</option>

          <option>2027</option>

        </select>

      </div>

      <div style={{ height: "380px" }}>

        <Line
          data={data}
          options={options}
        />

      </div>

    </div>

  );

}

export default RevenueChart;