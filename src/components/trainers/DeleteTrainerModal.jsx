import toast from "react-hot-toast";

import { deleteTrainer } from "../../services/trainerApi";

function DeleteTrainerModal({
  show,
  trainerId,
  trainerName,
  onClose,
  onSuccess,
}) {
  if (!show) return null;

  const handleDelete = async () => {
    try {
      const res = await deleteTrainer(trainerId);

      toast.success(res.data.message);

      onSuccess();

      onClose();
    } catch (err) {
      console.log(err);
      console.log(err.response);
      toast.error(err.response?.data?.message || err.message);
      
      toast.error(err.response?.data?.message || "Failed to delete trainer");
    }
  };

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Delete Trainer</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body text-center">
            <h5 className="mb-3">Are you sure?</h5>

            <p className="text-muted">
              You are about to delete
              <strong> {trainerName}</strong>.
            </p>

            <p className="text-danger mb-0">This action cannot be undone.</p>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>

            <button className="btn btn-danger" onClick={handleDelete}>
              Delete Trainer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTrainerModal;
