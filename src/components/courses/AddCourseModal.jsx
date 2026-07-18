import { useState } from "react";
import toast from "react-hot-toast";

import { addCourse } from "../../services/courseApi";

const initialState = {
  name: "",
  type: "LT",
  description: "",
  durationMonths: "",
  syllabus: "",
  actualPrice: "",
  discountedPrice: "",
};

function AddCourseModal({ show, onClose, onSuccess }) {
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

      const res = await addCourse({
        ...formData,
        durationMonths: Number(formData.durationMonths),
        actualPrice: Number(formData.actualPrice),
        discountedPrice: Number(formData.discountedPrice),
      });

      toast.success(res.data.message);

      setFormData(initialState);

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="modal fade show d-block modal-bg">
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-lg">
        {/* <div className="modal-content"> */}
        <div className="modal-content course-modal">
          {/* <div className="modal-header">
            <h4>Add Course</h4>

            <button className="btn-close" onClick={onClose}></button>
          </div> */}

          <div className="course-header">
            <div>
              <h3>Add New Course</h3>
              <p>Create a new course for your institute</p>
            </div>

            <button
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-8 mb-3">
                  <label className="form-label">Course Name</label>

                  <input
                    className="form-control"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Type</label>

                  <select
                    className="form-select"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                  >
                    <option value="LT">LT</option>
                    <option value="VT">VT</option>
                  </select>
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Description</label>

                  <textarea
                    rows="3"
                    className="form-control"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Duration (Months)</label>

                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    name="durationMonths"
                    required
                    value={formData.durationMonths}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Actual Price</label>

                  <input
                    type="number"
                    className="form-control"
                    name="actualPrice"
                    required
                    value={formData.actualPrice}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Discount Price</label>

                  <input
                    type="number"
                    className="form-control"
                    name="discountedPrice"
                    required
                    value={formData.discountedPrice}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">Syllabus</label>

                  <textarea
                    rows="5"
                    className="form-control"
                    name="syllabus"
                    required
                    value={formData.syllabus}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="theme-outline-btn"
                onClick={onClose}
              >
                Cancel
              </button>

              <button className="theme-btn" disabled={loading}>
                {loading ? "Saving..." : "Create Course"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourseModal;
