// import { useEffect, useState } from "react";
// import { getEnrollmentById } from "../../services/enrollmentApi";

// function EnrollmentViewModal({ show, enrollmentId, onClose }) {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (!show || !enrollmentId) return;

//     const load = async () => {
//       try {
//         setLoading(true);

//         const res = await getEnrollmentById(enrollmentId);

//         setData(res.data.data);
//       } finally {
//         setLoading(false);
//       }
//     };

//     load();
//   }, [show, enrollmentId]);

//   if (!show) return null;

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-lg modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>Enrollment Details</h4>

//             <button className="btn-close" onClick={onClose} />
//           </div>

//           <div className="modal-body">
//             {loading ? (
//               <h5>Loading...</h5>
//             ) : (
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <strong>Student</strong>
//                   <br />
//                   {data.studentName}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Mobile</strong>
//                   <br />
//                   {data.mobileNumber}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Course</strong>
//                   <br />
//                   {data.courseName}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Course Type</strong>
//                   <br />
//                   {data.courseType}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Total Fee</strong>
//                   <br />₹{data.totalFee}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Total Paid</strong>
//                   <br />₹{data.totalPaid}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Remaining</strong>
//                   <br />₹{data.remainingAmount}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Payment Status</strong>
//                   <br />
//                   {data.paymentStatus}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Status</strong>
//                   <br />
//                   {data.status}
//                 </div>

//                 <div className="col-md-6 mb-3">
//                   <strong>Enrollment Date</strong>
//                   <br />
//                   {new Date(data.enrollmentDate).toLocaleDateString()}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentViewModal;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getEnrollmentById } from "../../services/enrollmentApi";

import AddPaymentModal from "./AddPaymentModal";

