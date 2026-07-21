function TrainerSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Qualification</th>
              <th>Specialization</th>
              <th>Salary</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th width="220">Action</th>
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
                        style={{ width: "70%", marginBottom: "8px" }}
                      ></div>

                      <div
                        className="skeleton-line"
                        style={{ width: "50%", height: "12px" }}
                      ></div>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "85%" }}
                  ></div>
                </td>

                {/* Qualification */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "80%" }}
                  ></div>
                </td>

                {/* Specialization */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "90%", marginBottom: "8px" }}
                  ></div>

                  <div
                    className="skeleton-line"
                    style={{ width: "65%", height: "12px" }}
                  ></div>
                </td>

                {/* Salary */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "60%" }}
                  ></div>
                </td>

                {/* Joining Date */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "75%" }}
                  ></div>
                </td>

                {/* Status */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Action */}
                <td>
                  <div className="d-flex gap-2">
                    <div className="skeleton-btn"></div>
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

export default TrainerSkeleton;