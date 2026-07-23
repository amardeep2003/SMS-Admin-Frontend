import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getStudentFinancialReport } from "../../services/financialReportApi";

function FinancialReportViewModal({ studentId, onClose }) {
  const [loading, setLoading] = useState(true);

  const [report, setReport] = useState(null);

  useEffect(() => {
    if (studentId) {
      loadReport();
    }
  }, [studentId]);

  const loadReport = async () => {
    try {
      setLoading(true);

      const res = await getStudentFinancialReport(studentId);

      setReport(res.data.data);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to load financial report",
      );
    } finally {
      setLoading(false);
    }
  };

  if (!studentId) return null;

  return (
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content student-modal">
          {/* Header */}

          <div className="student-header">
            <div>
              <h3>Student Financial Report</h3>

              <p>Financial summary of enrolled courses</p>
            </div>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p className="mt-3">Loading Financial Report...</p>
              </div>
            ) : (
              report && (
                <>
                  {/* Student Information */}

                  <div className="row g-4 mb-4">
                    <div className="col-md-3">
                      <div className="info-card">
                        <h6>Student Name</h6>

                        <h5>{report.student.fullName}</h5>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="info-card">
                        <h6>Mobile Number</h6>

                        <h5>{report.student.mobileNumber}</h5>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="info-card">
                        <h6>Institute</h6>

                        <h5>{report.student.instituteName}</h5>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="info-card">
                        <h6>Status</h6>

                        <span
                          className={
                            report.student.status === "ACTIVE"
                              ? "badge bg-success"
                              : "badge bg-danger"
                          }
                        >
                          {report.student.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}

                  <div className="row g-4 mb-4">
                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Total Enrollments</h6>

                        <h3>{report.enrollments.length}</h3>
                      </div>
                    </div>

                    {/* <div className="col-md-4">
                      <div className="info-card">
                        <h6>Student ID</h6>

                        <h5>{report.student.id}</h5>
                      </div>
                    </div> */}

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Financial Records</h6>

                        <h5>
                          {report.enrollments.length} Course
                          {report.enrollments.length > 1 ? "s" : ""}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <h5 className="section-title">Enrollments</h5>

                  {report.enrollments.map((item, index) => (
                    <div
                      key={item.enrollmentId}
                      className="card shadow-sm border-0 mb-4"
                    >
                      <div className="card-header bg-light d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Enrollment #{index + 1}</h5>

                        <span
                          className={
                            item.financialBreakdown.paymentStatus === "PAID"
                              ? "badge bg-success"
                              : item.financialBreakdown.paymentStatus ===
                                  "PARTIALLY_PAID"
                                ? "badge bg-warning text-dark"
                                : "badge bg-danger"
                          }
                        >
                          {item.financialBreakdown.paymentStatus}
                        </span>
                      </div>

                      <div className="card-body">
                        {/* Course & Batch */}

                        <div className="row mb-4">
                          <div className="col-md-6">
                            <div className="info-card h-100">
                              <h6>Course Details</h6>

                              <p>
                                <strong>Name :</strong> {item.course.name}
                              </p>

                              <p>
                                <strong>Type :</strong> {item.course.type}
                              </p>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="info-card h-100">
                              <h6>Batch Details</h6>

                              <p>
                                <strong>Name :</strong>{" "}
                                {item.batch?.name || "-"}
                              </p>

                              <p>
                                <strong>Mode :</strong>{" "}
                                {item.batch?.mode || "-"}
                              </p>

                              <p>
                                <strong>Status :</strong>{" "}
                                {item.batch?.status || "-"}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Financial Breakdown */}

                        <div className="row g-3 mb-4">
                          <div className="col-md-3">
                            <div className="info-card">
                              <h6>Total Fee</h6>

                              <h5>
                                ₹
                                {new Intl.NumberFormat("en-IN").format(
                                  item.financialBreakdown.courseTotalFee,
                                )}
                              </h5>
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="info-card">
                              <h6>Registration Fee</h6>

                              <h5>
                                ₹
                                {new Intl.NumberFormat("en-IN").format(
                                  item.financialBreakdown.registrationFeeAmount,
                                )}
                              </h5>
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="info-card">
                              <h6>Paid Amount</h6>

                              <h5 className="text-success">
                                ₹
                                {new Intl.NumberFormat("en-IN").format(
                                  item.financialBreakdown.totalPaidAmount,
                                )}
                              </h5>
                            </div>
                          </div>

                          <div className="col-md-3">
                            <div className="info-card">
                              <h6>Remaining</h6>

                              <h5 className="text-danger">
                                ₹
                                {new Intl.NumberFormat("en-IN").format(
                                  item.financialBreakdown.remainingAmount,
                                )}
                              </h5>
                            </div>
                          </div>
                        </div>

                        <h6 className="mb-3">Payment History</h6>

                        {item.paymentHistory?.length ? (
                          <div className="table-responsive">
                            <table className="table table-bordered align-middle">
                              <thead className="table-light">
                                <tr>
                                  <th>#</th>
                                  <th>Amount</th>
                                  <th>Type</th>
                                  <th>Mode</th>
                                  <th>Transaction ID</th>
                                  <th>Payment Date</th>
                                  <th>Note</th>
                                </tr>
                              </thead>

                              <tbody>
                                {item.paymentHistory.map(
                                  (payment, paymentIndex) => (
                                    <tr key={payment._id}>
                                      <td>{paymentIndex + 1}</td>

                                      <td className="fw-bold text-success">
                                        ₹
                                        {new Intl.NumberFormat("en-IN").format(
                                          payment.amount,
                                        )}
                                      </td>

                                      <td>
                                        <span className="badge bg-primary">
                                          {payment.paymentType}
                                        </span>
                                      </td>

                                      <td>{payment.paymentMode}</td>

                                      <td>{payment.transactionId || "-"}</td>

                                      <td>
                                        {payment.paymentDate
                                          ? new Date(
                                              payment.paymentDate,
                                            ).toLocaleString("en-IN")
                                          : "-"}
                                      </td>

                                      <td>{payment.note || "-"}</td>
                                    </tr>
                                  ),
                                )}
                              </tbody>
                            </table>
                          </div>
                        ) : (
                          <div className="alert alert-warning">
                            No payment history found.
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinancialReportViewModal;
