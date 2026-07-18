import api from "../api/axios";

// ==========================
// GET ALL COURSES
// ==========================
export const getCourses = (params) => {
  return api.get("/courses", {
    params,
  });
};

// ==========================
// GET SINGLE COURSE
// ==========================
export const getCourseById = (id) => {
  return api.get(`/courses/${id}`);
};

// ==========================
// ADD COURSE
// ==========================
export const addCourse = (data) => {
  return api.post("/courses", data);
};

// ==========================
// UPDATE COURSE
// ==========================
export const updateCourse = (id, data) => {
  return api.patch(`/courses/${id}`, data);
};

// ==========================
// DELETE COURSE
// ==========================
export const deleteCourse = (id) => {
  return api.delete(`/courses/${id}`);
};

// ==========================
// CHANGE STATUS
// ==========================
export const changeCourseStatus = (id) => {
  return api.patch(`/courses/${id}/status`);
};

// ==========================
// COURSE DROPDOWN
// ==========================
export const getCourseDropdown = (type = "") => {
  return api.get("/courses/dropdown", {
    params: { type },
  });
};