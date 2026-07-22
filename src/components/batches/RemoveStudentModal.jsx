// import { useState } from "react";
// import toast from "react-hot-toast";

// import { removeStudentFromBatch } from "../../services/batchApi";

// function RemoveStudentModal({ show, batchId, student, onClose, onSuccess }) {
//   const [loading, setLoading] = useState(false);

//   if (!show) return null;

//   const handleRemove = async () => {
//     try {
//       setLoading(true);

//       const res = await removeStudentFromBatch(batchId, student._id);

//       toast.success(res.data.message);

//       await onSuccess();

//       onClose();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to remove student.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>Remove Student</h4>

//             <button
//               className="btn-close"
//               onClick={onClose}
//               disabled={loading}
//             />
//           </div>

//           <div className="modal-body">
//             <p className="mb-3">
//               Are you sure you want to remove
//               <strong> {student?.fullName}</strong> from this batch?
//             </p>

//             <div className="alert alert-warning mb-0">
//               <strong>Note:</strong> This action will only remove the student
//               from the current batch. The student record will remain in the
//               system and will <strong>not</strong> be assigned to another batch
//               automatically.
//             </div>
//           </div>

//           <div className="modal-footer">
//             <button
//               className="btn btn-secondary"
//               onClick={onClose}
//               disabled={loading}
//             >
//               Cancel
//             </button>

//             <button
//               className="btn btn-danger"
//               onClick={handleRemove}
//               disabled={loading}
//             >
//               {loading ? "Removing..." : "Remove Student"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RemoveStudentModal;

import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserMinus } from "react-icons/fa";

import { removeStudentFromBatch } from "../../services/batchApi";

function RemoveStudentModal({ show, batchId, student, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleRemove = async () => {
    try {
      setLoading(true);

      const res = await removeStudentFromBatch(batchId, student._id);

      toast.success(res.data.message);

      await onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to remove student.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content course-modal">
          {/* Header */}

          <div className="course-header">
            <div>
              <h3>Remove Student</h3>

              <p>This action cannot be undone</p>
            </div>

            <button
              className="btn-close"
              onClick={onClose}
              disabled={loading}
            />
          </div>

          {/* Body */}

          <div className="modal-body text-center p-5">
            <div className="delete-course-icon">
              <FaUserMinus />
            </div>

            <h4 className="mt-4 mb-3">Remove this student from the batch?</h4>

            <p className="text-muted mb-0">You are going to remove</p>

            <h5 className="delete-course-name">
              {student?.fullName || "Selected Student"}
            </h5>

            <div className="alert alert-warning mt-4 text-start">
              <strong>Note:</strong> This will only remove the student from the
              current batch. The student record will remain in the system and
              will <strong>not</strong> be assigned to another batch
              automatically.
            </div>
          </div>

          {/* Footer */}

          <div className="modal-footer">
            <button
              type="button"
              className="theme-outline-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              type="button"
              className="theme-danger-btn"
              onClick={handleRemove}
              disabled={loading}
            >
              {loading ? "Removing..." : "Remove Student"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveStudentModal;
