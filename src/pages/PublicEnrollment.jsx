import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import EnrollmentForm from "../components/public/EnrollmentForm";
import DummyPaymentModal from "../components/public/DummyPaymentModal";

import {
  getCourseDropdown,
  registerEnrollment,
} from "../services/publicEnrollmentApi";

import "../assets/images/css/PublicEnrollment.css";

function PublicEnrollment() {
  // ======================================
  // Form State
  // ======================================

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    instituteName: "",
    address: "",
    courseType: "",
    courseId: "",
  });

  // ======================================
  // Dropdown
  // ======================================

  const [courses, setCourses] = useState([]);

  const [loadingCourses, setLoadingCourses] = useState(true);

  // ======================================
  // Payment Modal
  // ======================================

  const [showPayment, setShowPayment] = useState(false);

  // ======================================
  // Submit Loading
  // ======================================

  const [loading, setLoading] = useState(false);

  // ======================================
  // Load Courses
  // ======================================

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoadingCourses(true);

      const res = await getCourseDropdown();

      setCourses(res.data.courses || []);
    } catch (err) {
      toast.error("Failed to load courses");
    } finally {
      setLoadingCourses(false);
    }
  };

  // ======================================
  // Input Change
  // ======================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Reset course if type changed

    if (name === "courseType") {
      setFormData((prev) => ({
        ...prev,
        courseType: value,
        courseId: "",
      }));
    }
  };

  // ======================================
  // Open Payment
  // ======================================

  const handleProceedPayment = () => {
    if (!formData.fullName.trim()) return toast.error("Full Name is required");

    if (!formData.mobileNumber.trim())
      return toast.error("Mobile Number is required");

    if (!formData.courseType) return toast.error("Please select course type");

    if (!formData.courseId) return toast.error("Please select course");

    if (!formData.instituteName.trim())
      return toast.error("Institute Name is required");

    if (!formData.address.trim()) return toast.error("Address is required");

    setShowPayment(true);
  };

  // ======================================
  // Final Submit
  // ======================================

  const submitEnrollment = async (paymentSuccess) => {
    try {
      setLoading(true);

      const payload = {
        ...formData,

        registrationFeePaid: paymentSuccess,

        transactionId: paymentSuccess ? `TXN${Date.now()}` : "",
      };

      const res = await registerEnrollment(payload);

      toast.success(res.data.message);

      setShowPayment(false);

      setFormData({
        fullName: "",
        mobileNumber: "",
        instituteName: "",
        address: "",
        courseType: "",
        courseId: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Enrollment failed");
    } finally {
      setLoading(false);
    }
  };

  // ======================================
  // UI
  // ======================================

  return (
    <div className="public-enrollment-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="enrollment-card">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Course Registration</h2>

                <p className="text-muted">Fill the form below to register.</p>
              </div>

              <EnrollmentForm
                formData={formData}
                handleChange={handleChange}
                courses={courses}
                loadingCourses={loadingCourses}
                onProceedPayment={handleProceedPayment}
              />
            </div>
          </div>
        </div>
      </div>

      <DummyPaymentModal
        show={showPayment}
        loading={loading}
        amount={500}
        onClose={() => setShowPayment(false)}
        onSuccess={() => submitEnrollment(true)}
        onFailure={() => submitEnrollment(false)}
      />
    </div>
  );
}

export default PublicEnrollment;
