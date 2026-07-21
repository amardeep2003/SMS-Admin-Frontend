// function EnrollmentPagination({ pagination, page, setPage }) {
//   if (!pagination?.totalPages || pagination.totalPages <= 1) {
//     return null;
//   }

//   return (
//     <div className="d-flex justify-content-between align-items-center mt-4">
//       {/* Left */}

//       <div>
//         Page <strong>{pagination.currentPage}</strong> of{" "}
//         <strong>{pagination.totalPages}</strong>
//       </div>

//       {/* Right */}

//       <div className="d-flex gap-2">
//         <button
//           className="btn btn-outline-primary"
//           disabled={!pagination.hasPreviousPage}
//           onClick={() => setPage(page - 1)}
//         >
//           Previous
//         </button>

//         <button
//           className="btn btn-outline-primary"
//           disabled={!pagination.hasNextPage}
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentPagination;

// function EnrollmentPagination({ pagination, page, setPage }) {
//   if (!pagination?.totalPages || pagination.totalPages <= 1) {
//     return null;
//   }

//   return (
//     <div className="theme-pagination">
//       {/* Left */}

//       <div className="pagination-info">
//         Showing Page <strong>{pagination.currentPage}</strong> of{" "}
//         <strong>{pagination.totalPages}</strong>
//       </div>

//       {/* Right */}

//       <div className="pagination-actions">
//         <button
//           type="button"
//           className="theme-outline-btn"
//           disabled={!pagination.hasPreviousPage}
//           onClick={() => setPage(page - 1)}
//         >
//           ← Previous
//         </button>

//         <button
//           type="button"
//           className="theme-btn"
//           disabled={!pagination.hasNextPage}
//           onClick={() => setPage(page + 1)}
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentPagination;

function EnrollmentPagination({ pagination, page, setPage }) {
  if (!pagination?.totalPages) return null;

  return (
    <div className="student-pagination">
      {/* Previous */}

      <button
        className="pagination-btn"
        disabled={!pagination.hasPreviousPage}
        onClick={() => setPage(page - 1)}
      >
        ← Previous
      </button>

      {/* Current Page */}

      <div className="pagination-info">
        <span className="page-number">{pagination.currentPage}</span>

        <span className="page-text">of {pagination.totalPages}</span>
      </div>

      {/* Next */}

      <button
        className="pagination-btn"
        disabled={!pagination.hasNextPage}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}

export default EnrollmentPagination;
