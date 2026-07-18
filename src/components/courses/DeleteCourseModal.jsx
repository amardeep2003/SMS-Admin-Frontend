// import toast from "react-hot-toast";
// import { deleteCourse } from "../../services/courseApi";

// function DeleteCourseModal({ courseId, courseName, show, onClose, onSuccess }) {
//   if (!show) return null;

//   const handleDelete = async () => {
//     try {
//       const res = await deleteCourse(courseId);

//       toast.success(res.data.message);

//       onSuccess();

//       onClose();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to delete course");
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header border-0">
//             <h4 className="text-danger">Delete Course</h4>

//             <button className="btn-close" onClick={onClose}></button>
//           </div>

//           <div className="modal-body text-center">
//             <div
//               style={{
//                 fontSize: "60px",
//               }}
//             >
//               ⚠️
//             </div>

//             <h5 className="mb-3">Are you sure?</h5>

//             <p className="text-muted">
//               You are going to delete
//               <br />
//               <strong>{courseName}</strong>
//             </p>

//             <p className="text-danger small">This action cannot be undone.</p>
//           </div>

//           <div className="modal-footer justify-content-center">
//             <button className="btn btn-secondary px-4" onClick={onClose}>
//               Cancel
//             </button>

//             <button className="btn btn-danger px-4" onClick={handleDelete}>
//               Delete
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteCourseModal;


import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { deleteCourse } from "../../services/courseApi";

function DeleteCourseModal({
  courseId,
  courseName,
  show,
  onClose,
  onSuccess,
}) {
  if (!show) return null;

  const handleDelete = async () => {
    try {
      const res = await deleteCourse(courseId);

      toast.success(res.data.message);

      onSuccess?.();
      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete course");
    }
  };

  return (
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content course-modal">
          {/* Header */}

          <div className="course-header">
            <div>
              <h3>Delete Course</h3>

              <p>This action cannot be undone</p>
            </div>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          {/* Body */}

          <div className="modal-body text-center p-5">
            <div className="delete-course-icon">
              <FaTrashAlt />
            </div>

            <h4 className="mt-4 mb-3">
              Are you sure you want to delete this course?
            </h4>

            <p className="text-muted mb-0">
              You are going to permanently delete
            </p>

            <h5 className="delete-course-name">
              {courseName || "Selected Course"}
            </h5>

            <p className="delete-warning">
              This action cannot be reversed.
            </p>
          </div>

          {/* Footer */}

          <div className="modal-footer">
            <button
              type="button"
              className="theme-outline-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="button"
              className="theme-danger-btn"
              onClick={handleDelete}
            >
              Delete Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCourseModal;