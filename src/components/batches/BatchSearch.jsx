// import { useEffect, useState } from "react";
// import { FaPlus } from "react-icons/fa";

// import { getCourseDropdown } from "../../services/courseApi";

// function BatchSearch({
//   search,
//   setSearch,
//   courseType,
//   setCourseType,
//   courseId,
//   setCourseId,
//   setPage,
//   onAdd,
// }) {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const loadCourses = async () => {
//     try {
//       const res = await getCourseDropdown();

//       setCourses(res.data.courses || res.data.data || []);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="card-box mb-4">
//       <div className="row g-3 align-items-end">
//         {/* Search */}

//         <div className="col-lg-4">
//           <label className="form-label">Search</label>

//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search Batch..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Course Type */}

//         <div className="col-lg-2">
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

//         {/* Button */}

//         <div className="col-lg-3">
//           <button className="btn btn-primary w-100" onClick={onAdd}>
//             <FaPlus className="me-2" />
//             Add Batch
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BatchSearch;



import { useEffect, useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

import { getCourseDropdown } from "../../services/courseApi";

function BatchSearch({
  search,
  setSearch,
  courseType,
  setCourseType,
  courseId,
  setCourseId,
  setPage,
  onAdd,
}) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await getCourseDropdown();

       console.log(res.data);
      setCourses(res.data.courses || res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="course-topbar">
      <div className="course-filters">
        {/* Search */}

        <div className="course-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search batch..."
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

          {courses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Add Button */}

      <button className="add-course-btn" onClick={onAdd}>
        <FaPlus />
        Add Batch
      </button>
    </div>
  );
}

export default BatchSearch;
