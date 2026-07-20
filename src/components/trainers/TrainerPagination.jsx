function TrainerPagination({
  pagination,
  page,
  setPage,
}) {
  if (!pagination || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <div className="card-box mt-3">
      <div className="d-flex justify-content-between align-items-center flex-wrap">

        <div>
          <small className="text-muted">
            Total Records : {pagination.totalItems}
          </small>
        </div>

        <div className="d-flex align-items-center gap-2">

          <button
            className="btn btn-outline-primary btn-sm"
            disabled={!pagination.hasPreviousPage}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>

          <span className="fw-semibold">
            Page {pagination.currentPage} of{" "}
            {pagination.totalPages}
          </span>

          <button
            className="btn btn-outline-primary btn-sm"
            disabled={!pagination.hasNextPage}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>

        </div>
      </div>
    </div>
  );
}

export default TrainerPagination;