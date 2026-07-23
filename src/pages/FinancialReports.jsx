// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import {
//   getFinancialReports,
//   exportFinancialReportExcel,
// } from "../services/financialReportApi";

// import { getBatchDropdown } from "../services/batchApi";
// import { getCourseDropdown } from "../services/courseApi";

// import FinancialReportSearch from "../components/financialReports/FinancialReportSearch";
// import FinancialReportTable from "../components/financialReports/FinancialReportTable";
// import FinancialReportPagination from "../components/financialReports/FinancialReportPagination";
// import FinancialReportSkeleton from "../components/financialReports/FinancialReportSkeleton";
// import FinancialReportViewModal from "../components/financialReports/FinancialReportViewModal";

// function FinancialReports() {
//   // ==========================================
//   // Listing
//   // ==========================================

//   const [reports, setReports] = useState([]);
//   const [pagination, setPagination] = useState({});
//   const [loading, setLoading] = useState(true);

//   // ==========================================
//   // Filters
//   // ==========================================

//   const [page, setPage] = useState(1);
//   const limit = 10;

//   const [search, setSearch] = useState("");
//   const [batchId, setBatchId] = useState("");
//   const [courseId, setCourseId] = useState("");
//   const [batchMode, setBatchMode] = useState("");
//   const [courseType, setCourseType] = useState("");
//   const [batchStatus, setBatchStatus] = useState("");
//   const [year, setYear] = useState("");
//   const [sortByRemaining, setSortByRemaining] = useState("");

//   // ==========================================
//   // Dropdown
//   // ==========================================

//   const [courses, setCourses] = useState([]);
//   const [batches, setBatches] = useState([]);

//   // ==========================================
//   // View Modal
//   // ==========================================

//   const [viewStudentId, setViewStudentId] = useState(null);

//     // ==========================================
//   // Load Reports
//   // ==========================================

//   const loadReports = async () => {
//     try {
//       setLoading(true);

//       const res = await getFinancialReports({
//         page,
//         limit,
//         search,
//         batchId,
//         courseId,
//         batchMode,
//         courseType,
//         batchStatus,
//         year,
//         sortByRemaining,
//       });

//       setReports(res.data.data || []);
//       setPagination(res.data.pagination || {});
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Failed to load financial reports",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ==========================================
//   // Load Dropdowns
//   // ==========================================

//   const loadDropdowns = async () => {
//     try {
//       const [courseRes, batchRes] = await Promise.all([
//         getCourseDropdown(),
//         getBatchDropdown(),
//       ]);

//       setCourses(courseRes.data.courses || []);
//       setBatches(batchRes.data.data || []);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ==========================================
//   // Initial Load
//   // ==========================================

//   useEffect(() => {
//     loadDropdowns();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       loadReports();
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [
//     page,
//     search,
//     batchId,
//     courseId,
//     batchMode,
//     courseType,
//     batchStatus,
//     year,
//     sortByRemaining,
//   ]);

//   // ==========================================
//   // Export Excel
//   // ==========================================

//   const handleExportExcel = async () => {
//     try {
//       const res = await exportFinancialReportExcel();

//       const blob = new Blob([res.data], {
//         type:
//           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       });

//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");

//       link.href = url;

//       link.download = `Financial_Report_${new Date().getTime()}.xlsx`;

//       document.body.appendChild(link);

//       link.click();

//       link.remove();

//       window.URL.revokeObjectURL(url);

//       toast.success("Excel downloaded successfully");
//     } catch (err) {
//       toast.error(
//         err.response?.data?.message || "Unable to download Excel",
//       );
//     }
//   };

// //   <FinancialReportSearch
// //   ...
// // />

// // <FinancialReportTable
// //   ...
// // />

// // <FinancialReportPagination
// //   ...
// // />

// // <FinancialReportSkeleton
// //   ...
// // />

// // <FinancialReportViewModal
// //   ...
// // />

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getFinancialReports,
  exportFinancialReport,
} from "../services/financialReportApi";

