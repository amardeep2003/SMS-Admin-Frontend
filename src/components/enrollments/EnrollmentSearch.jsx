// // import { useEffect, useState } from "react";
// // import { getCourseDropdown } from "../../services/batchApi";

// // function EnrollmentSearch({
// //   search,
// //   setSearch,
// //   courseType,
// //   setCourseType,
// //   courseId,
// //   setCourseId,
// //   sortOrder,
// //   setSortOrder,
// //   setPage,
// // }) {
// //   const [courses, setCourses] = useState([]);

// //   useEffect(() => {
// //     loadCourses();
// //   }, []);

// //   const loadCourses = async () => {
// //     try {
// //       const res = await getCourseDropdown();
// //       setCourses(res.data.courses || []);
// //       // console.log(res.data);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <div className="card-box mb-4">
// //       <div className="row g-3 align-items-end">
// //         {/* Search */}

// //         <div className="col-md-3">
// //           <label className="form-label">Search</label>

// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Student / Mobile"
// //             value={search}
// //             onChange={(e) => {
// //               setSearch(e.target.value);
// //               setPage(1);
// //             }}
// //           />
// //         </div>

// //         {/* Course Type */}

// //         <div className="col-md-2">
// //           <label className="form-label">Course Type</label>

// //           <select
// //             className="form-select"
// //             value={courseType}
// //             onChange={(e) => {
// //               setCourseType(e.target.value);
// //               setCourseId("");
// //               setPage(1);
// //             }}
// //           >
// //             <option value="">All</option>
// //             <option value="LT">LT</option>
// //             <option value="VT">VT</option>
// //           </select>
// //         </div>

// //         {/* Course */}

// //         <div className="col-md-3">
// //           <label className="form-label">Course</label>

// //           <select
// //             className="form-select"
// //             value={courseId}
// //             onChange={(e) => {
// //               setCourseId(e.target.value);
// //               setPage(1);
// //             }}
// //           >
// //             <option value="">All Courses</option>

// //             {courses
// //               .filter((course) =>
// //                 courseType ? course.type === courseType : true,
// //               )
// //               .map((course) => (
// //                 <option key={course._id} value={course._id}>
// //                   {course.name}
// //                 </option>
// //               ))}
// //           </select>
// //         </div>

// //         {/* Sort */}

// //         <div className="col-md-2">
// //           <label className="form-label">Sort</label>

// //           <select
// //             className="form-select"
// //             value={sortOrder}
// //             onChange={(e) => {
// //               setSortOrder(e.target.value);
// //               setPage(1);
// //             }}
// //           >
// //             <option value="">Newest</option>
// //             <option value="asc">Oldest</option>
// //             <option value="desc">Latest</option>
// //           </select>
// //         </div>

// //         {/* Reset */}

// //         <div className="col-md-2">
// //           <button
// //             className="btn btn-secondary w-100"
// //             onClick={() => {
// //               setSearch("");
// //               setCourseType("");
// //               setCourseId("");
// //               setSortOrder("");
// //               setPage(1);
// //             }}
// //           >
// //             Reset
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default EnrollmentSearch;

// import { useEffect, useState } from "react";
// import { FaSearch, FaUndo } from "react-icons/fa";

// import { getCourseDropdown } from "../../services/batchApi";

// function EnrollmentSearch({
//   search,
//   setSearch,
//   courseType,
//   setCourseType,
//   courseId,
//   setCourseId,
//   sortOrder,
//   setSortOrder,
//   setPage,
// }) {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const loadCourses = async () => {
//     try {
//       const res = await getCourseDropdown();

//       setCourses(res.data.courses || []);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const handleReset = () => {
//     setSearch("");
//     setCourseType("");
//     setCourseId("");
//     setSortOrder("");
//     setPage(1);
//   };

//   return (
//     <div className="course-topbar">
//       <div className="course-filters">
//         {/* Search */}

//         <div className="course-search">
//           <FaSearch />

//           <input
//             type="text"
//             placeholder="Search student / mobile..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Course Type */}

//         <select
//           className="course-select"
//           value={courseType}
//           onChange={(e) => {
//             setCourseType(e.target.value);
//             setCourseId("");
//             setPage(1);
//           }}
//         >
//           <option value="">All Types</option>
//           <option value="LT">LT</option>
//           <option value="VT">VT</option>
//         </select>

