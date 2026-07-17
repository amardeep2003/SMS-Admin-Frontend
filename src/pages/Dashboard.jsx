import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getPopularCourses,
  getRevenueReport,
  getMonthlyRevenue,
  getStudentCourseCount,
} from "../services/dashboardApi";

import SummaryCards from "../components/dashboard/SummaryCards";
import RevenueChart from "../components/dashboard/RevenueChart";
import PopularCourses from "../components/dashboard/PopularCourses";
import DashboardLoader from "../components/dashboard/DashboardLoader";

function Dashboard() {
  const navigate = useNavigate();

  const [overview, setOverview] = useState(null);

  const [revenue, setRevenue] = useState(null);

  const [chartData, setChartData] = useState([]);

  const [popularCourses, setPopularCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const [overviewRes, revenueRes, chartRes, popularRes] = await Promise.all(
        [
          getStudentCourseCount(),
          getRevenueReport(),
          getMonthlyRevenue(selectedYear),
          getPopularCourses(),
        ],
      );

      setOverview(overviewRes.data.data);

      setRevenue(revenueRes.data.data);

      setChartData(chartRes.data.data.months);

      setPopularCourses(popularRes.data.data);
    } catch (error) {
      toast.error("Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, [selectedYear]);

  // useEffect(() => {
  //   loadDashboard();
  // }, [selectedYear]);

  const admin = JSON.parse(localStorage.getItem("admin"));

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("admin");

    toast.success("Logout Successfully");

    navigate("/", {
      replace: true,
    });
  };

  if (loading) {
    return <DashboardLoader />;
  }

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold">Dashboard</h2>

          <p className="text-muted mb-0">Welcome {admin?.name}</p>
        </div>
      </div>

      <SummaryCards overview={overview} revenue={revenue} />

      <RevenueChart
        chartData={chartData}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />

      <PopularCourses courses={popularCourses} />
    </div>
  );
}

export default Dashboard;
