import api from "../api/axios";

// ==============================
// GET ALL AFFILIATES
// ==============================
export const getAffiliates = (params) => {
  return api.get("/affiliate/get/all", {
    params,
  });
};

// ==============================
// GET SINGLE AFFILIATE (VIEW)
// ==============================
export const getAffiliateById = (id, params) => {
  return api.get(`/affiliate/${id}/single`, {
    params,
  });
};

// ==============================
// GET AFFILIATE FOR EDIT
// ==============================
export const getAffiliateForEdit = (id) => {
  return api.get(`/affiliate/${id}/edit`);
};

// ==============================
// ADD AFFILIATE
// ==============================
export const addAffiliate = (data) => {
  return api.post("/affiliate", data);
};

// ==============================
// UPDATE AFFILIATE
// ==============================
export const updateAffiliate = (id, data) => {
  return api.put(`/affiliate/${id}`, data);
};

// ==============================
// DELETE AFFILIATE
// ==============================
export const deleteAffiliate = (id) => {
  return api.delete(`/affiliate/${id}`);
};

// ==============================
// AFFILIATE DROPDOWN
// ==============================
export const getAffiliateDropdown = () => {
  return api.get("/affiliate/dropdown");
};
