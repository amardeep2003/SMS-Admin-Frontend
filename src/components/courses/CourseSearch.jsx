// import { FaSearch, FaPlus } from "react-icons/fa";

// function CourseSearch({
//   search,
//   setSearch,
//   type,
//   setType,
//   status,
//   setStatus,
//   onAdd,
// }) {
//   return (
//     <div className="course-topbar">
//       <div className="course-filters">
//         <div className="search-box">
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search course..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         <select value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="">All Types</option>
//           <option value="LT">LT</option>
//           <option value="VT">VT</option>
//         </select>

//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="">All Status</option>
//           <option value="ACTIVE">ACTIVE</option>
//           <option value="INACTIVE">INACTIVE</option>
//         </select>
//       </div>

//       <button className="add-course-btn" onClick={onAdd}>
//         <FaPlus />
//         Add Course
//       </button>
//     </div>
//   );
// }

// export default CourseSearch;

import { FaSearch, FaPlus } from "react-icons/fa";

function CourseSearch({
  search,
  setSearch,
  type,
  setType,
  status,
  setStatus,
  onAdd,
}) {
  return (
    <div className="course-topbar">
      <div className="course-filters">
        {/* Search */}

        <div className="course-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Type Filter */}

        <select
          className="course-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>

          <option value="LT">LT</option>

          <option value="VT">VT</option>
        </select>

        {/* Status Filter */}

        <select
          className="course-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>

          <option value="ACTIVE">ACTIVE</option>

          <option value="INACTIVE">INACTIVE</option>
        </select>
      </div>

      {/* Add Button */}

      <button className="add-course-btn" onClick={onAdd}>
        <FaPlus />
        Add Course
      </button>
    </div>
  );
}

export default CourseSearch;
