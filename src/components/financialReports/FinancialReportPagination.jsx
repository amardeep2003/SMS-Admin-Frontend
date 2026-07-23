function FinancialReportPagination({ pagination, page, setPage }) {
  if (!pagination?.totalPages || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div>
        Showing Page {pagination.currentPage} of {pagination.totalPages}
      </div>

      <div className="d-flex gap-2">
        <button
          className="theme-outline-btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <button
          className="theme-btn"
          disabled={page === pagination.totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default FinancialReportPagination;
