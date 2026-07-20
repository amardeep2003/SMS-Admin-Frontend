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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="placeholder-glow" style={{ width: "170px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "120px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "150px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "180px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "90px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "110px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow" style={{ width: "80px" }}>
                    <span className="placeholder col-12"></span>
                  </div>
                </td>

                <td>
                  <div className="d-flex gap-2">
                    {[1, 2, 3, 4].map((btn) => (
                      <div
                        key={btn}
                        className="placeholder-glow"
                        style={{
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <span className="placeholder col-12 h-100"></span>
                      </div>
                    ))}
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
