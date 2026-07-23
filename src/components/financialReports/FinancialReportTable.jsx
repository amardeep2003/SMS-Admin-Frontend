// import { FaEye } from "react-icons/fa";

// function FinancialReportTable({ reports, onView }) {
//   if (!reports.length) {
//     return (
//       <div className="empty-state">
//         <div className="empty-icon">📊</div>

//         <h4>No Financial Reports Found</h4>

//         <p>No financial records available.</p>
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
//               <th>Courses</th>
//               <th>Total Fee</th>
//               <th>Paid</th>
//               <th>Remaining</th>
//               <th>Payment</th>
//               <th width="100">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {reports.map((item) => (
//               <tr key={item._id}>
//                 <td>
//                   <strong>{item.studentName}</strong>
//                 </td>

//                 <td>{item.contact}</td>

//                 <td>
//                   <span className="badge bg-primary">
//                     {item.enrolledCoursesCount}
//                   </span>
//                 </td>

//                 <td>₹{new Intl.NumberFormat("en-IN").format(item.totalFee)}</td>

//                 <td className="text-success fw-bold">
//                   ₹{new Intl.NumberFormat("en-IN").format(item.totalPaid)}
//                 </td>

//                 <td className="text-danger fw-bold">
//                   ₹{new Intl.NumberFormat("en-IN").format(item.totalRemaining)}
//                 </td>

//                 <td>
//                   <span
//                     className={
//                       item.paymentStatus === "PAID"
//                         ? "badge bg-success"
//                         : item.paymentStatus === "PARTIALLY_PAID"
//                           ? "badge bg-warning text-dark"
//                           : "badge bg-danger"
//                     }
//                   >
//                     {item.paymentStatus}
//                   </span>
//                 </td>

//                 <td>
//                   <button
//                     className="action-btn view-btn"
//                     title="View Report"
//                     onClick={() => onView(item._id)}
//                   >
//                     <FaEye />
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

// export default FinancialReportTable;

import { FaEye } from "react-icons/fa";

function FinancialReportTable({ reports, onView }) {
  if (!reports.length) {
    return (
      <div className="card-box text-center py-5">
        <h4>No Financial Reports Found</h4>

        <p className="mb-0">No student financial records available.</p>
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

              <th>Courses</th>

              <th>Total Fee</th>

              <th>Paid</th>

              <th>Remaining</th>

              <th>Payment Status</th>

              <th width="100">Action</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((item) => (
              <tr key={item._id}>
                <td>
                  <strong>{item.studentName}</strong>
                </td>

                <td>{item.contact}</td>

                <td>
                  <span className="badge bg-primary">
                    {item.enrolledCoursesCount}
                  </span>
                </td>

                <td>₹{new Intl.NumberFormat("en-IN").format(item.totalFee)}</td>

                <td className="text-success fw-bold">
                  ₹{new Intl.NumberFormat("en-IN").format(item.totalPaid)}
                </td>

                <td className="text-danger fw-bold">
                  ₹{new Intl.NumberFormat("en-IN").format(item.totalRemaining)}
                </td>

                <td>
                  <span
                    className={
                      item.paymentStatus === "PAID"
                        ? "badge bg-success"
                        : item.paymentStatus === "PARTIALLY_PAID"
                          ? "badge bg-warning text-dark"
                          : "badge bg-danger"
                    }
                  >
                    {item.paymentStatus}
                  </span>
                </td>

                <td>
                  <button
                    type="button"
                    className="action-btn view-btn"
                    title="View Details"
                    onClick={() => onView(item._id)}
                  >
                    <FaEye />
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

export default FinancialReportTable;
