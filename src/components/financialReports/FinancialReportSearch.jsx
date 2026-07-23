// function FinancialReportSearch({
//   search,
//   setSearch,

//   batchId,
//   setBatchId,

//   courseId,
//   setCourseId,

//   batchMode,
//   setBatchMode,

//   courseType,
//   setCourseType,

//   batchStatus,
//   setBatchStatus,

//   year,
//   setYear,

//   sortByRemaining,
//   setSortByRemaining,

//   batches,
//   courses,

//   setPage,

//   onExport,
// }) {
//   return (
//     <div className="card-box mb-4">
//       <div className="row g-3">
//         {/* Search */}

//         <div className="col-lg-3">
//           <label className="form-label">Search</label>

//           <input
//             className="form-control"
//             placeholder="Student Name / Mobile"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Course */}

//         <div className="col-lg-3">
//           <label className="form-label">Course</label>

//           <select
//             className="form-select"
//             value={courseId}
//             onChange={(e) => {
//               setCourseId(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All Courses</option>

//             {courses.map((course) => (
//               <option key={course._id} value={course._id}>
//                 {course.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Batch */}

//         <div className="col-lg-3">
//           <label className="form-label">Batch</label>

//           <select
//             className="form-select"
//             value={batchId}
//             onChange={(e) => {
//               setBatchId(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All Batches</option>

//             {batches.map((batch) => (
//               <option key={batch._id} value={batch._id}>
//                 {batch.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Course Type */}

//         <div className="col-lg-3">
//           <label className="form-label">Course Type</label>

//           <select
//             className="form-select"
//             value={courseType}
//             onChange={(e) => {
//               setCourseType(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All</option>
//             <option value="LT">LT</option>
//             <option value="VT">VT</option>
//           </select>
//         </div>

//         {/* Batch Mode */}

//         <div className="col-lg-3">
//           <label className="form-label">Batch Mode</label>

//           <select
//             className="form-select"
//             value={batchMode}
//             onChange={(e) => {
//               setBatchMode(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All</option>
//             <option value="ONLINE">ONLINE</option>
//             <option value="OFFLINE">OFFLINE</option>
//           </select>
//         </div>

//         {/* Batch Status */}

//         <div className="col-lg-3">
//           <label className="form-label">Batch Status</label>

//           <select
//             className="form-select"
//             value={batchStatus}
//             onChange={(e) => {
//               setBatchStatus(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All</option>

//             <option value="ACTIVE">ACTIVE</option>

//             <option value="RUNNING">RUNNING</option>

//             <option value="COMPLETED">COMPLETED</option>

//             <option value="INACTIVE">INACTIVE</option>
//           </select>
//         </div>

//         {/* Year */}

//         <div className="col-lg-2">
//           <label className="form-label">Year</label>

//           <input
//             type="number"
//             className="form-control"
//             placeholder="2026"
//             value={year}
//             onChange={(e) => {
//               setYear(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Remaining */}

//         <div className="col-lg-2">
//           <label className="form-label">Remaining</label>

//           <select
//             className="form-select"
//             value={sortByRemaining}
//             onChange={(e) => {
//               setSortByRemaining(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Default</option>
//             <option value="asc">Low → High</option>
//             <option value="desc">High → Low</option>
//           </select>
//         </div>

//         {/* Export */}

//         <div className="col-lg-2 d-flex align-items-end">
//           <button className="theme-btn w-100" onClick={onExport}>
//             Export Excel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FinancialReportSearch;

import { FaSearch, FaFileExcel } from "react-icons/fa";

function FinancialReportSearch({
  search,
  setSearch,

  batchId,
  setBatchId,

  courseId,
  setCourseId,

  batchMode,
  setBatchMode,

  courseType,
  setCourseType,

  batchStatus,
  setBatchStatus,

  year,
  setYear,

  sortByRemaining,
  setSortByRemaining,

  courses,
  batches,

  setPage,

  onExport,
}) {
  return (
    <div className="course-topbar">
      <div className="course-filters">
        {/* Search */}

        <div className="course-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Student / Mobile..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Course */}

        <select
          className="course-select"
          value={courseId}
          onChange={(e) => {
            setCourseId(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Courses</option>

          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>

        {/* Batch */}

        <select
          className="course-select"
          value={batchId}
          onChange={(e) => {
            setBatchId(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Batches</option>

          {batches.map((batch) => (
            <option key={batch._id} value={batch._id}>
              {batch.name}
            </option>
          ))}
        </select>

        {/* Course Type */}

        <select
          className="course-select"
          value={courseType}
          onChange={(e) => {
            setCourseType(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Course Type</option>
          <option value="LT">LT</option>
          <option value="VT">VT</option>
        </select>

        {/* Batch Mode */}

        <select
          className="course-select"
          value={batchMode}
          onChange={(e) => {
            setBatchMode(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Batch Mode</option>
          <option value="ONLINE">ONLINE</option>
          <option value="OFFLINE">OFFLINE</option>
        </select>

        {/* Batch Status */}

        <select
          className="course-select"
          value={batchStatus}
          onChange={(e) => {
            setBatchStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Batch Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="RUNNING">RUNNING</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>

        {/* Year */}

        <input
          type="number"
          className="course-select"
          placeholder="Year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            setPage(1);
          }}
        />

        {/* Remaining Sort */}

        <select
          className="course-select"
          value={sortByRemaining}
          onChange={(e) => {
            setSortByRemaining(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Remaining Fee</option>
          <option value="desc">Highest First</option>
          <option value="asc">Lowest First</option>
        </select>
      </div>

      <button className="add-course-btn" onClick={onExport}>
        <FaFileExcel />
        Export Excel
      </button>
    </div>
  );
}

export default FinancialReportSearch;
