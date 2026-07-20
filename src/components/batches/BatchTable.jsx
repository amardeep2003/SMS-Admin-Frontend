import {
  FaEye,
  FaEdit,
  FaToggleOn,
  FaToggleOff,
  FaUserPlus,
  FaTrash,
} from "react-icons/fa";

function BatchTable({
  batches,
  onView,
  onEdit,
  onDelete,
  onStatus,
  onAddStudent,
}) {
  if (!batches.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>

        <h4>No Batches Found</h4>

        <p>No batch records available.</p>
      </div>
    );
  }

  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Batch Name</th>

              <th>Course</th>

              <th>Type</th>

              <th>Mode</th>

              <th>Trainer</th>

              <th>Students</th>

              <th>Capacity</th>

              <th>Status</th>

              <th width="240">Action</th>
            </tr>
          </thead>

          <tbody>
            {batches.map((batch) => (
              <tr key={batch._id}>
                {/* Batch */}

                <td>
                  <strong>{batch.name}</strong>
                </td>

                {/* Course */}

                <td>{batch.course?.name || "-"}</td>

                {/* Type */}

                <td>
                  <span
                    className={
                      batch.courseType === "LT"
                        ? "badge badge-primary"
                        : "badge badge-warning"
                    }
                  >
                    {batch.courseType}
                  </span>
                </td>

                {/* Mode */}

                <td>{batch.mode || "-"}</td>

                {/* Trainer */}

                <td>{batch.trainer?.name || "-"}</td>

                {/* Students */}

                <td>{batch.enrolledStudents}</td>

                {/* Capacity */}

                <td>{batch.capacity}</td>

                {/* Status */}

                <td>
                  <span
                    className={
                      batch.status === "ACTIVE"
                        ? "badge-active"
                        : batch.status === "COMPLETED"
                          ? "badge-warning"
                          : "badge-inactive"
                    }
                  >
                    {batch.status}
                  </span>
                </td>

                {/* Actions */}

                <td>
                  {/*  */}
                  <div className="d-flex gap-2 align-items-center">
                    {/* View */}

                    <button
                      className="action-btn view-btn"
                      title="View"
                      onClick={() => onView(batch._id)}
                    >
                      <FaEye />
                    </button>

                    {/* Edit */}

                    <button
                      className="action-btn edit-btn"
                      title="Edit"
                      onClick={() => onEdit(batch._id)}
                    >
                      <FaEdit />
                    </button>

                    {/* Delete */}

                    <button
                      className="action-btn delete-btn"
                      title="Delete"
                      onClick={() => onDelete(batch)}
                    >
                      <FaTrash />
                    </button>

                    {/* Add Student */}

                    <button
                      className="action-btn add-btn"
                      title="Add Student"
                      onClick={() => onAddStudent(batch._id)}
                    >
                      <FaUserPlus />
                    </button>

                    {/* Status Dropdown */}

                    <div className="dropdown">
                      <button
                        className="action-btn status-btn dropdown-toggle"
                        data-bs-toggle="dropdown"
                        type="button"
                      >
                        {batch.status === "ACTIVE" ? (
                          <FaToggleOn />
                        ) : (
                          <FaToggleOff />
                        )}
                      </button>

                      <ul className="dropdown-menu">
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => onStatus(batch, "ACTIVE")}
                          >
                            ACTIVE
                          </button>
                        </li>

                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => onStatus(batch, "INACTIVE")}
                          >
                            INACTIVE
                          </button>
                        </li>

                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => onStatus(batch, "COMPLETED")}
                          >
                            COMPLETED
                          </button>
                        </li>
                      </ul>
                    </div>
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

export default BatchTable;
