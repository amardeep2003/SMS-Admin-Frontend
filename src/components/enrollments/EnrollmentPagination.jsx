function EnrollmentPagination({ pagination, page, setPage }) {
  if (!pagination?.totalPages || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      {/* Left */}

      <div>
        Page <strong>{pagination.currentPage}</strong> of{" "}
        <strong>{pagination.totalPages}</strong>
      </div>

      {/* Right */}

      <div className="d-flex gap-2">
        <button
          className="btn btn-outline-primary"
          disabled={!pagination.hasPreviousPage}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>

        <button
          className="btn btn-outline-primary"
          disabled={!pagination.hasNextPage}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default EnrollmentPagination;
