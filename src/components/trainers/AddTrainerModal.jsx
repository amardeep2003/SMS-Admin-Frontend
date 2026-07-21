// import { useState } from "react";
// import toast from "react-hot-toast";

// import { addTrainer } from "../../services/trainerApi";

// function AddTrainerModal({ show, onClose, onSuccess }) {
//   const [saving, setSaving] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     qualification: "",
//     specialization: "",
//     monthlySalary: "",
//     joiningDate: "",
//     status: "ACTIVE",
//   });

//   if (!show) return null;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       qualification: "",
//       specialization: "",
//       monthlySalary: "",
//       joiningDate: "",
//       status: "ACTIVE",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setSaving(true);

//       const payload = {
//         ...formData,

//         specialization: formData.specialization
//           .split(",")
//           .map((item) => item.trim())
//           .filter(Boolean),

//         monthlySalary: Number(formData.monthlySalary),
//       };

//       const res = await addTrainer(payload);

//       toast.success(res.data.message);

//       resetForm();

//       onClose();

//       onSuccess();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to add trainer");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>Add Trainer</h4>

//             <button className="btn-close" onClick={onClose} />
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="modal-body">
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label>Name</label>

//                   <input
//                     className="form-control"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label>Email</label>

//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label>Phone</label>

//                   <input
//                     className="form-control"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <label>Qualification</label>

//                   <input
//                     className="form-control"
//                     name="qualification"
//                     value={formData.qualification}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-12 mb-3">
//                   <label>Specialization</label>

//                   <input
//                     className="form-control"
//                     placeholder="Java, Spring Boot, MySQL"
//                     name="specialization"
//                     value={formData.specialization}
//                     onChange={handleChange}
//                     required
//                   />

//                   <small className="text-muted">
//                     Separate multiple skills with comma.
//                   </small>
//                 </div>

//                 <div className="col-md-4 mb-3">
//                   <label>Monthly Salary</label>

//                   <input
//                     type="number"
//                     className="form-control"
//                     name="monthlySalary"
//                     value={formData.monthlySalary}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-4 mb-3">
//                   <label>Joining Date</label>

//                   <input
//                     type="date"
//                     className="form-control"
//                     name="joiningDate"
//                     value={formData.joiningDate}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="col-md-4 mb-3">
//                   <label>Status</label>

//                   <select
//                     className="form-select"
//                     name="status"
//                     value={formData.status}
//                     onChange={handleChange}
//                   >
//                     <option value="ACTIVE">ACTIVE</option>

//                     <option value="INACTIVE">INACTIVE</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={onClose}
//               >
//                 Cancel
//               </button>

//               <button className="btn btn-primary" disabled={saving}>
//                 {saving ? "Saving..." : "Add Trainer"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddTrainerModal;

import { useState } from "react";
import toast from "react-hot-toast";

import { addTrainer } from "../../services/trainerApi";

const initialState = {
  name: "",
  email: "",
  phone: "",
  qualification: "",
  specialization: "",
  monthlySalary: "",
  joiningDate: "",
  status: "ACTIVE",
};

function AddTrainerModal({ show, onClose, onSuccess }) {
  const [saving, setSaving] = useState(false);

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
      setSaving(true);

      const payload = {
        ...formData,

        specialization: formData.specialization
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        monthlySalary: Number(formData.monthlySalary),
      };

      const res = await addTrainer(payload);

      toast.success(res.data.message);

      resetForm();

      onClose();

      onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add trainer");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content course-modal">
          {/* Header */}

          <div className="course-header">
            <div>
              <h3>Add Trainer</h3>
              <p>Create a new trainer for your institute</p>
            </div>

            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row">
                {/* Name */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Trainer Name</label>

                  <input
                    className="form-control"
                    name="name"
                    value={formData.name}
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
                    required
                  />
                </div>

                {/* Phone */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>

                  <input
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Qualification */}

                <div className="col-md-6 mb-3">
                  <label className="form-label">Qualification</label>

                  <input
                    className="form-control"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Specialization */}

                <div className="col-md-12 mb-3">
                  <label className="form-label">Specialization</label>

                  <input
                    className="form-control"
                    placeholder="Java, Spring Boot, MySQL"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    required
                  />

                  <small className="text-muted">
                    Separate multiple skills with commas.
                  </small>
                </div>

                {/* Salary */}

                <div className="col-md-4 mb-3">
                  <label className="form-label">Monthly Salary</label>

                  <input
                    type="number"
                    className="form-control"
                    name="monthlySalary"
                    value={formData.monthlySalary}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Joining Date */}

                <div className="col-md-4 mb-3">
                  <label className="form-label">Joining Date</label>

                  <input
                    type="date"
                    className="form-control"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Status */}

                <div className="col-md-4 mb-3">
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

              <button type="submit" className="theme-btn" disabled={saving}>
                {saving ? "Saving..." : "Create Trainer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTrainerModal;
