// function AffiliateSkeleton() {
//     return (
//         <div className="card-box">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Mobile</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                         <th>Courses Sold</th>
//                         <th>Revenue</th>
//                         <th>Created</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {[1, 2, 3, 4, 5].map((item) => (
//                         <tr key={item}>
//                             {Array.from({ length: 8 }).map((_, index) => (
//                                 <td key={index}>
//                                     <div
//                                         className="placeholder-glow"
//                                         style={{ minWidth: "80px" }}
//                                     >
//                                         <span className="placeholder col-12"></span>
//                                     </div>
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AffiliateSkeleton;


function AffiliateSkeleton() {
  return (
    <div className="card-box">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Status</th>
            <th>Courses Sold</th>
            <th>Revenue</th>
            <th>Created</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {[1, 2, 3, 4, 5].map((item) => (
            <tr key={item}>
              {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}>
                  <div className="placeholder-glow">
                    <span className="placeholder col-12"></span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AffiliateSkeleton;