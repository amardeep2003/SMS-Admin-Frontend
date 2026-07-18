import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import StudentViewModal from "./StudentViewModal";

function StudentTable({ students }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  if (students.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>

        <h4>No Students Found</h4>

        <p>Try another search.</p>
      </div>
    );
  }

  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Student</th>
              <th>Mobile</th>
              <th>Institute</th>
              <th>Remaining Fees</th>
              <th>Courses</th>
              <th>Status</th>
              <th width="170">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                {/* Avatar + Name */}

                <td>
                  <div className="student-info">
                    {/* <img
                      src={
                        student.photo ||
                        "https://ui-avatars.com/api/?name=" + student.name
                      }
                      alt=""
                      className="student-avatar"
                    /> */}

                    <div>
                      <div className="student-name">{student.fullName}</div>

                      <small className="text-muted">{student.email}</small>
                    </div>
                  </div>
                </td>

                {/* Mobile */}

                <td>{student.mobileNumber}</td>

                {/* Institute */}

                <td>{student.instituteName}</td>

                {/* Remaining Fees */}

                <td>
                  ₹
                  {new Intl.NumberFormat("en-IN").format(
                    student.remainingFees || 0,
                  )}
                </td>

                {/* Courses */}

                <td>{student.enrolledCoursesCount || 0}</td>

                {/* Status */}

                <td>
                  <span
                    className={
                      student.status === "ACTIVE"
                        ? "badge-active"
                        : "badge-inactive"
                    }
                  >
                    {student.status}
                  </span>
                </td>

                {/* Actions */}

                <td>
                  {/* <button className="action-btn view-btn">
                    <FaEye />
                  </button> */}

                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => setSelectedStudent(student._id)}
                  >
                    👁
                  </button>

                  {/* <button className="action-btn edit-btn">
                    <FaEdit />
                  </button> */}

                  {/* <button className="action-btn delete-btn">
                    <FaTrash />
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <StudentViewModal
          studentId={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      </div>
    </div>
  );
}

export default StudentTable;
