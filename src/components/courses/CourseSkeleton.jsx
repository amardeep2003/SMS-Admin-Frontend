function CourseSkeleton() {
  console.log("Course Skeleton Rendered");
  return (
    <div className="card-box">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Duration</th>
            <th>Actual Price</th>
            <th>Offer Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <tr key={item}>
              <td>
                <div className="skeleton-line w-75"></div>
              </td>

              <td>
                <div className="skeleton-line w-50"></div>
              </td>

              <td>
                <div className="skeleton-line w-50"></div>
              </td>

              <td>
                <div className="skeleton-line"></div>
              </td>

              <td>
                <div className="skeleton-line"></div>
              </td>

              <td>
                <div className="skeleton-badge"></div>
              </td>

              <td>
                <div className="d-flex gap-2">
                  <div className="skeleton-btn"></div>
                  <div className="skeleton-btn"></div>
                  <div className="skeleton-btn"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CourseSkeleton;
