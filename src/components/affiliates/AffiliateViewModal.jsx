// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import { getAffiliateById } from "../../services/affiliateApi";

// function AffiliateViewModal({ affiliateId, onClose }) {
//     const [loading, setLoading] = useState(true);

//     const [data, setData] = useState(null);

//     const currentYear = new Date().getFullYear();

//     useEffect(() => {
//         if (!affiliateId) return;

//         loadAffiliate();
//     }, [affiliateId]);

//     const loadAffiliate = async () => {
//         try {
//             setLoading(true);

//             const res = await getAffiliateById(affiliateId, {
//                 year: currentYear,
//             });

//             setData(res.data.data);
//         } catch (err) {
//             toast.error(
//                 err.response?.data?.message ||
//                 "Failed to load affiliate details"
//             );
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (!affiliateId) return null;

//     return (
//         <div className="modal fade show d-block modal-bg">
//             <div
//                 className="modal-dialog modal-xl modal-dialog-scrollable"
//             >
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h4>Affiliate Details</h4>

//                         <button
//                             className="btn-close"
//                             onClick={onClose}
//                         />
//                     </div>

//                     <div className="modal-body">

//                         {loading ? (
//                             <div className="text-center py-5">
//                                 Loading...
//                             </div>
//                         ) : (
//                             <>
//                                 {/* Affiliate */}

//                                 <div className="card mb-4">

//                                     <div className="card-header">
//                                         <strong>Affiliate Information</strong>
//                                     </div>

//                                     <div className="card-body">

//                                         <div className="row">

//                                             <div className="col-md-6 mb-3">
//                                                 <strong>Name</strong>

//                                                 <p>{data.affiliate.fullName}</p>
//                                             </div>

//                                             <div className="col-md-6 mb-3">
//                                                 <strong>Mobile</strong>

//                                                 <p>{data.affiliate.mobileNumber}</p>
//                                             </div>

//                                             <div className="col-md-6 mb-3">
//                                                 <strong>Email</strong>

//                                                 <p>{data.affiliate.email}</p>
//                                             </div>

//                                             <div className="col-md-6 mb-3">
//                                                 <strong>Status</strong>

//                                                 <p>{data.affiliate.status}</p>
//                                             </div>

//                                             <div className="col-12">
//                                                 <strong>Address</strong>

//                                                 <p>{data.affiliate.address}</p>
//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                                 {/* Summary */}

//                                 <div className="card mb-4">

//                                     <div className="card-header">
//                                         <strong>Summary</strong>
//                                     </div>

//                                     <div className="card-body">

//                                         <div className="row">

//                                             <div className="col-md-4">
//                                                 <strong>Year</strong>

//                                                 <p>{data.summary.year}</p>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <strong>Total Courses</strong>

//                                                 <p>{data.summary.totalCourseSold}</p>
//                                             </div>

//                                             <div className="col-md-4">
//                                                 <strong>Total Revenue</strong>

//                                                 <p>
//                                                     ₹
//                                                     {new Intl.NumberFormat(
//                                                         "en-IN"
//                                                     ).format(
//                                                         data.summary.totalRevenue
//                                                     )}
//                                                 </p>
//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                                 {/* Courses */}

//                                 <div className="card">

//                                     <div className="card-header">
//                                         <strong>Courses Sold</strong>
//                                     </div>

//                                     <div className="card-body p-0">

//                                         <div className="table-responsive">

//                                             <table className="table table-bordered mb-0">

//                                                 <thead>

//                                                     <tr>
//                                                         <th>Student</th>

//                                                         <th>Course</th>

//                                                         <th>Type</th>

//                                                         <th>Selling Price</th>

//                                                         <th>Paid</th>

//                                                         <th>Remaining</th>

//                                                         <th>Status</th>
//                                                     </tr>

//                                                 </thead>

//                                                 <tbody>

//                                                     {data.courses.length ? (
//                                                         data.courses.map((course) => (
//                                                             <tr
//                                                                 key={course.enrollmentId}
//                                                             >
//                                                                 <td>
//                                                                     {course.studentName}
//                                                                 </td>

//                                                                 <td>
//                                                                     {course.courseName}
//                                                                 </td>

//                                                                 <td>
//                                                                     {course.courseType}
//                                                                 </td>

//                                                                 <td>
//                                                                     ₹{course.sellingPrice}
//                                                                 </td>

//                                                                 <td>
//                                                                     ₹
//                                                                     {
//                                                                         course.totalPaidAmount
//                                                                     }
//                                                                 </td>

