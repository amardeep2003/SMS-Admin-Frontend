import { useState } from "react";
import toast from "react-hot-toast";

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
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Delete Batch</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body text-center">
            <h5 className="mb-3">Are you sure?</h5>

            <p className="text-muted">
              You are about to delete
              <strong> {batchName}</strong>.
            </p>

            <p className="text-danger mb-0">This action cannot be undone.</p>
          </div>

          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              className="btn btn-danger"
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
