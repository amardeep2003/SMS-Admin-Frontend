import api from "../api/axios";

// ==============================
// GET ALL ENROLLMENTS
// ==============================
export const getEnrollments = (params) => {
  return api.get("/enrollments", {
    params,
  });
};

// ==============================
// UPDATE AFFILIATE PARTNER
// ==============================
export const updateEnrollmentAffiliate = (id, affiliatePartner) => {
  return api.patch(`/enrollments/${id}/affiliate`, {
    affiliatePartner,
  });
};

// ==============================
// COURSE DROPDOWN
// ==============================
export const getCourseDropdown = () => {
  return api.get("/courses/dropdown");
};

// ==============================
// AFFILIATE DROPDOWN
// ==============================
export const getAffiliateDropdown = () => {
  return api.get("/affiliate/dropdown");
};

// ==============================
// GET SINGLE ENROLLMENT
// ==============================

export const getEnrollmentById = (id) => {
  return api.get(`/enrollments/${id}`);
};

// ==============================
// ADD PAYMENT
// ==============================

export const addEnrollmentPayment = (enrollmentId, data) => {
  return api.post(`/enrollments/${enrollmentId}/payment`, data);
};
