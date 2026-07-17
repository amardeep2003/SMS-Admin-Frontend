// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// function ProtectedRoute({ children }) {
//   const { isAuthenticated, loading } = useAuth();

//   // Jab tak localStorage check ho raha hai
//   if (loading) {
//     return (
//       <div
//         className="d-flex justify-content-center align-items-center vh-100"
//       >
//         <div className="spinner-border text-primary"></div>
//       </div>
//     );
//   }

//   // Login nahi hai
//   if (!isAuthenticated) {
//     return <Navigate to="/" replace />;
//   }

//   // Login hai
//   return children;
// }

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;