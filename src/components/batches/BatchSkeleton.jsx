// function BatchSkeleton() {
//   return (
//     <div className="card-box">
//       <div className="table-responsive">
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Batch</th>
//               <th>Course</th>
//               <th>Type</th>
//               <th>Mode</th>
//               <th>Trainer</th>
//               <th>Students</th>
//               <th>Capacity</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {[1, 2, 3, 4, 5].map((item) => (
//               <tr key={item}>
//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-10"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-8"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-6"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-7"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-8"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-4"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-4"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-6"></span>
//                   </div>
//                 </td>

//                 <td>
//                   <div className="placeholder-glow">
//                     <span className="placeholder col-12"></span>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default BatchSkeleton;



function BatchSkeleton() {
  return (
    <div className="card-box">
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Course</th>
              <th>Type</th>
              <th>Mode</th>
              <th>Trainer</th>
              <th>Students</th>
              <th>Capacity</th>
              <th>Status</th>
              <th width="240">Action</th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                {/* Batch Name */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "80%" }}
                  ></div>
                </td>

                {/* Course */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "75%" }}
                  ></div>
                </td>

                {/* Type */}
                <td>
                  <div className="skeleton-badge"></div>
                </td>

                {/* Mode */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "60%" }}
                  ></div>
                </td>

                {/* Trainer */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "80%" }}
                  ></div>
                </td>

                {/* Students */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "35%" }}
                  ></div>
                </td>

                {/* Capacity */}
                <td>
                  <div
                    className="skeleton-line"
                    style={{ width: "35%" }}
                  ></div>
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
                    <div className="skeleton-btn"></div>
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

export default BatchSkeleton;


