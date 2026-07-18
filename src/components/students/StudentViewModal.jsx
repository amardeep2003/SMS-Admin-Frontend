import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getStudent } from "../../services/studentApi";

function StudentViewModal({ studentId, onClose }) {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadStudent = async () => {
    try {
      const res = await getStudent(studentId);

      setStudent(res.data.data);
    } catch (err) {
      toast.error("Failed to load student");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (studentId) {
      loadStudent();
    }
  }, [studentId]);

  if (!studentId) return null;

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content student-modal">
          {/* HEADER */}

          <div className="student-header">
            <div>
              <h3>{student?.fullName || "Student Details"}</h3>

              <p>Student Profile Information</p>
            </div>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p className="mt-3">Loading student details...</p>
              </div>
            ) : (
              <>
                {/* BASIC INFO */}

                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Name</h6>

                      <h5>{student.fullName}</h5>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Mobile</h6>

                      <h5>{student.mobileNumber}</h5>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Status</h6>

                      <span
                        className={
                          student.status === "ACTIVE"
                            ? "badge-success"
                            : "badge-danger"
                        }
                      >
                        {student.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* OTHER DETAILS */}

                <div className="student-detail-box">
                  <div>
                    <label>Institute</label>

                    <p>{student.instituteName || "-"}</p>
                  </div>

                  <div>
                    <label>Address</label>

                    <p>{student.address || "-"}</p>
                  </div>

                  <div>
                    <label>Total Courses</label>

                    <p>{student.enrolledCoursesCount}</p>
                  </div>

                  <div>
                    <label>Joined Date</label>

                    <p>{new Date(student.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <hr />

                <h5 className="section-title">Enrolled Courses</h5>

                <div className="table-responsive">
                  <table className="table student-table">
                    <thead>
                      <tr>
                        <th>Course</th>
                        <th>Type</th>
                        <th>Batch</th>
                        <th>Trainer</th>
                        <th>Total Fee</th>
                        <th>Paid</th>
                        <th>Remaining</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {student.enrollments.map((item) => (
                        <tr key={item.enrollmentId}>
                          <td>{item.course.name}</td>

                          <td>
                            <span className="course-type">
                              {item.course.type}
                            </span>
                          </td>

                          <td>{item.batch.name}</td>

                          <td>{item.batch.trainer?.name || "-"}</td>

                          <td>
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              item.courseTotalFee,
                            )}
                          </td>

                          <td className="text-success">
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              item.totalPaidAmount,
                            )}
                          </td>

                          <td className="text-danger">
                            ₹
                            {new Intl.NumberFormat("en-IN").format(
                              item.remainingAmount,
                            )}
                          </td>

                          <td>
                            <span className="payment-badge">
                              {item.paymentStatus}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentViewModal;
