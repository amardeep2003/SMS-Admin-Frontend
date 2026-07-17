// import { Badge } from "react-bootstrap";

function PopularCourses({ courses }) {
  return (
    <div className="card-box mt-4">

      <div className="d-flex justify-content-between align-items-center mb-4">

        {/* <h4 className="fw-bold mb-0">
          Top Popular Courses
        </h4> */}

        <h4 className="fw-bold mb-1">

          Top Popular Courses

        </h4>

        <small className="text-muted">

          Most enrolled courses

        </small>

        <span className="text-muted">
          Top 5 Courses
        </span>

      </div>

      <div className="table-responsive">

        <table className="table align-middle table-hover">

          <thead>

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

            {courses.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  className="text-center py-5"
                >
                  No Data Found
                </td>

              </tr>

            ) : (

              courses.map((course, index) => (

                <tr key={course._id}>

                  <td>{index + 1}</td>

                  <td>

                    <strong>
                      {course.name}
                    </strong>

                  </td>

                  <td>

                    <span
                      className={`badge ${course.type === "VT"
                          ? "bg-success"
                          : "bg-primary"
                        }`}
                    >
                      {course.type}
                    </span>

                  </td>

                  <td>
                    {course.totalStudents}
                  </td>

                  <td>
                    {course.totalBatches}
                  </td>

                  <td>

                    ₹
                    {course.discountedPrice.toLocaleString()}

                  </td>

                  <td>

                    <span
                      className={`badge ${course.status === "ACTIVE"
                          ? "bg-success"
                          : "bg-danger"
                        }`}
                    >
                      {course.status}
                    </span>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PopularCourses;