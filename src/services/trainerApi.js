import api from "../api/axios";

// ===============================
// GET ALL TRAINERS
// ===============================
export const getTrainers = (params) => {
  return api.get("/trainers", {
    params,
  });
};

// ===============================
// GET TRAINER BY ID
// ===============================
export const getTrainerById = (id) => {
  return api.get(`/trainers/${id}`);
};

// ===============================
// ADD TRAINER
// ===============================
export const addTrainer = (data) => {
  return api.post("/trainers", data);
};

// ===============================
// UPDATE TRAINER
// ===============================
export const updateTrainer = (id, data) => {
  return api.patch(`/trainers/${id}`, data);
};

// ===============================
// DELETE TRAINER
// ===============================
export const deleteTrainer = (id) => {
  return api.delete(`/trainers/${id}`);
};

// ===============================
// TOGGLE STATUS
// ===============================
export const changeTrainerStatus = (id) => {
  return api.patch(`/trainers/${id}/status`);
};

// ===============================
// TRAINER DROPDOWN
// ===============================
export const getTrainerDropdown = () => {
  return api.get("/trainers/dropdown");
};