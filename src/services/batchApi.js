import api from "../api/axios";

// ==============================
// GET ALL BATCHES
// ==============================
export const getBatches = (params) => {
  return api.get("/batch", {
    params,
  });
};

// ==============================
// GET SINGLE BATCH
// ==============================
export const getBatchById = (id) => {
  return api.get(`/batch/${id}`);
};

// ==============================
// ADD BATCH
// ==============================
export const addBatch = (data) => {
  return api.post("/batch", data);
};

// ==============================
// UPDATE BATCH
// ==============================
export const updateBatch = (id, data) => {
  return api.put(`/batch/${id}`, data);
};

// ==============================
// CHANGE STATUS
// ==============================
export const changeBatchStatus = (id, status) => {
  return api.patch(`/batch/${id}/toggle-status`, {
    status,
  });
};

// ==============================
// ADD STUDENT
// ==============================
export const addStudentToBatch = (batchId, data) => {
  return api.post(`/batch/${batchId}/students`, data);
};

// ==============================
// MOVE STUDENT
// ==============================
export const moveStudentToBatch = (batchId, data) => {
  return api.post(`/batch/${batchId}/students`, data);
};

// ==============================
// DELETE BATCH
// ==============================
export const deleteBatch = (id) => {
  return api.delete(`/batch/${id}`);
};

// ==============================
// REMOVE STUDENT FROM BATCH
// ==============================
export const removeStudentFromBatch = (batchId, studentId) => {
  return api.patch(`/batch/${batchId}/remove-student/${studentId}`);
};

export const getCourseDropdown = () => {
  return api.get("/courses/dropdown");
};

export const getTrainerDropdown = () => {
  return api.get("/trainers/dropdown");
};
