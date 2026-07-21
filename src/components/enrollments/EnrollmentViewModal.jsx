import { useEffect, useState } from "react";
import { getEnrollmentById } from "../../services/enrollmentApi";

function EnrollmentViewModal({ show, enrollmentId, onClose }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!show || !enrollmentId) return;

    const load = async () => {
      try {
        setLoading(true);

        const res = await getEnrollmentById(enrollmentId);

        setData(res.data.data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [show, enrollmentId]);

  if (!show) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Enrollment Details</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <div className="row">
                <div className="col-md-6 mb-3">
                  <strong>Student</strong>
                  <br />
                  {data.studentName}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Mobile</strong>
                  <br />
                  {data.mobileNumber}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Course</strong>
                  <br />
                  {data.courseName}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Course Type</strong>
                  <br />
                  {data.courseType}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Total Fee</strong>
                  <br />₹{data.totalFee}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Total Paid</strong>
                  <br />₹{data.totalPaid}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Remaining</strong>
                  <br />₹{data.remainingAmount}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Payment Status</strong>
                  <br />
                  {data.paymentStatus}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Status</strong>
                  <br />
                  {data.status}
                </div>

                <div className="col-md-6 mb-3">
                  <strong>Enrollment Date</strong>
                  <br />
                  {new Date(data.enrollmentDate).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrollmentViewModal;
