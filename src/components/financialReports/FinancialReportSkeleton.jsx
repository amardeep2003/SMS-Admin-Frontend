function FinancialReportSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Student</th>
              <th>Mobile</th>
              <th>Courses</th>
              <th>Total Fee</th>
              <th>Paid</th>
              <th>Remaining</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr key={index}>
                {[...Array(8)].map((__, i) => (
                  <td key={i}>
                    <div className="placeholder-glow" style={{ width: "100%" }}>
                      <span
                        className="placeholder col-12"
                        style={{
                          height: "18px",
                          borderRadius: "6px",
                        }}
                      ></span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FinancialReportSkeleton;
