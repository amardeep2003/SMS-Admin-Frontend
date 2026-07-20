import {
  FaEye,
  FaEdit,
  FaTrash,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

function TrainerTable({ trainers, onView, onEdit, onDelete, onStatus }) {
  if (!trainers.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">👨‍🏫</div>

        <h4>No Trainers Found</h4>

        <p>No trainer records available.</p>
      </div>
    );
  }

  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Qualification</th>
              <th>Specialization</th>
              <th>Salary</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th width="220">Action</th>
            </tr>
          </thead>

          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer._id}>
                {/* Name */}

                <td>
                  <div className="trainer-name">
                    <strong>{trainer.name}</strong>

                    <small className="d-block text-muted">
                      {trainer.email}
                    </small>
                  </div>
                </td>

                {/* Phone */}

                <td>{trainer.phone}</td>

                {/* Qualification */}

                <td>{trainer.qualification}</td>

                {/* Specialization */}

                <td>
                  {trainer.specialization?.length
                    ? trainer.specialization.join(", ")
                    : "-"}
                </td>

                {/* Salary */}

                <td>
                  ₹
                  {new Intl.NumberFormat("en-IN").format(trainer.monthlySalary)}
                </td>

                {/* Joining Date */}

                <td>
                  {new Date(trainer.joiningDate).toLocaleDateString("en-IN")}
                </td>

                {/* Status */}

                <td>
                  <span
                    className={
                      trainer.status === "ACTIVE"
                        ? "badge-active"
                        : "badge-inactive"
                    }
                  >
                    {trainer.status}
                  </span>
                </td>

                {/* Actions */}

                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="action-btn view-btn"
                      title="View"
                      onClick={() => onView(trainer._id)}
                    >
                      <FaEye />
                    </button>

                    <button
                      className="action-btn edit-btn"
                      title="Edit"
                      onClick={() => onEdit(trainer)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="action-btn delete-btn"
                      title="Delete"
                      onClick={() => onDelete(trainer._id)}
                    >
                      <FaTrash />
                    </button>

                    <button
                      className="action-btn status-btn"
                      title="Toggle Status"
                      onClick={() => onStatus(trainer._id)}
                    >
                      {trainer.status === "ACTIVE" ? (
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
  );
}

export default TrainerTable;
