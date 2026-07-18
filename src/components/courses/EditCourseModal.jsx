import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getCourseById, updateCourse } from "../../services/courseApi";

function EditCourseModal({ courseId, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "LT",
    description: "",
    durationMonths: "",
    syllabus: "",
    actualPrice: "",
    discountedPrice: "",
    status: "ACTIVE",
  });

  useEffect(() => {
    if (courseId) {
      loadCourse();
    }
  }, [courseId]);

  const loadCourse = async () => {
    try {
      setLoading(true);

      const res = await getCourseById(courseId);

      const data = res.data.data;

      setFormData({
        name: data.name,
        type: data.type,
        description: data.description,
        durationMonths: data.durationMonths,
        syllabus: data.syllabus,
        actualPrice: data.actualPrice,
        discountedPrice: data.discountedPrice,
        status: data.status,
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load course");
    } finally {
      setLoading(false);
    }
  };

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
        durationMonths: Number(formData.durationMonths),
        actualPrice: Number(formData.actualPrice),
        discountedPrice: Number(formData.discountedPrice),
      };

      const res = await updateCourse(courseId, payload);

      toast.success(res.data.message);

      if (onClose) {
        onClose();
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update course");
    } finally {
      setSaving(false);
    }
  };

  if (!courseId) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Edit Course</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              {loading ? (
                <div className="text-center py-5">Loading...</div>
              ) : (
                <div className="row">
                  <div className="col-md-8 mb-3">
                    <label>Course Name</label>

                    <input
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Type</label>

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
                    <label>Description</label>

                    <textarea
                      className="form-control"
                      rows="3"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Duration</label>

                    <input
                      className="form-control"
                      type="number"
                      name="durationMonths"
                      value={formData.durationMonths}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Actual Price</label>

                    <input
                      className="form-control"
                      type="number"
                      name="actualPrice"
                      value={formData.actualPrice}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4 mb-3">
                    <label>Discount Price</label>

                    <input
                      className="form-control"
                      type="number"
                      name="discountedPrice"
                      value={formData.discountedPrice}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 mb-3">
                    <label>Syllabus</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      name="syllabus"
                      value={formData.syllabus}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-4">
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
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button className="btn btn-primary" disabled={saving}>
                {saving ? "Updating..." : "Update Course"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCourseModal;