import { getCourseDropdown } from "../services/batchApi";

import { getBatches } from "../services/batchApi";

import FinancialReportSearch from "../components/financialReports/FinancialReportSearch";
import FinancialReportTable from "../components/financialReports/FinancialReportTable";
import FinancialReportPagination from "../components/financialReports/FinancialReportPagination";
import FinancialReportViewModal from "../components/financialReports/FinancialReportViewModal";
import FinancialReportSkeleton from "../components/financialReports/FinancialReportSkeleton";

import "../assets/images/css/financial-report.css";

function FinancialReports() {
  // ===============================
  // Data
  // ===============================

  const [reports, setReports] = useState([]);

  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(true);

  // ===============================
  // Dropdowns
  // ===============================

  const [courses, setCourses] = useState([]);

  const [batches, setBatches] = useState([]);

  // ===============================
  // Filters
  // ===============================

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const [batchId, setBatchId] = useState("");

  const [courseId, setCourseId] = useState("");

  const [batchMode, setBatchMode] = useState("");

  const [courseType, setCourseType] = useState("");

  const [batchStatus, setBatchStatus] = useState("");

  const [year, setYear] = useState("");

  const [sortByRemaining, setSortByRemaining] = useState("");

  // ===============================
  // View Modal
  // ===============================

  const [studentId, setStudentId] = useState(null);

  // ===============================
  // Load Reports
  // ===============================

  const loadReports = async () => {
    try {
      setLoading(true);

      const res = await getFinancialReports({
        page,
        limit,
        search,
        batchId,
        courseId,
        batchMode,
        courseType,
        batchStatus,
        year,
        sortByRemaining,
      });

      setReports(res.data.data);
      setPagination(res.data.pagination);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to load financial reports",
      );
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // Load Dropdowns
  // ===============================

  const loadDropdowns = async () => {
    try {
      const [courseRes, batchRes] = await Promise.all([
        getCourseDropdown(),
        getBatches({
          page: 1,
          limit: 1000,
        }),
      ]);

      setCourses(courseRes.data.courses || []);

      setBatches(batchRes.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  // ===============================
  // Initial Load
  // ===============================

  useEffect(() => {
    loadDropdowns();
  }, []);

  // ===============================
  // Filter Change
  // ===============================

  useEffect(() => {
    const timer = setTimeout(() => {
      loadReports();
    }, 500);

    return () => clearTimeout(timer);
  }, [
    page,
    search,
    batchId,
    courseId,
    batchMode,
    courseType,
    batchStatus,
    year,
    sortByRemaining,
  ]);

  // ===============================
  // Export Excel
  // ===============================

  const handleExport = async () => {
    try {
      const res = await exportFinancialReport();

      const blob = new Blob([res.data]);

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = "Financial_Report.xlsx";

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("Excel downloaded successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to export report");
    }
  };

  // ===============================
  // Return
  // ===============================

  return (
    <div className="financial-report-page">
      <FinancialReportSearch
        search={search}
        setSearch={setSearch}
        batchId={batchId}
        setBatchId={setBatchId}
        courseId={courseId}
        setCourseId={setCourseId}
        batchMode={batchMode}
        setBatchMode={setBatchMode}
        courseType={courseType}
        setCourseType={setCourseType}
        batchStatus={batchStatus}
        setBatchStatus={setBatchStatus}
        year={year}
        setYear={setYear}
        sortByRemaining={sortByRemaining}
        setSortByRemaining={setSortByRemaining}
        courses={courses}
        batches={batches}
        setPage={setPage}
        onExport={handleExport}
      />

      {loading ? (
        <FinancialReportSkeleton />
      ) : (
        <>
          <FinancialReportTable
            reports={reports}
            onView={(id) => setStudentId(id)}
          />

          <FinancialReportPagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}

      <FinancialReportViewModal
        studentId={studentId}
        onClose={() => setStudentId(null)}
      />
    </div>
  );
}

export default FinancialReports;
