import api from "../api/axios";

export const getPopularCourses = () => {
  return api.get("/dashboard");
};

export const getRevenueReport = () => {
  return api.get("/dashboard/revenue/report");
};

export const getMonthlyRevenue = (year) => {
  return api.get(`/dashboard/monthly/revenue/graph?year=${year}`);
};

export const getStudentCourseCount = () => {
  return api.get("/dashboard/stu-cour/count");
};