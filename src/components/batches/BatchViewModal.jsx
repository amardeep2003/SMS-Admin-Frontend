// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import { getBatchById } from "../../services/batchApi";

// function BatchViewModal({ batchId, onClose }) {
//   const [loading, setLoading] = useState(false);

//   const [batch, setBatch] = useState(null);

//   useEffect(() => {
//     if (batchId) {
//       loadBatch();
//     }
//   }, [batchId]);

//   const loadBatch = async () => {
//     try {
//       setLoading(true);

//       const res = await getBatchById(batchId);

//       setBatch(res.data.data);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to load batch");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!batchId) return null;

//   return (
//     // <div className="modal fade show d-block modal-bg">
//     <div className="modal fade show d-block student-modal-bg">
//       <div className="modal-dialog modal-xl">
//         {/* <div className="modal-content"> */}
//         <div className="modal-content student-modal">
//           {/* <div className="modal-header">
//             <h4>Batch Details</h4>

//             <button className="btn-close" onClick={onClose} />
//           </div> */}

//           <div className="student-header">
//             <div>
//               <h3>{batch?.name || "Batch Details"}</h3>
//               <p>Batch Information</p>
//             </div>

//             <button className="btn-close" onClick={onClose}></button>
//           </div>

//           <div className="modal-body p-4">
//             {loading ? (
//               // <div className="text-center py-5">Loading...</div>
//               <div className="text-center py-5">
//                 <div className="spinner-border text-success"></div>

//                 <p>Loading batch details...</p>
//               </div>
//             ) : (
//               batch && (
//                 <>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <strong>Batch Name</strong>

//                       <p>{batch.name}</p>
//                     </div>

//                     <div className="col-md-6 mb-3">
//                       <strong>Course</strong>

//                       <p>{batch.course?.name || "-"}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Course Type</strong>

//                       <p>{batch.courseType}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Mode</strong>

//                       <p>{batch.mode || "-"}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Status</strong>

//                       <p>{batch.status}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Capacity</strong>

//                       <p>{batch.capacity}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Enrolled Students</strong>

//                       <p>{batch.enrolledStudents}</p>
//                     </div>

//                     <div className="col-md-4 mb-3">
//                       <strong>Trainer</strong>

//                       <p>{batch.trainer?.name || "Not Assigned"}</p>
//                     </div>

//                     <div className="col-md-6 mb-3">
//                       <strong>Start Date</strong>

//                       <p>
//                         {batch.startDate
//                           ? new Date(batch.startDate).toLocaleDateString(
//                               "en-IN",
//                             )
//                           : "-"}
//                       </p>
//                     </div>

//                     <div className="col-md-6 mb-3">
//                       <strong>End Date</strong>

//                       <p>
//                         {batch.endDate
//                           ? new Date(batch.endDate).toLocaleDateString("en-IN")
//                           : "-"}
//                       </p>
//                     </div>

//                     <div className="col-md-12 mb-3">
//                       <strong>Created At</strong>

//                       <p>{new Date(batch.createdAt).toLocaleString("en-IN")}</p>
//                     </div>
//                   </div>

//                   <hr />

//                   <h5 className="mb-3">
//                     Students ({batch.students?.length || 0})
//                   </h5>

//                   {batch.students?.length ? (
//                     <div className="table-responsive">
//                       <table className="table table-bordered align-middle">
//                         <thead>
//                           <tr>
//                             <th>#</th>
//                             <th>Name</th>
//                             <th>Mobile</th>
//                             <th>Institute</th>
//                             <th>Address</th>
//                             <th>Status</th>
//                           </tr>
//                         </thead>

//                         <tbody>
//                           {batch.students.map((student, index) => (
//                             <tr key={student._id}>
//                               <td>{index + 1}</td>

//                               <td>{student.fullName}</td>

//                               <td>{student.mobileNumber}</td>

//                               <td>{student.instituteName}</td>

//                               <td>{student.address}</td>

//                               <td>{student.status}</td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   ) : (
//                     <div className="alert alert-warning mb-0">
//                       No students enrolled in this batch.
//                     </div>
//                   )}
//                 </>
//               )
//             )}
//           </div>

//           <div className="modal-footer">
//             <button className="btn btn-secondary" onClick={onClose}>
//               Close
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BatchViewModal;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getBatchById } from "../../services/batchApi";

import RemoveStudentModal from "./RemoveStudentModal";


function BatchViewModal({ batchId, onClose }) {
  const [batch, setBatch] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showRemove, setShowRemove] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);

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
    <div className="modal fade show d-block student-modal-bg">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content student-modal">
          {/* Header */}

          <div className="student-header">
            <div>
              <h3>{batch?.name || "Batch Details"}</h3>
              <p>Batch Information</p>
            </div>

            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-success"></div>

                <p className="mt-3">Loading batch details...</p>
              </div>
            ) : (
              batch && (
                <>
                  {/* Top Cards */}

                  <div className="row g-4 mb-4">
                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Batch Name</h6>

                        <h5>{batch.name}</h5>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Course</h6>

                        <h5>{batch.course?.name || "-"}</h5>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="info-card">
                        <h6>Status</h6>

                        <span
                          className={
                            batch.status === "ACTIVE"
                              ? "badge-success"
                              : batch.status === "COMPLETED"
                                ? "badge-warning"
                                : "badge-danger"
                          }
                        >
                          {batch.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details */}

                  <div className="student-detail-box">
                    <div>
                      <label>Course Type</label>

                      <p>{batch.courseType}</p>
                    </div>

                    <div>
                      <label>Mode</label>

                      <p>{batch.mode || "-"}</p>
                    </div>

                    <div>
                      <label>Capacity</label>

                      <p>{batch.capacity}</p>
                    </div>

                    <div>
                      <label>Students</label>

                      <p>{batch.enrolledStudents}</p>
                    </div>

                    <div>
                      <label>Trainer</label>

                      <p>{batch.trainer?.name || "Not Assigned"}</p>
                    </div>

                    <div>
                      <label>Start Date</label>

                      <p>
                        {batch.startDate
                          ? new Date(batch.startDate).toLocaleDateString(
                              "en-IN",
                            )
                          : "-"}
                      </p>
                    </div>

                    <div>
                      <label>End Date</label>

                      <p>
                        {batch.endDate
                          ? new Date(batch.endDate).toLocaleDateString("en-IN")
                          : "-"}
                      </p>
                    </div>

                    <div>
                      <label>Created Date</label>

                      <p>
                        {new Date(batch.createdAt).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  </div>

                  <hr />

                  {/* Students */}

                  <h5 className="section-title">
                    Enrolled Students ({batch.students?.length || 0})
                  </h5>

                  {batch.students?.length ? (
                    <div className="table-responsive">
                      <table className="table student-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Institute</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th width="140">Actions</th>
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

                              <td>
                                <span
                                  className={
                                    student.status === "ACTIVE"
                                      ? "badge-success"
                                      : "badge-danger"
                                  }
                                >
                                  {student.status}
                                </span>
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => {
                                    setSelectedStudent(student);
                                    setShowRemove(true);
                                  }}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="alert alert-warning">
                      No students enrolled in this batch.
                    </div>
                  )}
                </>
              )
            )}
          </div>
        </div>
      </div>
      <RemoveStudentModal
        show={showRemove}
        batchId={batchId}
        student={selectedStudent}
        onClose={() => {
          setShowRemove(false);
          setSelectedStudent(null);
        }}
        onSuccess={async () => {
          await loadBatch();
        }}
      />
    </div>
  );
}

export default BatchViewModal;
