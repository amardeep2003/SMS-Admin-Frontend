import api from "../api/axios";

export const loginAdmin = (data) => {
  return api.post("/auth/login", data);
};

export const refreshToken = () => {
  return api.post("/auth/refresh");
};

// ===============================
// Forgot Password
// ===============================

// Send OTP
export const sendForgotOtp = (data) => {
  return api.post("/auth/forgot-password/send-otp", data);
};

// Verify OTP
export const verifyForgotOtp = (data, token) => {
  return api.post("/auth/forgot-password/verify-otp", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Reset Password
export const resetPassword = (data, token) => {
  return api.put("/auth/reset-password", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
