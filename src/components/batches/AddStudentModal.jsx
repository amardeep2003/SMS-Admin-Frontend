// import { useState } from "react";
// import toast from "react-hot-toast";

// import { addStudentToBatch, moveStudentToBatch } from "../../services/batchApi";

// function AddStudentModal({ show, batchId, onClose, onSuccess }) {
//   const [mobileNumber, setMobileNumber] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [confirmMove, setConfirmMove] = useState(false);

//   const [studentInfo, setStudentInfo] = useState(null);

//   if (!show) return null;

//   const resetModal = () => {
//     setMobileNumber("");
//     setConfirmMove(false);
//     setStudentInfo(null);
//     onClose();
//   };

//   const handleAddStudent = async () => {
//     if (!mobileNumber.trim()) {
//       return toast.error("Mobile Number is required");
//     }

//     try {
//       setLoading(true);

//       const res = await addStudentToBatch(batchId, {
//         mobileNumber,
//       });

//       toast.success(res.data.message);

//       resetModal();

//       onSuccess();
//     } catch (err) {
//       const data = err.response?.data;

//       if (data?.requiresConfirmation) {
//         setStudentInfo(data.data);

//         setConfirmMove(true);

//         return;
//       }

//       toast.error(data?.message || "Failed to add student");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMoveStudent = async () => {
//     try {
//       setLoading(true);

//       const res = await moveStudentToBatch(batchId, {
//         mobileNumber,
//         forceMove: true,
//       });

//       toast.success(res.data.message);

//       resetModal();

//       onSuccess();
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to move student");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="modal fade show d-block modal-bg">
//       <div className="modal-dialog modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-header">
//             <h4>{confirmMove ? "Move Student" : "Add Student To Batch"}</h4>

//             <button className="btn-close" onClick={resetModal}></button>
//           </div>

//           <div className="modal-body">
//             {!confirmMove ? (
//               <>
//                 <label className="form-label">Student Mobile Number</label>

//                 <input
//                   className="form-control"
//                   placeholder="Enter Mobile Number"
//                   value={mobileNumber}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                 />
//               </>
//             ) : (
//               <>
//                 <div className="alert alert-warning">
//                   Student is already assigned to another batch.
//                 </div>

//                 <table className="table table-bordered">
//                   <tbody>
//                     <tr>
//                       <th>Student</th>
//                       <td>{studentInfo?.studentName}</td>
//                     </tr>

//                     <tr>
//                       <th>Mobile</th>
//                       <td>{studentInfo?.mobileNumber}</td>
//                     </tr>

//                     <tr>
//                       <th>Course</th>
//                       <td>{studentInfo?.courseName}</td>
//                     </tr>

//                     <tr>
//                       <th>Current Batch</th>
//                       <td>{studentInfo?.currentBatchName}</td>
//                     </tr>

//                     <tr>
//                       <th>Target Batch</th>
//                       <td>{studentInfo?.targetBatchName}</td>
//                     </tr>
//                   </tbody>
//                 </table>

//                 <p className="text-danger mb-0">
//                   Do you want to move this student?
//                 </p>
//               </>
//             )}
//           </div>
//           <div className="modal-footer">
//             <button className="btn btn-secondary" onClick={resetModal}>
//               Cancel
//             </button>

//             {!confirmMove ? (
//               <button
//                 className="btn btn-primary"
//                 onClick={handleAddStudent}
//                 disabled={loading}
//               >
//                 {loading ? "Adding..." : "Add Student"}
//               </button>
//             ) : (
//               <button
//                 className="btn btn-danger"
//                 onClick={handleMoveStudent}
//                 disabled={loading}
//               >
//                 {loading ? "Moving..." : "Move Student"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddStudentModal;

import { useState } from "react";
import toast from "react-hot-toast";
import { FaUserPlus, FaExchangeAlt } from "react-icons/fa";

import { addStudentToBatch, moveStudentToBatch } from "../../services/batchApi";

function AddStudentModal({ show, batchId, onClose, onSuccess }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirmMove, setConfirmMove] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  if (!show) return null;

  const resetModal = () => {
    setMobileNumber("");
    setConfirmMove(false);
    setStudentInfo(null);
    onClose();
  };

  const handleAddStudent = async () => {
    if (!mobileNumber.trim()) {
      return toast.error("Mobile Number is required");
    }

    try {
      setLoading(true);

      const res = await addStudentToBatch(batchId, {
        mobileNumber,
      });

      toast.success(res.data.message);

      resetModal();

      onSuccess();
    } catch (err) {
      const data = err.response?.data;

      if (data?.requiresConfirmation) {
        setStudentInfo(data.data);

        setConfirmMove(true);

        return;
      }

      toast.error(data?.message || "Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  const handleMoveStudent = async () => {
    try {
      setLoading(true);

      const res = await moveStudentToBatch(batchId, {
        mobileNumber,
        forceMove: true,
      });

      toast.success(res.data.message);

      resetModal();

      onSuccess();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to move student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade show d-block course-modal-bg">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content course-modal">
          {/* Header */}

          <div className="course-header">
            <div>
              <h3>{confirmMove ? "Move Student" : "Add Student"}</h3>

              <p>
                {confirmMove
                  ? "Move student to another batch"
                  : "Add a student using mobile number"}
              </p>
            </div>

            <button className="btn-close" onClick={resetModal} />
          </div>

          {/* Body */}

          <div className="modal-body p-4">
            {!confirmMove ? (
              <>
                <div className="text-center mb-4">
                  <div className="delete-course-icon">
                    <FaUserPlus />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Student Mobile Number</label>

                  <input
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="text-center mb-4">
                  <div className="delete-course-icon">
                    <FaExchangeAlt />
                  </div>
                </div>

                <div className="alert alert-warning">
                  <strong>Student already exists in another batch.</strong>
                  <br />
                  Review the details below before moving.
                </div>

                <div className="student-detail-box">
                  <div>
                    <label>Student</label>
                    <p>{studentInfo?.studentName}</p>
                  </div>

                  <div>
                    <label>Mobile</label>
                    <p>{studentInfo?.mobileNumber}</p>
                  </div>

                  <div>
                    <label>Course</label>
                    <p>{studentInfo?.courseName}</p>
                  </div>

                  <div>
                    <label>Current Batch</label>
                    <p>{studentInfo?.currentBatchName}</p>
                  </div>

                  <div>
                    <label>Target Batch</label>
                    <p>{studentInfo?.targetBatchName}</p>
                  </div>
                </div>

                <div className="alert alert-danger mt-4 mb-0">
                  Moving the student will remove them from the current batch and
                  assign them to the selected batch.
                </div>
              </>
            )}
          </div>

          {/* Footer */}

          <div className="modal-footer">
            <button
              className="theme-outline-btn"
              onClick={resetModal}
              disabled={loading}
            >
              Cancel
            </button>

            {!confirmMove ? (
              <button
                className="theme-btn"
                onClick={handleAddStudent}
                disabled={loading}
              >
                {loading ? "Adding..." : "Add Student"}
              </button>
            ) : (
              <button
                className="theme-danger-btn"
                onClick={handleMoveStudent}
                disabled={loading}
              >
                {loading ? "Moving..." : "Move Student"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudentModal;
