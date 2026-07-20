import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateBatch } from "../../services/batchApi";
import { getCourseDropdown } from "../../services/courseApi";
import { getTrainerDropdown } from "../../services/trainerApi";

function EditBatchModal({ show, batch, onClose, onSuccess }) {
  const [saving, setSaving] = useState(false);

  const [courses, setCourses] = useState([]);

  const [trainers, setTrainers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    courseType: "LT",
    mode: "OFFLINE",
    capacity: "",
    startDate: "",
    endDate: "",
    trainer: "",
    status: "ACTIVE",
  });

  useEffect(() => {
    if (show) {
      loadDropdowns();
    }
  }, [show]);

  useEffect(() => {
    if (batch) {
      setFormData({
        name: batch.name || "",
        course: batch.course?._id || "",
        courseType: batch.courseType || "LT",
        mode: batch.mode || "OFFLINE",
        capacity: batch.capacity || "",
        startDate: batch.startDate ? batch.startDate.substring(0, 10) : "",
        endDate: batch.endDate ? batch.endDate.substring(0, 10) : "",
        trainer: batch.trainer?._id || "",
        status: batch.status || "ACTIVE",
      });
    }
  }, [batch]);

  const loadDropdowns = async () => {
    try {
      const [courseRes, trainerRes] = await Promise.all([
        getCourseDropdown(),
        getTrainerDropdown(),
      ]);

      setCourses(courseRes.data.courses || courseRes.data.data || []);

      setTrainers(trainerRes.data.trainers || []);
    } catch {
      toast.error("Failed to load dropdowns");
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
        name: formData.name,
        mode: formData.mode,
        capacity: Number(formData.capacity),
        startDate: formData.startDate,
        endDate: formData.endDate,
        trainer: formData.trainer || null,
        status: formData.status,
      };

      const res = await updateBatch(batch._id, payload);

      toast.success(res.data.message);

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update batch");
    } finally {
      setSaving(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Edit Batch</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Batch Name</label>

                  <input
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Course</label>

                  <select
                    className="form-select"
                    value={formData.course}
                    disabled
                  >
                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label>Course Type</label>

                  <input
                    className="form-control"
                    value={formData.courseType}
                    disabled
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label>Mode</label>

                  <select
                    className="form-select"
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                  >
                    <option value="ONLINE">ONLINE</option>
                    <option value="OFFLINE">OFFLINE</option>
                  </select>
                </div>

                <div className="col-md-4 mb-3">
                  <label>Capacity</label>

                  <input
                    type="number"
                    className="form-control"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Start Date</label>

                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>End Date</label>

                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Trainer</label>

                  <select
                    className="form-select"
                    name="trainer"
                    value={formData.trainer}
                    onChange={handleChange}
                  >
                    <option value="">Select Trainer</option>

                    {trainers.map((trainer) => (
                      <option key={trainer._id} value={trainer._id}>
                        {trainer.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>Status</label>

                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </div>
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

              <button className="btn btn-primary" disabled={saving}>
                {saving ? "Updating..." : "Update Batch"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditBatchModal;