//         {/* Course */}

//         <select
//           className="course-select"
//           value={courseId}
//           onChange={(e) => {
//             setCourseId(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="">All Courses</option>

//           {courses
//             .filter((course) =>
//               courseType ? course.type === courseType : true,
//             )
//             .map((course) => (
//               <option key={course._id} value={course._id}>
//                 {course.name}
//               </option>
//             ))}
//         </select>

//         {/* Sort */}

//         <select
//           className="course-select"
//           value={sortOrder}
//           onChange={(e) => {
//             setSortOrder(e.target.value);
//             setPage(1);
//           }}
//         >
//           <option value="">Newest</option>
//           <option value="asc">Oldest</option>
//           <option value="desc">Latest</option>
//         </select>
//       </div>

//       {/* Reset */}

//       <button
//         className="theme-outline-btn d-flex align-items-center gap-2"
//         onClick={handleReset}
//       >
//         <FaUndo />
//         Reset
//       </button>
//     </div>
//   );
// }

// export default EnrollmentSearch;

import { useEffect, useState } from "react";
import { FaSearch, FaUndo } from "react-icons/fa";

import { getCourseDropdown } from "../../services/batchApi";

function EnrollmentSearch({
  search,
  setSearch,
  courseType,
  setCourseType,
  courseId,
  setCourseId,
  sortOrder,
  setSortOrder,
  paymentStatus,
  setPaymentStatus,
  enrollmentStatus,
  setEnrollmentStatus,
  studentNameSort,
  setStudentNameSort,
  remainingAmountSort,
  setRemainingAmountSort,
  enrollmentDateSort,
  setEnrollmentDateSort,
  setPage,
}) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await getCourseDropdown();

      setCourses(res.data.courses || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleReset = () => {
    setSearch("");
    setCourseType("");
    setCourseId("");
    setSortOrder("");

    setPaymentStatus("");
    setEnrollmentStatus("");

    setStudentNameSort("");
    setRemainingAmountSort("");
    setEnrollmentDateSort("");

    setPage(1);
  };

  return (
    <div className="course-topbar">
      <div className="course-filters">
        {/* Search */}

        <div className="course-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search student / mobile / course..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Course Type */}

        <select
          className="course-select"
          value={courseType}
          onChange={(e) => {
            setCourseType(e.target.value);
            setCourseId("");
            setPage(1);
          }}
        >
          <option value="">Course Type</option>
          <option value="VT">VT</option>
          <option value="LT">LT</option>
        </select>

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

          {courses
            .filter((course) =>
              courseType ? course.type === courseType : true,
            )
            .map((course) => (
              <option key={course._id} value={course._id}>
                {course.name}
              </option>
            ))}
        </select>

        {/* Payment Status */}

        <select
          className="course-select"
          value={paymentStatus}
          onChange={(e) => {
            setPaymentStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Payment Status</option>
          <option value="UNPAID">UNPAID</option>
          <option value="PARTIALLY_PAID">PARTIALLY_PAID</option>
          <option value="PAID">PAID</option>
        </select>

        {/* Enrollment Status */}

        <select
          className="course-select"
          value={enrollmentStatus}
          onChange={(e) => {
            setEnrollmentStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Enrollment Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="DROPPED">DROPPED</option>
        </select>

        {/* Student Name */}

        <select
          className="course-select"
          value={studentNameSort}
          onChange={(e) => {
            setStudentNameSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Student Name</option>
          <option value="asc">A → Z</option>
          <option value="desc">Z → A</option>
        </select>

        {/* Remaining Amount */}

        <select
          className="course-select"
          value={remainingAmountSort}
          onChange={(e) => {
            setRemainingAmountSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Remaining Amount</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>

        {/* Enrollment Date */}

        <select
          className="course-select"
          value={enrollmentDateSort}
          onChange={(e) => {
            setEnrollmentDateSort(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Enrollment Date</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Latest First</option>
        </select>
      </div>

      <button
        className="theme-outline-btn d-flex align-items-center gap-2"
        onClick={handleReset}
      >
        <FaUndo />
        Reset
      </button>
    </div>
  );
}

export default EnrollmentSearch;
