import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { addBatch } from "../../services/batchApi";
import { getCourseDropdown } from "../../services/courseApi";
import { getTrainerDropdown } from "../../services/trainerApi";

function AddBatchModal({ show, onClose, onSuccess }) {
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
  });

  useEffect(() => {
    if (show) {
      loadDropdowns();
    }
  }, [show]);

  const loadDropdowns = async () => {
    try {
      const [courseRes, trainerRes] = await Promise.all([
        getCourseDropdown(),
        getTrainerDropdown(),
      ]);

      setCourses(courseRes.data.courses || courseRes.data.data || []);

      setTrainers(trainerRes.data.trainers || []);
    } catch (err) {
      toast.error("Failed to load dropdown data");
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
        capacity: Number(formData.capacity),
        trainer: formData.trainer || undefined,
      };

      const res = await addBatch(payload);

      toast.success(res.data.message);

      setFormData({
        name: "",
        course: "",
        courseType: "LT",
        mode: "OFFLINE",
        capacity: "",
        startDate: "",
        endDate: "",
        trainer: "",
      });

      onSuccess();

      onClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to add batch");
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
            <h4>Add Batch</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                {/* Batch Name */}

                <div className="col-md-6 mb-3">
                  <label>Batch Name</label>

                  <input
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Course */}

                <div className="col-md-6 mb-3">
                  <label>Course</label>

                  <select
                    className="form-select"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Course</option>

                    {courses.map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course Type */}

                <div className="col-md-4 mb-3">
                  <label>Course Type</label>

                  <select
                    className="form-select"
                    name="courseType"
                    value={formData.courseType}
                    onChange={handleChange}
                  >
                    <option value="LT">LT</option>
                    <option value="VT">VT</option>
                  </select>
                </div>

                {/* Mode */}

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

                {/* Capacity */}

                <div className="col-md-4 mb-3">
                  <label>Capacity</label>

                  <input
                    type="number"
                    className="form-control"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Start Date */}

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

                {/* End Date */}

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

                {/* Trainer */}

                <div className="col-md-12 mb-3">
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
                {saving ? "Saving..." : "Add Batch"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBatchModal;
