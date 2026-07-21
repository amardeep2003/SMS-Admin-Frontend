// function StudentSkeleton() {
//   return (
//     <div className="card-box">
//       <div className="placeholder-glow mb-4">
//         <span className="placeholder col-4"></span>
//       </div>

//       <table className="table">
//         <tbody>
//           {[...Array(8)].map((_, index) => (
//             <tr key={index}>
//               <td>
//                 <span className="placeholder col-8"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-6"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-7"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-5"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-3"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-4"></span>
//               </td>
//               <td>
//                 <span className="placeholder col-6"></span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentSkeleton;

function StudentSkeleton() {
  return (
    <div className="card-box">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Student</th>
            <th>Mobile</th>
            <th>Institute</th>
            <th>Remaining Fees</th>
            <th>Courses</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              {/* Student */}
              <td>
                <div className="d-flex align-items-center gap-3">
                  <div className="skeleton-avatar"></div>

                  <div className="w-100">
                    <div
                      className="skeleton-line"
                      style={{ width: "70%" }}
                    ></div>

                    <div
                      className="skeleton-line mt-2"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </td>

              {/* Mobile */}
              <td>
                <div className="skeleton-line" style={{ width: "80%" }}></div>
              </td>

              {/* Institute */}
              <td>
                <div className="skeleton-line" style={{ width: "75%" }}></div>
              </td>

              {/* Remaining Fees */}
              <td>
                <div className="skeleton-line" style={{ width: "60%" }}></div>
              </td>

              {/* Courses */}
              <td>
                <div className="skeleton-line" style={{ width: "35%" }}></div>
              </td>

              {/* Status */}
              <td>
                <div className="skeleton-badge"></div>
              </td>

              {/* Action */}
              <td>
                <div className="d-flex gap-2">
                  <div className="skeleton-btn"></div>
                  <div className="skeleton-btn"></div>
                  <div className="skeleton-btn"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentSkeleton;
