import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAffiliateDropdown } from "../../services/affiliateApi";

import { updateEnrollmentAffiliate } from "../../services/enrollmentApi";

function AssignAffiliateModal({ show, enrollment, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [dropdownLoading, setDropdownLoading] = useState(false);

  const [affiliates, setAffiliates] = useState([]);

  const [affiliatePartner, setAffiliatePartner] = useState("");

  useEffect(() => {
    if (!show) return;

    loadAffiliates();
  }, [show]);

  const loadAffiliates = async () => {
    try {
      setDropdownLoading(true);

      const res = await getAffiliateDropdown();

      setAffiliates(res.data.data || []);
    } catch (err) {
      toast.error("Failed to load affiliates");
    } finally {
      setDropdownLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!affiliatePartner) {
      return toast.error("Please select affiliate");
    }

    try {
      setLoading(true);

      const res = await updateEnrollmentAffiliate(
        enrollment._id,
        affiliatePartner,
      );

      toast.success(res.data.message);

      setAffiliatePartner("");

      // console.log({
      //   affiliatePartner,
      // });

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to assign affiliate");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h4>Assign Affiliate</h4>

              <button type="button" className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="affiliate-label">Student</label>

                <input
                  className="form-control"
                  value={enrollment?.studentName || ""}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label className="affiliate-label">Course</label>

                <input
                  className="form-control"
                  value={enrollment?.courseName || ""}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label className="affiliate-label">Affiliate Partner</label>

                <select
                  className="form-select"
                  value={affiliatePartner}
                  onChange={(e) => setAffiliatePartner(e.target.value)}
                  disabled={dropdownLoading}
                >
                  <option value="">Select Affiliate</option>

                  {affiliates.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.fullName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Saving..." : "Assign Affiliate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignAffiliateModal;
