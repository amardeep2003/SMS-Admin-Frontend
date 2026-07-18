function CoursePagination({ pagination, page, setPage }) {
  if (!pagination.totalPages) return null;

  return (
    <div className="student-pagination">
      <button
        className="page-btn"
        disabled={!pagination.hasPreviousPage}
        onClick={() => setPage(page - 1)}
      >
        ← Previous
      </button>

      <div className="page-number">
        Page {pagination.currentPage} of {pagination.totalPages}
      </div>

      <button
        className="page-btn"
        disabled={!pagination.hasNextPage}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}

export default CoursePagination;
