function BatchSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Batch</th>
              <th>Course</th>
              <th>Type</th>
              <th>Mode</th>
              <th>Trainer</th>
              <th>Students</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3, 4, 5].map((item) => (
              <tr key={item}>
                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-10"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-7"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-8"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-4"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-4"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-6"></span>
                  </div>
                </td>

                <td>
                  <div className="placeholder-glow">
                    <span className="placeholder col-12"></span>
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

export default BatchSkeleton;
