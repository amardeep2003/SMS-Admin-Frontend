
// import { FaPlus } from "react-icons/fa";

// function AffiliateSearch({
//   search,
//   setSearch,
//   year,
//   setYear,
//   sortBy,
//   setSortBy,
//   sortOrder,
//   setSortOrder,
//   setPage,
//   onAdd,
// }) {
//   return (
//     <div className="card-box mb-4">
//       <div className="row g-3 align-items-end">
//         {/* Search */}

//         <div className="col-lg-4">
//           <label className="form-label">Search</label>

//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by name, email or mobile..."
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Year */}

//         <div className="col-lg-2">
//           <label className="form-label">Year</label>

//           <input
//             type="number"
//             className="form-control"
//             value={year}
//             onChange={(e) => {
//               setYear(e.target.value);
//               setPage(1);
//             }}
//           />
//         </div>

//         {/* Sort By */}

//         <div className="col-lg-2">
//           <label className="form-label">Sort By</label>

//           <select
//             className="form-select"
//             value={sortBy}
//             onChange={(e) => {
//               setSortBy(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Default</option>
//             <option value="totalRevenue">Revenue</option>
//             <option value="totalCourseSold">Course Sold</option>
//             <option value="createdAt">Created Date</option>
//           </select>
//         </div>

//         {/* Sort Order */}

//         <div className="col-lg-2">
//           <label className="form-label">Order</label>

//           <select
//             className="form-select"
//             value={sortOrder}
//             onChange={(e) => {
//               setSortOrder(e.target.value);
//               setPage(1);
//             }}
//           >
//             <option value="">Default</option>
//             <option value="asc">Ascending</option>
//             <option value="desc">Descending</option>
//           </select>
//         </div>

//         {/* Add */}

//         <div className="col-lg-2 d-grid">
//           <button className="btn btn-primary" onClick={onAdd}>
//             <FaPlus className="me-2" />
//             Add Affiliate
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AffiliateSearch;


import { FaSearch, FaPlus } from "react-icons/fa";

function AffiliateSearch({
  search,
  setSearch,
  year,
  setYear,
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
            placeholder="Search by name, email or mobile..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

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
          <option value="totalRevenue">Revenue</option>
          <option value="totalCourseSold">Course Sold</option>
          <option value="createdAt">Created Date</option>
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

      <button
        className="add-course-btn"
        onClick={onAdd}
      >
        <FaPlus />
        Add Affiliate
      </button>
    </div>
  );
}

export default AffiliateSearch;