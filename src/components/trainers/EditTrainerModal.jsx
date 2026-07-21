// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import { getTrainerById, updateTrainer } from "../../services/trainerApi";

// function EditTrainerModal({ show, trainer, onClose, onSuccess }) {
//   const [loading, setLoading] = useState(false);
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

//   useEffect(() => {
//     if (show && trainer?._id) {
//       loadTrainer();
//     }
//   }, [show, trainer]);

//   const loadTrainer = async () => {
//     try {
//       setLoading(true);

//       const res = await getTrainerById(trainer._id);

//       const data = res.data.trainer;

//       setFormData({
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         qualification: data.qualification,
//         specialization: data.specialization.join(", "),
//         monthlySalary: data.monthlySalary,
//         joiningDate: data.joiningDate.split("T")[0],
//         status: data.status,
//       });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to load trainer");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!show) return null;

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
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

//       const res = await updateTrainer(trainer._id, payload);

//       toast.success(res.data.message);

//       onClose();

//       onSuccess();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to update trainer");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-lg">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>Edit Trainer</h4>

//             <button className="btn-close" onClick={onClose} />
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="modal-body">
//               {loading ? (
//                 <div className="text-center py-5">Loading...</div>
//               ) : (
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label>Name</label>

//                     <input
//                       className="form-control"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Email</label>

//                     <input
//                       className="form-control"
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Phone</label>

//                     <input
//                       className="form-control"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Qualification</label>

//                     <input
//                       className="form-control"
//                       name="qualification"
//                       value={formData.qualification}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-12 mb-3">
//                     <label>Specialization</label>

//                     <input
//                       className="form-control"
//                       name="specialization"
//                       placeholder="Java, Node, React"
//                       value={formData.specialization}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-4 mb-3">
//                     <label>Monthly Salary</label>

//                     <input
//                       type="number"
//                       className="form-control"
//                       name="monthlySalary"
//                       value={formData.monthlySalary}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-4 mb-3">
//                     <label>Joining Date</label>

//                     <input
//                       type="date"
//                       className="form-control"
//                       name="joiningDate"
//                       value={formData.joiningDate}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>

//                   <div className="col-md-4 mb-3">
//                     <label>Status</label>

//                     <select
//                       className="form-select"
//                       name="status"
//                       value={formData.status}
//                       onChange={handleChange}
//                     >
//                       <option value="ACTIVE">ACTIVE</option>

//                       <option value="INACTIVE">INACTIVE</option>
//                     </select>
//                   </div>
//                 </div>
//               )}
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
//                 {saving ? "Updating..." : "Update Trainer"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditTrainerModal;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getTrainerById, updateTrainer } from "../../services/trainerApi";

function EditTrainerModal({ show, trainer, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    specialization: "",
    monthlySalary: "",
    joiningDate: "",
    status: "ACTIVE",
  });

  useEffect(() => {
    if (show && trainer?._id) {
      loadTrainer();
    }
  }, [show, trainer]);

  const loadTrainer = async () => {
    try {
      setLoading(true);

      const res = await getTrainerById(trainer._id);

      const data = res.data.trainer;

      setFormData({
        name: data.name,
        email: data.email,
        phone: data.phone,
        qualification: data.qualification,
        specialization: data.specialization.join(", "),
        monthlySalary: data.monthlySalary,
        joiningDate: data.joiningDate.split("T")[0],
        status: data.status,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load trainer");
    } finally {
      setLoading(false);
    }
  };

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
      setSaving(true);

      const payload = {
        ...formData,

        specialization: formData.specialization
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),

        monthlySalary: Number(formData.monthlySalary),
      };

      const res = await updateTrainer(trainer._id, payload);

      toast.success(res.data.message);

      onClose();

      onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update trainer");
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
              <h3>Edit Trainer</h3>
              <p>Update trainer information</p>
            </div>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-success"></div>

                  <p className="mt-3">Loading trainer...</p>
                </div>
              ) : (
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Name</label>

                    <input
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Email</label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone</label>

                    <input
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Qualification</label>

                    <input
                      className="form-control"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label>Specialization</label>

                    <input
                      className="form-control"
                      name="specialization"
                      placeholder="Java, Node.js, React"
                      value={formData.specialization}
                      onChange={handleChange}
                      required
                    />

                    <small className="text-muted">
                      Separate multiple skills with comma.
                    </small>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Monthly Salary</label>

                    <input
                      type="number"
                      className="form-control"
                      name="monthlySalary"
                      value={formData.monthlySalary}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Joining Date</label>

                    <input
                      type="date"
                      className="form-control"
                      name="joiningDate"
                      value={formData.joiningDate}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Status</label>

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
              )}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="theme-outline-btn"
                onClick={onClose}
              >
                Cancel
              </button>

              <button type="submit" className="theme-btn" disabled={saving}>
                {saving ? "Updating..." : "Update Trainer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditTrainerModal;
