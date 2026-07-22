// function EnrollmentForm({
//   formData,
//   handleChange,
//   courses,
//   loadingCourses,
//   onProceedPayment,
// }) {
//   const filteredCourses = courses.filter((course) =>
//     formData.courseType ? course.type === formData.courseType : true,
//   );

//   return (
//     <div className="row">
//       {/* Full Name */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Full Name</label>

//         <input
//           type="text"
//           className="form-control"
//           name="fullName"
//           placeholder="Enter Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Mobile */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Mobile Number</label>

//         <input
//           type="text"
//           className="form-control"
//           name="mobileNumber"
//           placeholder="Enter Mobile Number"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           maxLength={10}
//         />
//       </div>

//       {/* Course Type */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Course Type</label>

//         <select
//           className="form-select"
//           name="courseType"
//           value={formData.courseType}
//           onChange={handleChange}
//         >
//           <option value="">Select Course Type</option>

//           <option value="LT">Long Term Course</option>

//           <option value="VT">Vocational Training</option>
//         </select>
//       </div>

//       {/* Course */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Course</label>

//         <select
//           className="form-select"
//           name="courseId"
//           value={formData.courseId}
//           onChange={handleChange}
//           disabled={loadingCourses}
//         >
//           <option value="">
//             {loadingCourses ? "Loading..." : "Select Course"}
//           </option>

//           {filteredCourses.map((course) => (
//             <option key={course._id} value={course._id}>
//               {course.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Institute */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Institute Name</label>

//         <input
//           type="text"
//           className="form-control"
//           name="instituteName"
//           placeholder="Enter Institute Name"
//           value={formData.instituteName}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Address */}

//       <div className="col-md-6 mb-3">
//         <label className="form-label">Address</label>

//         <input
//           type="text"
//           className="form-control"
//           name="address"
//           placeholder="Enter Address"
//           value={formData.address}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Registration Fee */}

//       <div className="col-12 mb-4">
//         <div className="alert alert-info d-flex justify-content-between align-items-center">
//           <div>
//             <strong>Registration Fee</strong>

//             <div className="text-muted">One Time Registration Fee</div>
//           </div>

//           <h4 className="mb-0 text-success">₹500</h4>
//         </div>
//       </div>

//       {/* Button */}

//       <div className="col-12">
//         <button
//           type="button"
//           className="btn btn-primary w-100 py-2"
//           onClick={onProceedPayment}
//         >
//           Proceed To Payment
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentForm;

function EnrollmentForm({
  formData,
  handleChange,
  courses,
  loadingCourses,
  feeStructure,
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

          <option value="LT">Long Term Course (LT)</option>

          <option value="VT">Vocational Training (VT)</option>
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
            {loadingCourses ? "Loading Courses..." : "Select Course"}
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

      {/* Branch */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Branch</label>

        <input
          type="text"
          className="form-control"
          name="branch"
          placeholder="e.g. Computer Science Engineering"
          value={formData.branch}
          onChange={handleChange}
        />
      </div>

      {/* DOB */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Date of Birth</label>

        <input
          type="date"
          className="form-control"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      {/* Gender */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Gender</label>

        <select
          className="form-select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>

          <option value="MALE">Male</option>

          <option value="FEMALE">Female</option>

          <option value="OTHER">Other</option>
        </select>
      </div>

      {/* Semester */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Semester</label>

        <input
          type="number"
          className="form-control"
          name="semester"
          placeholder="Enter Semester"
          value={formData.semester}
          onChange={handleChange}
          min="1"
          max="10"
        />
      </div>

      {/* Passing Year */}

      <div className="col-md-6 mb-3">
        <label className="form-label">Passing Year</label>

        <input
          type="number"
          className="form-control"
          name="passingYear"
          placeholder="e.g. 2027"
          value={formData.passingYear}
          onChange={handleChange}
          min="2024"
          max="2035"
        />
      </div>

      {/* Address */}

      <div className="col-12 mb-4">
        <label className="form-label">Address</label>

        <textarea
          className="form-control"
          name="address"
          rows="3"
          placeholder="Enter Complete Address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      {/* Fee Structure */}

      {feeStructure && (
        <div className="col-12 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-light">
              <h5 className="mb-0">Course Fee Structure</h5>
            </div>

            <div className="card-body">
              <div className="row text-center">
                <div className="col-md-4 mb-3">
                  <div className="p-3 rounded bg-primary-subtle">
                    <small className="text-muted d-block">
                      Registration Fee
                    </small>

                    <h4 className="text-primary mb-0">
                      ₹{feeStructure.registrationFee||500}
                    </h4>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="p-3 rounded bg-danger-subtle">
                    <small className="text-muted d-block">Actual Price</small>

                    <h4 className="text-danger text-decoration-line-through mb-0">
                      ₹{feeStructure.actualPrice}
                    </h4>
                  </div>
                </div>

                <div className="col-md-4 mb-3">
                  <div className="p-3 rounded bg-success-subtle">
                    <small className="text-muted d-block">
                      Discounted Price
                    </small>

                    <h4 className="text-success fw-bold mb-0">
                      ₹{feeStructure.discountedPrice}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Proceed Button */}

      <div className="col-12">
        <button
          type="button"
          className="btn btn-primary w-100 py-3 fw-semibold"
          onClick={onProceedPayment}
        >
          Proceed To Payment
        </button>
      </div>
    </div>
  );
}

export default EnrollmentForm;
