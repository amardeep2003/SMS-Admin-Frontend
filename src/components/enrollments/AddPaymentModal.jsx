import { useState } from "react";
import toast from "react-hot-toast";

import { addEnrollmentPayment } from "../../services/enrollmentApi";

const initialState = {
  amount: "",
  paymentMode: "ONLINE",
  transactionId: "",
  note: "",
};

function AddPaymentModal({ show, enrollmentId, onClose, onSuccess }) {
  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        amount: Number(formData.amount),
        paymentMode: formData.paymentMode,
        transactionId: formData.transactionId,
        note: formData.note,
      };

      const res = await addEnrollmentPayment(enrollmentId, payload);

      toast.success(res.data.message);

      setFormData(initialState);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content student-modal">
          <div className="student-header">
            <div>
              <h3>Add Course Fee Payment</h3>
              <p>Record student course fee payment</p>
            </div>

            <button
              className="btn-close"
              onClick={onClose}
              disabled={loading}
            />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="card-box">
                <div className="row g-4">
                  <div className="col-md-6 mb-3">
                    <label className="fw-semibold mb-2">Amount</label>

                    <input
                      type="number"
                      className="theme-input"
                      name="amount"
                      min="1"
                      required
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="fw-semibold mb-2">Payment Mode</label>

                  <select
                    className="theme-select"
                    name="paymentMode"
                    value={formData.paymentMode}
                    onChange={handleChange}
                  >
                    <option value="ONLINE">ONLINE</option>

                    <option value="CASH">CASH</option>
                  </select>
                </div>

                <div className="col-md-12 mb-3">
                  <label className="fw-semibold mb-2">Transaction Id</label>

                  <input
                    type="text"
                    className="theme-input"
                    name="transactionId"
                    placeholder="Enter Transaction Id"
                    value={formData.transactionId}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label className="fw-semibold mb-2">Note</label>

                  <textarea
                    rows="4"
                    className="theme-input"
                    name="note"
                    placeholder="Enter Note"
                    value={formData.note}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="student-footer">
              <button
                type="button"
                className="theme-outline-btn"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="theme-btn"
                disabled={loading}
              >
                {loading ? "Saving..." : "Add Payment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddPaymentModal;
