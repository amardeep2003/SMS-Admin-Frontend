import api from "../api/axios";

// Get All Students
export const getStudents = (params) => {
  return api.get("/student", {
    params,
  });
};

// Get Single Student
export const getStudent = (id) => {
  return api.get(`/student/${id}`);
};