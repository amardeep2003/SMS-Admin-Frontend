// function DashboardLoader() {
//   return (
//     <div className="container-fluid mt-4">
//       <div className="row">
//         {[1, 2, 3, 4].map((item) => (
//           <div className="col-lg-3 col-md-6 mb-4" key={item}>
//             <div className="card placeholder-glow" style={{ height: "150px" }}>
//               <div className="card-body">
//                 <span className="placeholder col-8"></span>

//                 <br />
//                 <br />

//                 <span className="placeholder col-6"></span>

//                 <br />

//                 <span className="placeholder col-5"></span>

//                 <br />

//                 <span className="placeholder col-7"></span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="card placeholder-glow mb-4" style={{ height: "420px" }}>
//         <div className="card-body">
//           <span className="placeholder col-12"></span>
//         </div>
//       </div>

//       <div className="card placeholder-glow" style={{ height: "350px" }}>
//         <div className="card-body">
//           <span className="placeholder col-12"></span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLoader;



function DashboardLoader() {
  return (
    <div className="container-fluid mt-4">
      {/* Summary Cards */}
      <div className="row">
        {[...Array(4)].map((_, index) => (
          <div className="col-lg-3 col-md-6 mb-4" key={index}>
            <div className="card-box p-4" style={{ minHeight: "150px" }}>
              <div
                className="skeleton-line mb-3"
                style={{ width: "45%", height: "18px" }}
              ></div>

              <div
                className="skeleton-line mb-3"
                style={{ width: "70%", height: "32px" }}
              ></div>

              <div
                className="skeleton-line"
                style={{ width: "55%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="card-box p-4 mb-4">
        <div
          className="skeleton-line mb-4"
          style={{ width: "25%", height: "22px" }}
        ></div>

        <div
          className="skeleton-line"
          style={{
            width: "100%",
            height: "320px",
            borderRadius: "16px",
          }}
        ></div>
      </div>

      {/* Recent Activity / Table */}
      <div className="card-box p-4">
        <div
          className="skeleton-line mb-4"
          style={{ width: "30%", height: "22px" }}
        ></div>

        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-4"
          >
            <div className="d-flex align-items-center gap-3 flex-grow-1">
              <div className="skeleton-avatar"></div>

              <div className="w-100">
                <div
                  className="skeleton-line mb-2"
                  style={{ width: "45%" }}
                ></div>

                <div
                  className="skeleton-line"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>

            <div
              className="skeleton-line"
              style={{ width: "80px" }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardLoader;