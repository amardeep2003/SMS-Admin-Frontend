import api from "../api/axios";

// =======================================
// GET COURSE DROPDOWN (PUBLIC)
// =======================================

export const getCourseDropdown = () => {
  return api.get("/courses/dropdown");
};

// =======================================
// REGISTER & ENROLL STUDENT (PUBLIC)
// =======================================

export const registerEnrollment = (data) => {
  return api.post("/register/enroll", data);
};