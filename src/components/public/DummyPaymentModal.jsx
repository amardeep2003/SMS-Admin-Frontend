// function DummyPaymentModal({
//   show,
//   loading,
//   amount,
//   onClose,
//   onSuccess,
//   onFailure,
// }) {
//   if (!show) return null;

//   return (
//     <>
//       <div
//         className="modal fade show d-block"
//         style={{ background: "rgba(0,0,0,0.55)" }}
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content border-0 shadow-lg">
//             {/* Header */}

//             <div className="modal-header bg-primary text-white">
//               <h5 className="modal-title">Registration Fee Payment</h5>

//               <button
//                 type="button"
//                 className="btn-close btn-close-white"
//                 onClick={onClose}
//                 disabled={loading}
//               />
//             </div>

//             {/* Body */}

//             <div className="modal-body text-center py-4">
//               <div
//                 style={{
//                   width: "90px",
//                   height: "90px",
//                   margin: "0 auto",
//                   borderRadius: "50%",
//                   background: "#e8f5ff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "40px",
//                 }}
//               >
//                 💳
//               </div>

//               <h3 className="mt-4 mb-2">Dummy Payment Gateway</h3>

//               <p className="text-muted">This is a temporary payment screen.</p>

//               <div
//                 className="border rounded p-3 mt-4"
//                 style={{ background: "#f8f9fa" }}
//               >
//                 <h6 className="text-muted mb-2">Registration Fee</h6>

//                 <h2 className="text-success fw-bold">₹{amount}</h2>
//               </div>

//               <p className="mt-4 text-secondary">
//                 Select payment result to continue.
//               </p>
//             </div>

//             {/* Footer */}

//             <div className="modal-footer justify-content-center">
//               <button
//                 className="btn btn-outline-secondary"
//                 onClick={onClose}
//                 disabled={loading}
//               >
//                 Cancel
//               </button>

//               <button
//                 className="btn btn-danger"
//                 onClick={onFailure}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Payment Failed"}
//               </button>

//               <button
//                 className="btn btn-success"
//                 onClick={onSuccess}
//                 disabled={loading}
//               >
//                 {loading ? "Processing..." : "Payment Successful"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DummyPaymentModal;

function DummyPaymentModal({
  show,
  loading,
  amount = 500,
  onClose,
  onSuccess,
  onFailure,
}) {
  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      style={{ background: "rgba(0,0,0,0.55)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          {/* Header */}
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Registration Fee Payment</h5>

            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={onClose}
              disabled={loading}
            />
          </div>

          {/* Body */}
          <div className="modal-body text-center py-4">
            <div
              style={{
                width: 90,
                height: 90,
                margin: "0 auto",
                borderRadius: "50%",
                background: "#e8f5ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 40,
              }}
            >
              💳
            </div>

            <h3 className="mt-4">Dummy Payment Gateway</h3>

            <p className="text-muted">This is a dummy payment screen.</p>

            <div className="border rounded p-3 mt-4 bg-light">
              <h6 className="text-muted mb-2">Registration Fee</h6>

              <h2 className="text-success fw-bold">₹{amount ?? 500}</h2>
            </div>

            <p className="mt-4 text-secondary">
              Click any button to simulate payment.
            </p>
          </div>

          {/* Footer */}
          <div className="modal-footer justify-content-center">
            <button
              className="btn btn-outline-secondary"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>

            <button
              className="btn btn-danger"
              onClick={onFailure}
              disabled={loading}
            >
              {loading ? "Processing..." : "Payment Failed"}
            </button>

            <button
              className="btn btn-success"
              onClick={onSuccess}
              disabled={loading}
            >
              {loading ? "Processing..." : "Payment Successful"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DummyPaymentModal;
