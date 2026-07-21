// import { FaUserTie } from "react-icons/fa";

// function EnrollmentTable({ enrollments, onAssignAffiliate }) {
//   if (!enrollments.length) {
//     return (
//       <div className="empty-state">
//         <div className="empty-icon">🎓</div>

//         <h4>No Enrollments Found</h4>

//         <p>No enrollment records available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="card-box">
//       <div className="table-responsive">
//         <table className="table align-middle">
//           <thead>
//             <tr>
//               <th>Student</th>

//               <th>Mobile</th>

//               <th>Course</th>

//               <th>Type</th>

//               <th>Total Fee</th>

//               <th>Paid</th>

//               <th>Remaining</th>

//               <th>Payment</th>

//               <th>Status</th>

//               <th>Enrollment Date</th>

//               <th width="150">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {enrollments.map((item) => (
//               <tr key={item._id}>
//                 {/* Student */}

//                 <td>
//                   <strong>{item.studentName}</strong>
//                 </td>

//                 {/* Mobile */}

//                 <td>{item.mobileNumber}</td>

//                 {/* Course */}

//                 <td>{item.courseName}</td>

//                 {/* Type */}

//                 <td>
//                   <span
//                     className={
//                       item.courseType === "LT"
//                         ? "badge badge-primary"
//                         : "badge badge-warning"
//                     }
//                   >
//                     {item.courseType}
//                   </span>
//                 </td>

//                 {/* Total */}

//                 <td>₹{item.totalFee}</td>

//                 {/* Paid */}

//                 <td>₹{item.totalPaid}</td>

//                 {/* Remaining */}

//                 <td>₹{item.remainingAmount}</td>

//                 {/* Payment */}

//                 <td>
//                   <span
//                     className={
//                       item.paymentStatus === "PAID"
//                         ? "badge-active"
//                         : item.paymentStatus === "PARTIALLY_PAID"
//                           ? "badge-warning"
//                           : "badge-inactive"
//                     }
//                   >
//                     {item.paymentStatus}
//                   </span>
//                 </td>

//                 {/* Status */}

//                 <td>
//                   <span
//                     className={
//                       item.status === "ACTIVE"
//                         ? "badge-active"
//                         : "badge-inactive"
//                     }
//                   >
//                     {item.status}
//                   </span>
//                 </td>

//                 {/* Date */}

//                 <td>{new Date(item.enrollmentDate).toLocaleDateString()}</td>

//                 {/* Action */}

//                 <td>
//                   <button
//                     className="action-btn add-btn"
//                     title="Assign Affiliate"
//                     onClick={() => onAssignAffiliate(item)}
//                   >
//                     <FaUserTie />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentTable;


import { FaUserTie } from "react-icons/fa";

function EnrollmentTable({
  enrollments,
  onAssignAffiliate,
}) {
  if (!enrollments.length) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📚</div>

        <h4>No Enrollments Found</h4>

        <p>No enrollment records available.</p>
      </div>
    );
  }

  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Student</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Type</th>
              <th>Total Fee</th>
              <th>Paid</th>
              <th>Remaining</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th width="120">Action</th>
            </tr>
          </thead>

          <tbody>
            {enrollments.map((item) => (
              <tr key={item._id}>
                <td>
                  <strong>{item.studentName}</strong>
                </td>

                <td>{item.mobileNumber}</td>

                <td>{item.courseName}</td>

                <td>
                  <span
                    className={
                      item.courseType === "LT"
                        ? "badge badge-primary"
                        : "badge badge-warning"
                    }
                  >
                    {item.courseType}
                  </span>
                </td>

                <td>₹{item.totalFee}</td>

                <td className="text-success">
                  ₹{item.totalPaid}
                </td>

                <td className="text-danger">
                  ₹{item.remainingAmount}
                </td>

                <td>
                  <span
                    className={
                      item.paymentStatus === "PAID"
                        ? "badge bg-success"
                        : item.paymentStatus ===
                          "PARTIALLY_PAID"
                        ? "badge bg-warning text-dark"
                        : "badge bg-danger"
                    }
                  >
                    {item.paymentStatus}
                  </span>
                </td>

                <td>
                  <span
                    className={
                      item.status === "ACTIVE"
                        ? "badge bg-success"
                        : "badge bg-secondary"
                    }
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  {new Date(
                    item.enrollmentDate
                  ).toLocaleDateString()}
                </td>

                <td>
                  <button
                    className="action-btn add-btn"
                    title="Assign Affiliate"
                    onClick={() =>
                      onAssignAffiliate(item)
                    }
                  >
                    <FaUserTie />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollmentTable;