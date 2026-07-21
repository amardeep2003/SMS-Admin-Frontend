function AffiliateSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Courses Sold</th>
              <th>Total Revenue</th>
              <th>Created</th>
              <th width="180">Action</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                {/* Name */}
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div className="skeleton-avatar"></div>

                    <div style={{ width: "100%" }}>
                      <div
                        className="skeleton-line"
                        style={{ width: "75%", marginBottom: "8px" }}
                      ></div>

                      <div
                        className="skeleton-line"
                        style={{ width: "45%", height: "12px" }}
                      ></div>
                    </div>
                  </div>
                </td>

                {/* Mobile */}
                <td>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                </td>

                {/* Email */}
                <td>
                  <div className="skeleton-line" style={{ width: "90%" }}></div>
                </td>

                {/* Status */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Courses Sold */}
                <td>
                  <div className="skeleton-line" style={{ width: "35%" }}></div>
                </td>

                {/* Revenue */}
                <td>
                  <div className="skeleton-line" style={{ width: "65%" }}></div>
                </td>

                {/* Created */}
                <td>
                  <div className="skeleton-line" style={{ width: "70%" }}></div>
                </td>

                {/* Action */}
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
    </div>
  );
}

export default AffiliateSkeleton;
