// function EnrollmentSkeleton() {
//   return (
//     <div className="card-box">
//       <div className="table-responsive">
//         <table className="table">
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
//               <th>Date</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {[1, 2, 3, 4, 5, 6].map((item) => (
//               <tr key={item}>
//                 {Array.from({ length: 11 }).map((_, index) => (
//                   <td key={index}>
//                     <div className="placeholder-glow" style={{ width: "100%" }}>
//                       <span className="placeholder col-12"></span>
//                     </div>
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default EnrollmentSkeleton;

function EnrollmentSkeleton() {
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
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                {/* Student */}
                <td>
                  <div className="skeleton-line" style={{ width: "80%" }}></div>
                </td>

                {/* Mobile */}
                <td>
                  <div className="skeleton-line" style={{ width: "75%" }}></div>
                </td>

                {/* Course */}
                <td>
                  <div className="skeleton-line" style={{ width: "85%" }}></div>
                </td>

                {/* Type */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Total Fee */}
                <td>
                  <div className="skeleton-line" style={{ width: "60%" }}></div>
                </td>

                {/* Paid */}
                <td>
                  <div className="skeleton-line" style={{ width: "60%" }}></div>
                </td>

                {/* Remaining */}
                <td>
                  <div className="skeleton-line" style={{ width: "60%" }}></div>
                </td>

                {/* Payment */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Status */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Date */}
                <td>
                  <div className="skeleton-line" style={{ width: "70%" }}></div>
                </td>

                {/* Action */}
                <td>
                  <div className="d-flex gap-2">
                    <div className="skeleton-btn"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollmentSkeleton;
