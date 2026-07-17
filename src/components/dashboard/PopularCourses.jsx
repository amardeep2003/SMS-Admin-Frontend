// import { Badge } from "react-bootstrap";

function PopularCourses({ courses }) {
  return (
    <div className="card shadow border-0">
      <div className="card-header bg-white">
        <h5 className="mb-0">Top 5 Popular Courses</h5>
      </div>

      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Type</th>
                <th>Students</th>
                <th>Batches</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {courses.length > 0 ? (
                courses.map((course, index) => (
                  <tr key={course._id}>
                    <td>{index + 1}</td>

                    <td>{course.name}</td>

                    <td>
                      {/* <Badge bg={course.type === "VT" ? "primary" : "success"}>
                        {course.type}
                      </Badge> */}

                      <span
                        className={`badge ${
                          course.type === "VT" ? "bg-primary" : "bg-success"
                        }`}
                      >
                        {course.type}
                      </span>
                    </td>

                    <td>{course.totalStudents}</td>

                    <td>{course.totalBatches}</td>

                    <td>₹{course.discountedPrice}</td>

                    <td>
                      {/* <Badge
                        bg={
                          course.status === "ACTIVE" ? "success" : "secondary"
                        }
                      >
                        {course.status}
                      </Badge> */}
                      <span
                        className={`badge ${
                          course.status === "ACTIVE"
                            ? "bg-success"
                            : "bg-secondary"
                        }`}
                      >
                        {course.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-5">
                    No Courses Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PopularCourses;
