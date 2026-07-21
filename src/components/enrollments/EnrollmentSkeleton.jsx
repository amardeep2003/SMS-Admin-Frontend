function EnrollmentSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Type</th>
              <th>Total Fee</th>
              <th>Paid</th>
              <th>Remaining</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <tr key={item}>
                {Array.from({ length: 11 }).map((_, index) => (
                  <td key={index}>
                    <div className="placeholder-glow" style={{ width: "100%" }}>
                      <span className="placeholder col-12"></span>
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

export default EnrollmentSkeleton;
