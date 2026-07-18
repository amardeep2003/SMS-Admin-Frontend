import toast from "react-hot-toast";
import { deleteCourse } from "../../services/courseApi";

function DeleteCourseModal({ courseId, courseName, show, onClose, onSuccess }) {
  if (!show) return null;

  const handleDelete = async () => {
    try {
      const res = await deleteCourse(courseId);

      toast.success(res.data.message);

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete course");
    }
  };

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h4 className="text-danger">Delete Course</h4>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body text-center">
            <div
              style={{
                fontSize: "60px",
              }}
            >
              ⚠️
            </div>

            <h5 className="mb-3">Are you sure?</h5>

            <p className="text-muted">
              You are going to delete
              <br />
              <strong>{courseName}</strong>
            </p>

            <p className="text-danger small">This action cannot be undone.</p>
          </div>

          <div className="modal-footer justify-content-center">
            <button className="btn btn-secondary px-4" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-danger px-4" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCourseModal;
