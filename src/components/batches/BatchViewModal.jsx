import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getBatchById } from "../../services/batchApi";

function BatchViewModal({ batchId, onClose }) {
  const [loading, setLoading] = useState(false);

  const [batch, setBatch] = useState(null);

  useEffect(() => {
    if (batchId) {
      loadBatch();
    }
  }, [batchId]);

  const loadBatch = async () => {
    try {
      setLoading(true);

      const res = await getBatchById(batchId);

      setBatch(res.data.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load batch");
    } finally {
      setLoading(false);
    }
  };

  if (!batchId) return null;

  return (
    <div className="modal fade show d-block modal-bg">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Batch Details</h4>

            <button className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            {loading ? (
              <div className="text-center py-5">Loading...</div>
            ) : (
              batch && (
                <>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <strong>Batch Name</strong>

                      <p>{batch.name}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>Course</strong>

                      <p>{batch.course?.name || "-"}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Course Type</strong>

                      <p>{batch.courseType}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Mode</strong>

                      <p>{batch.mode || "-"}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Status</strong>

                      <p>{batch.status}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Capacity</strong>

                      <p>{batch.capacity}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Enrolled Students</strong>

                      <p>{batch.enrolledStudents}</p>
                    </div>

                    <div className="col-md-4 mb-3">
                      <strong>Trainer</strong>

                      <p>{batch.trainer?.name || "Not Assigned"}</p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>Start Date</strong>

                      <p>
                        {batch.startDate
                          ? new Date(batch.startDate).toLocaleDateString(
                              "en-IN",
                            )
                          : "-"}
                      </p>
                    </div>

                    <div className="col-md-6 mb-3">
                      <strong>End Date</strong>

                      <p>
                        {batch.endDate
                          ? new Date(batch.endDate).toLocaleDateString("en-IN")
                          : "-"}
                      </p>
                    </div>

                    <div className="col-md-12 mb-3">
                      <strong>Created At</strong>

                      <p>{new Date(batch.createdAt).toLocaleString("en-IN")}</p>
                    </div>
                  </div>

                  <hr />

                  <h5 className="mb-3">
                    Students ({batch.students?.length || 0})
                  </h5>

                  {batch.students?.length ? (
                    <div className="table-responsive">
                      <table className="table table-bordered align-middle">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Institute</th>
                            <th>Address</th>
                            <th>Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {batch.students.map((student, index) => (
                            <tr key={student._id}>
                              <td>{index + 1}</td>

                              <td>{student.fullName}</td>

                              <td>{student.mobileNumber}</td>

                              <td>{student.instituteName}</td>

                              <td>{student.address}</td>

                              <td>{student.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="alert alert-warning mb-0">
                      No students enrolled in this batch.
                    </div>
                  )}
                </>
              )
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchViewModal;
