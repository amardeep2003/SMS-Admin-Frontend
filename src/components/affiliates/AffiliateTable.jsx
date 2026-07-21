
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

function AffiliateTable({
  affiliates,
  onView,
  onEdit,
  onDelete,
}) {
  if (!affiliates.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">🤝</div>

        <h4>No Affiliates Found</h4>

        <p>No affiliate partner records available.</p>
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
              <th>Mobile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Courses Sold</th>
              <th>Total Revenue</th>
              <th>Created</th>
              <th width="180">Action</th>
            </tr>
          </thead>

          <tbody>
            {affiliates.map((affiliate) => (
              <tr key={affiliate._id}>
                {/* Name */}

                <td>
                  <strong>{affiliate.fullName}</strong>
                </td>

                {/* Mobile */}

                <td>{affiliate.mobileNumber}</td>

                {/* Email */}

                <td>{affiliate.email}</td>

                {/* Status */}

                <td>
                  <span
                    className={
                      affiliate.status === "ACTIVE"
                        ? "badge-active"
                        : "badge-inactive"
                    }
                  >
                    {affiliate.status}
                  </span>
                </td>

                {/* Course Sold */}

                <td>{affiliate.totalCourseSold}</td>

                {/* Revenue */}

                <td>
                  ₹
                  {new Intl.NumberFormat("en-IN").format(
                    affiliate.totalRevenue
                  )}
                </td>

                {/* Created */}

                <td>
                  {new Date(affiliate.createdAt).toLocaleDateString("en-IN")}
                </td>

                {/* Actions */}

                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="action-btn view-btn"
                      title="View"
                      onClick={() => onView(affiliate._id)}
                    >
                      <FaEye />
                    </button>

                    <button
                      className="action-btn edit-btn"
                      title="Edit"
                      onClick={() => onEdit(affiliate._id)}
                    >
                      <FaEdit />
                    </button>

                    <button
                      className="action-btn delete-btn"
                      title="Delete"
                      onClick={() => onDelete(affiliate)}
                    >
                      <FaTrash />
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

export default AffiliateTable;