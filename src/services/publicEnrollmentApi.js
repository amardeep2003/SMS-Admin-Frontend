// import api from "../api/axios";

// // =======================================
// // GET COURSE DROPDOWN (PUBLIC)
// // =======================================

// export const getCourseDropdown = () => {
//   return api.get("/courses/dropdown");
// };

// // =======================================
// // REGISTER & ENROLL STUDENT (PUBLIC)
// // =======================================

// export const registerEnrollment = (data) => {
//   return api.post("/register/enroll", data);
// };

import api from "../api/axios";

// =======================================
// GET COURSE DROPDOWN (PUBLIC)
// =======================================

export const getCourseDropdown = () => {
  return api.get("/courses/public/dropdown");
};

// =======================================
// GET COURSE FEE STRUCTURE (PUBLIC)
// =======================================

export const getCourseFeeStructure = (courseId) => {
  return api.get(`/register/${courseId}/fee-structure`);
};

// =======================================
// REGISTER & ENROLL STUDENT (PUBLIC)
// =======================================

export const registerEnrollment = (data) => {
  return api.post("/register/enroll", data);
};