function EnrollmentViewModal({ enrollmentId, onClose }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  useEffect(() => {
    if (enrollmentId) {
      loadEnrollment();
    }
  }, [enrollmentId]);

  const loadEnrollment = async () => {
    try {
      setLoading(true);

      const res = await getEnrollmentById(enrollmentId);

      setData(res.data.data);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to load enrollment details",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!enrollmentId) return null;

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content student-modal">
          <div className="student-header">
            <div>
              <h3>Enrollment Details</h3>

              <p>Student, Course & Payment Information</p>
            </div>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p className="mt-3">Loading enrollment details...</p>
              </div>
            ) : (
              data && (
                <>
                  {/* Student */}

                  <h5 className="section-title mb-3">Student Information</h5>

                  <div className="row g-4 mb-4">
                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Student Name</h6>
                        <h5>{data.student.fullName}</h5>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Mobile Number</h6>
                        <h5>{data.student.mobileNumber}</h5>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Gender</h6>
                        <h5>{data.student.gender}</h5>
                      </div>
                    </div>
                  </div>

                  <div className="student-detail-box">
                    <div>
                      <label>Date of Birth</label>

                      <p>
                        {data.student.dob
                          ? new Date(data.student.dob).toLocaleDateString(
                              "en-IN",
                            )
                          : "-"}
                      </p>
                    </div>

                    <div>
                      <label>Institute</label>

                      <p>{data.student.instituteName || "-"}</p>
                    </div>

                    <div>
                      <label>Branch</label>

                      <p>{data.student.branch || "-"}</p>
                    </div>

                    <div>
                      <label>Semester</label>

                      <p>{data.student.semester || "-"}</p>
                    </div>

                    <div>
                      <label>Passing Year</label>

                      <p>{data.student.passingYear || "-"}</p>
                    </div>

                    <div>
                      <label>Status</label>

                      <p>
                        <span
                          className={
                            data.student.status === "ACTIVE"
                              ? "badge-success"
                              : "badge-danger"
                          }
                        >
                          {data.student.status}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Affiliate Partner */}

                  <hr className="my-5" />

                  <h5 className="section-title mb-3">Affiliate Partner</h5>

                  <div className="student-detail-box">
                    <div>
                      <label>Partner Name</label>
                      <p>
                        {data.affiliatePartner?.fullName || "Direct Admission"}
                      </p>
                    </div>

                    <div>
                      <label>Mobile Number</label>
                      <p>{data.affiliatePartner?.mobileNumber || "-"}</p>
                    </div>

                    <div>
                      <label>Email</label>
                      <p>{data.affiliatePartner?.email || "-"}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="mb-2 fw-semibold">Address</h6>

                    <div className="card-box">
                      <p className="mb-0">{data.student.address || "-"}</p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Course */}

                  <h5 className="section-title mb-3">Course Information</h5>

                  <div className="row g-4 mb-4">
                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Course Name</h6>
                        <h5>{data.course.name}</h5>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Course Type</h6>

                        <span className="course-type">{data.course.type}</span>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Duration</h6>
                        <h5>{data.course.durationMonths} Months</h5>
                      </div>
                    </div>
                  </div>

                  <div className="student-detail-box">
                    <div>
                      <label>Actual Fee</label>

                      <p>
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          data.course.actualPrice,
                        )}
                      </p>
                    </div>

                    <div>
                      <label>Offer Fee</label>

                      <p>
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          data.course.discountedPrice,
                        )}
                      </p>
                    </div>

                    <div>
                      <label>Registration Fee</label>

                      <p>
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          data.course.registrationFee,
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h6 className="fw-semibold mb-2">Description</h6>

                    <div className="card-box">
                      <p className="mb-0">{data.course.description || "-"}</p>
                    </div>
                  </div>

                  <hr className="my-5" />

                  {/* Fee */}

                  <h5 className="section-title mb-3">Fee Summary</h5>

                  <div className="row g-4 mb-5">
                    <div className="col-lg-3 col-md-6">
                      <div className="summary-card">
                        <h6>Total Fee</h6>

                        <h4>
                          ₹
                          {new Intl.NumberFormat("en-IN").format(
                            data.feeDetails.courseTotalFee,
                          )}
                        </h4>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="summary-card">
                        <h6>Registration</h6>

                        <h4>
                          ₹
                          {new Intl.NumberFormat("en-IN").format(
                            data.feeDetails.registrationFeeAmount,
                          )}
                        </h4>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="summary-card">
                        <h6>Total Paid</h6>

                        <h4 className="text-success">
                          ₹
                          {new Intl.NumberFormat("en-IN").format(
                            data.feeDetails.totalPaidAmount,
                          )}
                        </h4>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                      <div className="summary-card">
                        <h6>Remaining</h6>

                        <h4 className="text-danger">
                          ₹
                          {new Intl.NumberFormat("en-IN").format(
                            data.feeDetails.remainingAmount,
                          )}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Payments */}

                  {/* <h5 className="section-title mb-3">Payment History</h5> */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="mb-0">Payment History</h5>

                    <button
                      className="btn btn-success"
                      onClick={() => setShowPaymentModal(true)}
                    >
                      + Add Payment
                    </button>
                  </div>

                  {data.paymentHistory?.length ? (
                    <div className="table-responsive">
                      <table className="table student-table align-middle">
                        <thead>
                          <tr>
                            <th>#</th>

                            <th>Amount</th>

                            <th>Payment Type</th>

                            <th>Mode</th>

                            <th>Transaction ID</th>

                            <th>Date</th>
                          </tr>
                        </thead>

                        <tbody>
                          {data.paymentHistory.map((payment, index) => (
                            <tr key={payment._id}>
                              <td>{index + 1}</td>

                              <td className="fw-semibold text-success">
                                ₹
                                {new Intl.NumberFormat("en-IN").format(
                                  payment.amount,
                                )}
                              </td>

                              <td>
                                <span
                                  className={
                                    payment.paymentType === "REGISTRATION_FEE"
                                      ? "badge-warning"
                                      : "badge-success"
                                  }
                                >
                                  {payment.paymentType}
                                </span>
                              </td>

                              <td>{payment.paymentMode}</td>

                              <td className="text-muted">
                                {payment.transactionId || "-"}
                              </td>

                              <td>
                                {new Date(
                                  payment.paymentDate,
                                ).toLocaleDateString("en-IN")}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="alert alert-warning mb-0">
                      No payment history found.
                    </div>
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>
      <AddPaymentModal
        show={showPaymentModal}
        enrollmentId={enrollmentId}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={() => {
          setShowPaymentModal(false);
          loadEnrollment();
        }}
      />
    </div>
  );
}

export default EnrollmentViewModal;
