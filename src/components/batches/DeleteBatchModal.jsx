// import { useState } from "react";
// import toast from "react-hot-toast";

// import { deleteBatch } from "../../services/batchApi";

// function DeleteBatchModal({ show, batchId, batchName, onClose, onSuccess }) {
//   const [loading, setLoading] = useState(false);

//   if (!show) return null;

//   const handleDelete = async () => {
//     try {
//       setLoading(true);

//       const res = await deleteBatch(batchId);

//       toast.success(res.data.message);

//       onSuccess();

//       onClose();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to delete batch");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>Delete Batch</h4>

//             <button className="btn-close" onClick={onClose} />
//           </div>

//           <div className="modal-body text-center">
//             <h5 className="mb-3">Are you sure?</h5>

//             <p className="text-muted">
//               You are about to delete
//               <strong> {batchName}</strong>.
//             </p>

//             <p className="text-danger mb-0">This action cannot be undone.</p>
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
//               onClick={handleDelete}
//               disabled={loading}
//             >
//               {loading ? "Deleting..." : "Delete Batch"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteBatchModal;

import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

import { deleteBatch } from "../../services/batchApi";

function DeleteBatchModal({ show, batchId, batchName, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);

      const res = await deleteBatch(batchId);

      toast.success(res.data.message);

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete batch");
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
              <h3>Delete Batch</h3>

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
              <FaTrashAlt />
            </div>

            <h4 className="mt-4 mb-3">
              Are you sure you want to delete this batch?
            </h4>

            <p className="text-muted mb-0">
              You are going to permanently delete
            </p>

            <h5 className="delete-course-name">
              {batchName || "Selected Batch"}
            </h5>

            <p className="delete-warning">This action cannot be reversed.</p>
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
              onClick={handleDelete}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Delete Batch"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBatchModal;
