// import { useState } from "react";
// import toast from "react-hot-toast";

// import { addAffiliate } from "../../services/affiliateApi";

// function AddAffiliateModal({ show, onClose, onSuccess }) {
//     const [loading, setLoading] = useState(false);

//     const [formData, setFormData] = useState({
//         fullName: "",
//         mobileNumber: "",
//         email: "",
//         address: "",
//         status: "ACTIVE",
//     });

//     if (!show) return null;

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const resetForm = () => {
//         setFormData({
//             fullName: "",
//             mobileNumber: "",
//             email: "",
//             address: "",
//             status: "ACTIVE",
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             setLoading(true);

//             const res = await addAffiliate(formData);

//             toast.success(res.data.message);

//             resetForm();

//             onSuccess();

//             onClose();
//         } catch (err) {
//             toast.error(
//                 err.response?.data?.message || "Failed to add affiliate"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         // <div className="modal fade show d-block modal-bg">
//         <div className="modal fade show d-block modal-bg affiliate-modal">
//             <div className="modal-dialog modal-lg modal-dialog-centered">
//                 <div className="modal-content">

//                     <form onSubmit={handleSubmit}>

//                         <div className="modal-header">
//                             <h4>Add Affiliate</h4>

//                             <button
//                                 type="button"
//                                 className="btn-close"
//                                 onClick={onClose}
//                             />
//                         </div>

//                         <div className="modal-body">

//                             <div className="row">

//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Full Name</label>

//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         name="fullName"
//                                         value={formData.fullName}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Mobile Number</label>

//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         name="mobileNumber"
//                                         value={formData.mobileNumber}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Email</label>

//                                     <input
//                                         type="email"
//                                         className="form-control"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                                 <div className="col-md-6 mb-3">
//                                     <label className="form-label">Status</label>

//                                     <select
//                                         className="form-select"
//                                         name="status"
//                                         value={formData.status}
//                                         onChange={handleChange}
//                                     >
//                                         <option value="ACTIVE">ACTIVE</option>
//                                         <option value="INACTIVE">INACTIVE</option>
//                                     </select>
//                                 </div>

//                                 <div className="col-12 mb-3">
//                                     <label className="form-label">Address</label>

//                                     <textarea
//                                         className="form-control"
//                                         rows="3"
//                                         name="address"
//                                         value={formData.address}
//                                         onChange={handleChange}
//                                     />
//                                 </div>

//                             </div>

//                         </div>

//                         <div className="modal-footer">

//                             <button
//                                 type="button"
//                                 className="btn btn-secondary"
//                                 onClick={onClose}
//                             >
//                                 Cancel
//                             </button>

//                             <button
//                                 type="submit"
//                                 className="btn btn-primary"
//                                 disabled={loading}
//                             >
//                                 {loading ? "Saving..." : "Add Affiliate"}
//                             </button>

//                         </div>

//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddAffiliateModal;

import { useState } from "react";
import toast from "react-hot-toast";

import { addAffiliate } from "../../services/affiliateApi";

const initialState = {
  fullName: "",
  mobileNumber: "",
  email: "",
  address: "",
  status: "ACTIVE",
};

function AddAffiliateModal({ show, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(initialState);

  if (!show) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await addAffiliate(formData);

      toast.success(res.data.message);

      resetForm();

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add affiliate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content course-modal">
          {/* Header */}

          <div className="course-header">
            <div>
              <h3>Add Affiliate Partner</h3>
              <p>Create a new affiliate partner</p>
            </div>

            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row">
                {/* Full Name */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Mobile */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Mobile Number</label>

                  <input
                    type="text"
                    className="form-control"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Status */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Status</label>

                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>

                {/* Address */}

                <div className="col-12 mb-3">
                  <label className="form-label">Address</label>

                  <textarea
                    rows="4"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
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

              <button type="submit" className="theme-btn" disabled={loading}>
                {loading ? "Saving..." : "Create Affiliate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAffiliateModal;
