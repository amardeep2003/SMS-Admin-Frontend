function EnrollmentForm({
  formData,
  handleChange,
  courses,
  loadingCourses,
  onProceedPayment,
}) {
  const filteredCourses = courses.filter((course) =>
    formData.courseType ? course.type === formData.courseType : true,
  );

  return (
    <div className="row">
      {/* Full Name */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Full Name</label>

        <input
          type="text"
          className="form-control"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      {/* Mobile */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Mobile Number</label>

        <input
          type="text"
          className="form-control"
          name="mobileNumber"
          placeholder="Enter Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          maxLength={10}
        />
      </div>

      {/* Course Type */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Course Type</label>

        <select
          className="form-select"
          name="courseType"
          value={formData.courseType}
          onChange={handleChange}
        >
          <option value="">Select Course Type</option>

          <option value="LT">LT</option>

          <option value="VT">VT</option>
        </select>
      </div>

      {/* Course */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Course</label>

        <select
          className="form-select"
          name="courseId"
          value={formData.courseId}
          onChange={handleChange}
          disabled={loadingCourses}
        >
          <option value="">
            {loadingCourses ? "Loading..." : "Select Course"}
          </option>

          {filteredCourses.map((course) => (
            <option key={course._id} value={course._id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Institute */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Institute Name</label>

        <input
          type="text"
          className="form-control"
          name="instituteName"
          placeholder="Enter Institute Name"
          value={formData.instituteName}
          onChange={handleChange}
        />
      </div>

      {/* Address */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Address</label>

        <input
          type="text"
          className="form-control"
          name="address"
          placeholder="Enter Address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* Registration Fee */}

      <div className="col-12 mb-4">
        <div className="alert alert-info d-flex justify-content-between align-items-center">
          <div>
            <strong>Registration Fee</strong>

            <div className="text-muted">One Time Registration Fee</div>
          </div>

          <h4 className="mb-0 text-success">₹500</h4>
        </div>
      </div>

      {/* Button */}

      <div className="col-12">
        <button
          type="button"
          className="btn btn-primary w-100 py-2"
          onClick={onProceedPayment}
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
}

export default EnrollmentForm;
