function BatchPagination({ pagination, page, setPage }) {
  if (!pagination?.totalPages) return null;

  const pages = [];

  for (let i = 1; i <= pagination.totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <div>
        Showing Page <strong>{pagination.currentPage}</strong> of{" "}
        <strong>{pagination.totalPages}</strong>
      </div>

      <ul className="pagination mb-0">
        <li
          className={`page-item ${
            !pagination.hasPreviousPage ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={() => setPage(page - 1)}>
            Previous
          </button>
        </li>

        {pages.map((item) => (
          <li
            key={item}
            className={`page-item ${item === page ? "active" : ""}`}
          >
            <button className="page-link" onClick={() => setPage(item)}>
              {item}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${!pagination.hasNextPage ? "disabled" : ""}`}
        >
          <button className="page-link" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default BatchPagination;
