import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getTrainerById } from "../../services/trainerApi";

function TrainerViewModal({ trainerId, onClose }) {
  const [loading, setLoading] = useState(false);
  const [trainer, setTrainer] = useState(null);

  useEffect(() => {
    if (trainerId) {
      loadTrainer();
    }
  }, [trainerId]);

  const loadTrainer = async () => {
    try {
      setLoading(true);

      const res = await getTrainerById(trainerId);

      setTrainer(res.data.trainer);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load trainer");
    } finally {
      setLoading(false);
    }
  };

  if (!trainerId) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Trainer Details</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            {loading ? (
              <div className="text-center py-5">Loading...</div>
            ) : (
              trainer && (
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <strong>Name</strong>
                    <p>{trainer.name}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Email</strong>
                    <p>{trainer.email}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Phone</strong>
                    <p>{trainer.phone}</p>
                  </div>

                  <div className="col-md-6 mb-3">
                    <strong>Qualification</strong>
                    <p>{trainer.qualification}</p>
                  </div>

                  <div className="col-md-12 mb-3">
                    <strong>Specialization</strong>

                    <div className="d-flex flex-wrap gap-2 mt-2">
                      {trainer.specialization.map((item, index) => (
                        <span key={index} className="badge bg-primary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <strong>Monthly Salary</strong>

                    <p>
                      ₹
                      {new Intl.NumberFormat("en-IN").format(
                        trainer.monthlySalary,
                      )}
                    </p>
                  </div>

                  <div className="col-md-4 mb-3">
                    <strong>Joining Date</strong>

                    <p>
                      {new Date(trainer.joiningDate).toLocaleDateString(
                        "en-IN",
                      )}
                    </p>
                  </div>

                  <div className="col-md-4 mb-3">
                    <strong>Status</strong>

                    <p>
                      <span
                        className={`badge ${
                          trainer.status === "ACTIVE"
                            ? "bg-success"
                            : "bg-danger"
                        }`}
                      >
                        {trainer.status}
                      </span>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <strong>Created At</strong>

                    <p>{new Date(trainer.createdAt).toLocaleString("en-IN")}</p>
                  </div>

                  <div className="col-md-6">
                    <strong>Updated At</strong>

                    <p>{new Date(trainer.updatedAt).toLocaleString("en-IN")}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerViewModal;
