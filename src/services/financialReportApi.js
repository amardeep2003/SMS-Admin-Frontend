// import api from "../api/axios";

// // ======================================
// // GET FINANCIAL SUMMARY
// // ======================================

// export const getFinancialReports = (params) => {
//   return api.get("/reports/financial/summary", {
//     params,
//   });
// };

// // ======================================
// // GET SINGLE STUDENT FINANCIAL REPORT
// // ======================================

// export const getStudentFinancialReport = (studentId) => {
//   return api.get(`/reports/financial/student/${studentId}`);
// };

// // ======================================
// // EXPORT EXCEL
// // ======================================

// export const exportFinancialReportExcel = () => {
//   return api.get("/reports/financial/export-excel", {
//     responseType: "blob",
//   });
// };

import api from "../api/axios";

// ====================================
// GET FINANCIAL REPORT LIST
// ====================================

export const getFinancialReports = (params) => {
  return api.get("/reports/financial/summary", {
    params,
  });
};

// ====================================
// GET SINGLE STUDENT FINANCIAL REPORT
// ====================================

export const getStudentFinancialReport = (studentId) => {
  return api.get(`/reports/financial/student/${studentId}`);
};

// ====================================
// EXPORT EXCEL
// ====================================

export const exportFinancialReport = () => {
  return api.get("/reports/financial/export-excel", {
    responseType: "blob",
  });
};
