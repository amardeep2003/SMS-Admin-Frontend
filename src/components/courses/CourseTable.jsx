import {
  FaEye,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

import { useState } from "react";
import toast from "react-hot-toast";

import { changeCourseStatus } from "../../services/courseApi";

import CourseViewModal from "./CourseViewModal";
import EditCourseModal from "./EditCourseModal";
import DeleteCourseModal from "./DeleteCourseModal";

function CourseTable({ courses, loadCourses }) {
  const [viewId, setViewId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleStatus = async (id) => {
    try {
      const res = await changeCourseStatus(id);

      toast.success(res.data.message);

      loadCourses();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change status");
    }
  };

  if (!courses.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>

        <h4>No Courses Found</h4>

        <p>Try another search.</p>
      </div>
    );
  }

  return (
    <>
      <div className="card-box">
        <div className="table-responsive">
          <table className="table align-middle course-table">
            <thead>
              <tr>
                <th>
                  <h5>Course</h5>
                </th>
                <th>
                  <h5>Type</h5>
                </th>
                <th>
                  <h5>Duration</h5>
                </th>
                <th>
                  <h5>Actual Price</h5>
                </th>
                <th>
                  <h5>Offer Price</h5>
                </th>
                <th>
                  <h5>Status</h5>
                </th>

                <th width="220">
                  <h5>Action</h5>
                </th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>
                    {/* <div className="course-name"> */}
                    <div className="course-info">
                      <h6>{course.name}</h6>

                      {/* <small>{course.description}</small> */}
                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        course.type === "LT"
                          ? " badge-primary"
                          : " badge-warning"
                      }
                    >
                      {course.type}
                    </span>
                  </td>

                  <td>{course.durationMonths} Months</td>

                  <td>
                    ₹{new Intl.NumberFormat("en-IN").format(course.actualPrice)}
                  </td>

                  <td>
                    ₹
                    {new Intl.NumberFormat("en-IN").format(
                      course.discountedPrice,
                    )}
                  </td>

                  <td>
                    <span
                      className={
                        course.status === "ACTIVE"
                          ? "badge-active"
                          : "badge-inactive"
                      }
                    >
                      {course.status}
                    </span>
                  </td>

                  <td>
                    <div className="action-group">
                      <button
                        className="action-btn view-btn"
                        title="View"
                        onClick={() => setViewId(course._id)}
                      >
                        <FaEye />
                      </button>

                      <button
                        className="action-btn edit-btn"
                        title="Edit"
                        onClick={() => setEditId(course._id)}
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="action-btn delete-btn"
                        title="Delete"
                        onClick={() => setDeleteId(course._id)}
                      >
                        <FaTrash />
                      </button>

                      <button
                        className="action-btn status-btn"
                        title="Change Status"
                        onClick={() => handleStatus(course._id)}
                      >
                        {course.status === "ACTIVE" ? (
                          <FaToggleOn />
                        ) : (
                          <FaToggleOff />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CourseViewModal courseId={viewId} onClose={() => setViewId(null)} />

      <EditCourseModal
        courseId={editId}
        onClose={() => {
          setEditId(null);
          loadCourses();
        }}
      />

      {/* <DeleteCourseModal
        courseId={deleteId}
        onClose={() => setDeleteId(null)}
        onSuccess={loadCourses}
      /> */}
      <DeleteCourseModal
        show={deleteId !== null}
        courseId={deleteId}
        courseName={
          courses.find(c => c._id === deleteId)?.name
        }
        onClose={() => setDeleteId(null)}
        onSuccess={() => {
          setDeleteId(null);
          loadCourses();
        }}
      />
    </>
  );
}

export default CourseTable;
