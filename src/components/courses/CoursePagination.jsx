function CoursePagination({ pagination, page, setPage }) {
  if (!pagination.totalPages) return null;

  return (
    <div className="student-pagination">

      <button
        className="pagination-btn"
        disabled={!pagination.hasPreviousPage}
        onClick={() => setPage(page - 1)}
      >
        ← Previous
      </button>


      <div className="pagination-info">

        <span className="page-number">
          {pagination.currentPage}
        </span>

        <span className="page-text">
          of {pagination.totalPages}
        </span>

      </div>


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

export default CoursePagination;