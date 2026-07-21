// import { useEffect, useState } from "react";
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
//       // console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="card-box mb-4">
//       <div className="row g-3 align-items-end">
//         {/* Search */}

//         <div className="col-md-3">
//           <label className="form-label">Search</label>

//           <input
//             type="text"
//             className="form-control"
//             placeholder="Student / Mobile"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Course Type */}

//         <div className="col-md-2">
//           <label className="form-label">Course Type</label>

//           <select
//             className="form-select"
//             value={courseType}
//             onChange={(e) => {
//               setCourseType(e.target.value);
//               setCourseId("");
//               setPage(1);
//             }}
//           >
//             <option value="">All</option>
//             <option value="LT">LT</option>
//             <option value="VT">VT</option>
//           </select>
//         </div>

//         {/* Course */}

//         <div className="col-md-3">
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

//             {courses
//               .filter((course) =>
//                 courseType ? course.type === courseType : true,
//               )
//               .map((course) => (
//                 <option key={course._id} value={course._id}>
//                   {course.name}
//                 </option>
//               ))}
//           </select>
//         </div>

//         {/* Sort */}

//         <div className="col-md-2">
//           <label className="form-label">Sort</label>

//           <select
//             className="form-select"
//             value={sortOrder}
//             onChange={(e) => {
//               setSortOrder(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Newest</option>
//             <option value="asc">Oldest</option>
//             <option value="desc">Latest</option>
//           </select>
//         </div>

//         {/* Reset */}

//         <div className="col-md-2">
//           <button
//             className="btn btn-secondary w-100"
//             onClick={() => {
//               setSearch("");
//               setCourseType("");
//               setCourseId("");
//               setSortOrder("");
//               setPage(1);
//             }}
//           >
//             Reset
//           </button>
//         </div>
//       </div>
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
            placeholder="Search student / mobile..."
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
          <option value="">All Types</option>
          <option value="LT">LT</option>
          <option value="VT">VT</option>
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

        {/* Sort */}

        <select
          className="course-select"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Newest</option>
          <option value="asc">Oldest</option>
          <option value="desc">Latest</option>
        </select>
      </div>

      {/* Reset */}

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