//                                                                 <td>
//                                                                     ₹
//                                                                     {
//                                                                         course.remainingAmount
//                                                                     }
//                                                                 </td>

//                                                                 <td>
//                                                                     {
//                                                                         course.paymentStatus
//                                                                     }
//                                                                 </td>
//                                                             </tr>
//                                                         ))
//                                                     ) : (
//                                                         <tr>
//                                                             <td
//                                                                 colSpan="7"
//                                                                 className="text-center py-4"
//                                                             >
//                                                                 No Course Sold
//                                                             </td>
//                                                         </tr>
//                                                     )}

//                                                 </tbody>

//                                             </table>

//                                         </div>

//                                     </div>

//                                 </div>
//                             </>
//                         )}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AffiliateViewModal;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAffiliateById } from "../../services/affiliateApi";

function AffiliateViewModal({ affiliateId, onClose }) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (!affiliateId) return;

    loadAffiliate();
  }, [affiliateId]);

  const loadAffiliate = async () => {
    try {
      setLoading(true);

      const res = await getAffiliateById(affiliateId, {
        year: currentYear,
      });

      setData(res.data.data);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to load affiliate details",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!affiliateId) return null;

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content student-modal">
          {/* Header */}

          <div className="student-header">
            <div>
              <h3>{data?.affiliate?.fullName || "Affiliate Details"}</h3>
              <p>Affiliate Partner Information</p>
            </div>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p className="mt-3">Loading affiliate details...</p>
              </div>
            ) : (
              <>
                {/* Top Info */}

                <div className="row g-4 mb-4">
                  <div className="col-md-3">
                    <div className="info-card">
                      <h6>Affiliate Name</h6>
                      <h5>{data.affiliate.fullName}</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="info-card">
                      <h6>Mobile</h6>
                      <h5>{data.affiliate.mobileNumber}</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="info-card">
                      <h6>Total Courses</h6>
                      <h5>{data.summary.totalCourseSold}</h5>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="info-card">
                      <h6>Total Revenue</h6>
                      <h5>
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          data.summary.totalRevenue,
                        )}
                      </h5>
                    </div>
                  </div>
                </div>

                {/* Details */}

                <div className="student-detail-box">
                  <div>
                    <label>Email</label>
                    <p>{data.affiliate.email || "-"}</p>
                  </div>

                  <div>
                    <label>Status</label>

                    <span
                      className={
                        data.affiliate.status === "ACTIVE"
                          ? "badge-success"
                          : "badge-danger"
                      }
                    >
                      {data.affiliate.status}
                    </span>
                  </div>

                  <div>
                    <label>Year</label>
                    <p>{data.summary.year}</p>
                  </div>

                  <div>
                    <label>Address</label>
                    <p>{data.affiliate.address || "-"}</p>
                  </div>
                </div>

                <hr />

                <h5 className="section-title">Courses Sold</h5>

                {data.courses.length ? (
                  <div className="table-responsive">
                    <table className="table student-table">
                      <thead>
                        <tr>
                          <th>Student</th>
                          <th>Course</th>
                          <th>Type</th>
                          <th>Selling Price</th>
                          <th>Paid</th>
                          <th>Remaining</th>
                          <th>Payment</th>
                        </tr>
                      </thead>

                      <tbody>
                        {data.courses.map((course) => (
                          <tr key={course.enrollmentId}>
                            <td>{course.studentName}</td>

                            <td>{course.courseName}</td>

                            <td>
                              <span
                                className={
                                  course.courseType === "LT"
                                    ? "course-type lt"
                                    : "course-type vt"
                                }
                              >
                                {course.courseType}
                              </span>
                            </td>

                            <td>
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                course.sellingPrice,
                              )}
                            </td>

                            <td className="text-success fw-semibold">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                course.totalPaidAmount,
                              )}
                            </td>

                            <td className="text-danger fw-semibold">
                              ₹
                              {new Intl.NumberFormat("en-IN").format(
                                course.remainingAmount,
                              )}
                            </td>

                            <td>
                              <span
                                className={
                                  course.paymentStatus === "PAID"
                                    ? "badge-success"
                                    : course.paymentStatus === "PARTIALLY_PAID"
                                      ? "badge-warning"
                                      : "badge-danger"
                                }
                              >
                                {course.paymentStatus}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="alert alert-warning">No Course Sold Yet</div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AffiliateViewModal;
