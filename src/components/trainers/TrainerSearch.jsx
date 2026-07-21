// import { FaPlus, FaSearch } from "react-icons/fa";

// function TrainerSearch({
//   search,
//   setSearch,
//   status,
//   setStatus,
//   sortBy,
//   setSortBy,
//   sortOrder,
//   setSortOrder,
//   setPage,
//   onAdd,
// }) {
//   return (
//     <div className="card-box mb-4">
//       <div className="row g-3 align-items-center">
//         {/* Search */}

//         <div className="col-lg-4">
//           <div className="input-group">
//             <span className="input-group-text">
//               <FaSearch />
//             </span>

//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search trainer..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setPage(1);
//               }}
//             />
//           </div>
//         </div>

//         {/* Status */}

//         <div className="col-lg-2">
//           <select
//             className="form-select"
//             value={status}
//             onChange={(e) => {
//               setStatus(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">All Status</option>

//             <option value="ACTIVE">ACTIVE</option>

//             <option value="INACTIVE">INACTIVE</option>
//           </select>
//         </div>

//         {/* Sort By */}

//         <div className="col-lg-2">
//           <select
//             className="form-select"
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Sort By</option>

//             <option value="name">Name</option>

//             <option value="createdAt">Created</option>

//             <option value="updatedAt">Updated</option>
//           </select>
//         </div>

//         {/* Sort Order */}

//         <div className="col-lg-2">
//           <select
//             className="form-select"
//             value={sortOrder}
//             onChange={(e) => {
//               setSortOrder(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Order</option>

//             <option value="asc">Ascending</option>

//             <option value="desc">Descending</option>
//           </select>
//         </div>

//         {/* Add */}

//         <div className="col-lg-2 text-end">
//           <button
//             className="btn btn-primary w-100"
//             onClick={onAdd}
//           >
//             <FaPlus className="me-2" />
//             Add Trainer
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TrainerSearch;

import { FaSearch, FaPlus } from "react-icons/fa";

function TrainerSearch({
  search,
  setSearch,
  status,
  setStatus,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  setPage,
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
            placeholder="Search by trainer name..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Status */}

        <select
          className="course-select"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option value="">All Status</option>
          <option value="ACTIVE">ACTIVE</option>
          <option value="INACTIVE">INACTIVE</option>
        </select>

        {/* Sort By */}

        <select
          className="course-select"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="createdAt">Created Date</option>
          <option value="updatedAt">Updated Date</option>
        </select>

        {/* Sort Order */}

        <select
          className="course-select"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setPage(1);
          }}
        >
          <option value="">Order</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {/* Add Button */}

      <button className="add-course-btn" onClick={onAdd}>
        <FaPlus />
        Add Trainer
      </button>
    </div>
  );
}

export default TrainerSearch;
