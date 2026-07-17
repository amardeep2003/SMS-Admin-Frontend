// import { createContext, useContext, useEffect, useState } from "react";
// import { loginAdmin } from "../services/authApi";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   // Admin Details
//   const [admin, setAdmin] = useState(null);

//   // Login Status
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Loading
//   const [loading, setLoading] = useState(true);

//   // First time app load hone par localStorage check karo
//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const adminData = localStorage.getItem("admin");

//     if (token && adminData) {
//       setAdmin(JSON.parse(adminData));
//       setIsAuthenticated(true);
//     }

//     setLoading(false);
//   }, []);

//   // Login Function
//   const login = async (formData) => {
//     const response = await loginAdmin(formData);

//     // Save Access Token
//     localStorage.setItem("accessToken", response.data.accessToken);

//     // Save Admin
//     localStorage.setItem(
//       "admin",
//       JSON.stringify(response.data.admin)
//     );

//     setAdmin(response.data.admin);
//     setIsAuthenticated(true);

//     return response;
//   };

//   // Logout Function
//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("admin");

//     setAdmin(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         admin,
//         isAuthenticated,
//         loading,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook
// // export const useAuth = () => useContext(AuthContext);