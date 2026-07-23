import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getCourseById } from "../../services/courseApi";

function CourseViewModal({ courseId, onClose }) {
  const [course, setCourse] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadCourse = async () => {
    try {
      const res = await getCourseById(courseId);

      setCourse(res.data.data);
    } catch (err) {
      toast.error("Failed to load course");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (courseId) {
      loadCourse();
    }
  }, [courseId]);

  if (!courseId) return null;

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content student-modal">
          {/* HEADER */}

          <div className="student-header">
            <div>
              <h3>{course?.name || "Course Details"}</h3>

              <p>Course Information</p>
            </div>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p>Loading course details...</p>
              </div>
            ) : (
              <>
                {/* BASIC INFO */}

                <div className="row g-4 mb-4">
                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Course Name</h6>

                      <h5>{course.name}</h5>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Type</h6>

                      <span className="course-type">{course.type}</span>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="info-card">
                      <h6>Status</h6>

                      <span
                        className={
                          course.status === "ACTIVE"
                            ? "badge-success"
                            : "badge-danger"
                        }
                      >
                        {course.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="student-detail-box">
                  <div>
                    <label>Duration</label>

                    <p>{course.durationMonths} Months</p>
                  </div>

                  <div>
                    <label>Actual Fee</label>

                    <p>
                      ₹
                      {new Intl.NumberFormat("en-IN").format(
                        course.actualPrice,
                      )}
                    </p>
                  </div>

                  <div>
                    <label>Offer Fee</label>

                    <p>
                      ₹
                      {new Intl.NumberFormat("en-IN").format(
                        course.discountedPrice,
                      )}
                    </p>
                  </div>
                  <div>
                    <label>Registration Fee</label>

                    <p>
                      ₹
                      {new Intl.NumberFormat("en-IN").format(
                        course.registrationFee || 0,
                      )}
                    </p>
                  </div>
                  <div>
                    <label>Created Date</label>

                    <p>{new Date(course.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <hr />

                <h5 className="section-title">Description</h5>

                <p>{course.description || "-"}</p>

                <h5 className="section-title">Syllabus</h5>

                <p>{course.syllabus || "-"}</p>

                <hr />

                <h5 className="section-title">Active Batches</h5>

                {course.activeBatches?.length ? (
                  <div className="table-responsive">
                    <table className="table student-table">
                      <thead>
                        <tr>
                          <th>Batch</th>

                          <th>Trainer</th>

                          <th>Capacity</th>

                          <th>Students</th>

                          <th>Start</th>

                          <th>End</th>
                        </tr>
                      </thead>

                      <tbody>
                        {course.activeBatches.map((batch) => (
                          <tr key={batch._id}>
                            <td>{batch.name}</td>

                            <td>{batch.trainer?.name || "-"}</td>

                            <td>{batch.capacity}</td>

                            <td>{batch.enrolledStudents}</td>

                            <td>
                              {batch.startDate
                                ? new Date(batch.startDate).toLocaleDateString()
                                : "-"}
                            </td>

                            <td>
                              {batch.endDate
                                ? new Date(batch.endDate).toLocaleDateString()
                                : "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="alert alert-warning">
                    No Active Batch Found
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseViewModal;
