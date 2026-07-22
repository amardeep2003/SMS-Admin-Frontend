// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";

// import EnrollmentForm from "../components/public/EnrollmentForm";
// import DummyPaymentModal from "../components/public/DummyPaymentModal";

// import {
//   getCourseDropdown,
//   registerEnrollment,
// } from "../services/publicEnrollmentApi";

// import "../assets/images/css/PublicEnrollment.css";

// function PublicEnrollment() {
//   // ======================================
//   // Form State
//   // ======================================

//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     instituteName: "",
//     address: "",
//     courseType: "",
//     courseId: "",
//   });

//   // ======================================
//   // Dropdown
//   // ======================================

//   const [courses, setCourses] = useState([]);

//   const [loadingCourses, setLoadingCourses] = useState(true);

//   // ======================================
//   // Payment Modal
//   // ======================================

//   const [showPayment, setShowPayment] = useState(false);

//   // ======================================
//   // Submit Loading
//   // ======================================

//   const [loading, setLoading] = useState(false);

//   // ======================================
//   // Load Courses
//   // ======================================

//   useEffect(() => {
//     loadCourses();
//   }, []);

//   const loadCourses = async () => {
//     try {
//       setLoadingCourses(true);

//       const res = await getCourseDropdown();

//       setCourses(res.data.courses || []);
//     } catch (err) {
//       toast.error("Failed to load courses");
//     } finally {
//       setLoadingCourses(false);
//     }
//   };

//   // ======================================
//   // Input Change
//   // ======================================

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Reset course if type changed

//     if (name === "courseType") {
//       setFormData((prev) => ({
//         ...prev,
//         courseType: value,
//         courseId: "",
//       }));
//     }
//   };

//   // ======================================
//   // Open Payment
//   // ======================================

//   const handleProceedPayment = () => {
//     if (!formData.fullName.trim()) return toast.error("Full Name is required");

//     if (!formData.mobileNumber.trim())
//       return toast.error("Mobile Number is required");

//     if (!formData.courseType) return toast.error("Please select course type");

//     if (!formData.courseId) return toast.error("Please select course");

//     if (!formData.instituteName.trim())
//       return toast.error("Institute Name is required");

//     if (!formData.address.trim()) return toast.error("Address is required");

//     setShowPayment(true);
//   };

//   // ======================================
//   // Final Submit
//   // ======================================

//   const submitEnrollment = async (paymentSuccess) => {
//     try {
//       setLoading(true);

//       const payload = {
//         ...formData,

//         registrationFeePaid: paymentSuccess,

//         transactionId: paymentSuccess ? `TXN${Date.now()}` : "",
//       };

//       const res = await registerEnrollment(payload);

//       toast.success(res.data.message);

//       setShowPayment(false);

//       setFormData({
//         fullName: "",
//         mobileNumber: "",
//         instituteName: "",
//         address: "",
//         courseType: "",
//         courseId: "",
//       });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Enrollment failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ======================================
//   // UI
//   // ======================================

//   return (
//     <div className="public-enrollment-page">
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="enrollment-card">
//               <div className="text-center mb-4">
//                 <h2 className="fw-bold">Course Registration</h2>

//                 <p className="text-muted">Fill the form below to register.</p>
//               </div>

//               <EnrollmentForm
//                 formData={formData}
//                 handleChange={handleChange}
//                 courses={courses}
//                 loadingCourses={loadingCourses}
//                 onProceedPayment={handleProceedPayment}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <DummyPaymentModal
//         show={showPayment}
//         loading={loading}
//         amount={500}
//         onClose={() => setShowPayment(false)}
//         onSuccess={() => submitEnrollment(true)}
//         onFailure={() => submitEnrollment(false)}
//       />
//     </div>
//   );
// }

// export default PublicEnrollment;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import EnrollmentForm from "../components/public/EnrollmentForm";
import DummyPaymentModal from "../components/public/DummyPaymentModal";

import {
  getCourseDropdown,
  getCourseFeeStructure,
  registerEnrollment,
} from "../services/publicEnrollmentApi";

import "../assets/images/css/PublicEnrollment.css";

function PublicEnrollment() {
  // ==============================
  // Form
  // ==============================

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    courseType: "",
    courseId: "",

    instituteName: "",
    address: "",

    dob: "",
    gender: "",
    branch: "",
    semester: "",
    passingYear: "",
  });

  // ==============================
  // Courses
  // ==============================

  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  // ==============================
  // Fee Structure
  // ==============================

  const [feeStructure, setFeeStructure] = useState(null);

  // ==============================
  // Payment
  // ==============================

  const [showPayment, setShowPayment] = useState(false);

  // ==============================
  // Loading
  // ==============================

  const [loading, setLoading] = useState(false);

  // ==============================
  // Load Courses
  // ==============================

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoadingCourses(true);

      const res = await getCourseDropdown();

      setCourses(res.data.courses || []);
    } catch {
      toast.error("Failed to load courses");
    } finally {
      setLoadingCourses(false);
    }
  };

  // ==============================
  // Fee Structure
  // ==============================

  const loadFeeStructure = async (courseId) => {
    if (!courseId) {
      setFeeStructure(null);
      return;
    }

    try {
      const res = await getCourseFeeStructure(courseId);

      setFeeStructure(res.data.data);
    } catch {
      toast.error("Failed to load course fee");
      setFeeStructure(null);
    }
  };

  // ==============================
  // Handle Change
  // ==============================

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "courseType") {
      setFormData((prev) => ({
        ...prev,
        courseType: value,
        courseId: "",
      }));

      setFeeStructure(null);

      return;
    }

    if (name === "courseId") {
      setFormData((prev) => ({
        ...prev,
        courseId: value,
      }));

      loadFeeStructure(value);

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==============================
  // Validate
  // ==============================

  const handleProceedPayment = () => {
    if (!formData.fullName.trim()) return toast.error("Full Name is required");

    if (!formData.mobileNumber.trim())
      return toast.error("Mobile Number is required");

    if (!formData.courseType) return toast.error("Select Course Type");

    if (!formData.courseId) return toast.error("Select Course");

    if (!formData.instituteName.trim())
      return toast.error("Institute Name is required");

    if (!formData.address.trim()) return toast.error("Address is required");

    if (!formData.dob) return toast.error("Date of Birth is required");

    if (!formData.gender) return toast.error("Select Gender");

    if (!formData.branch.trim()) return toast.error("Branch is required");

    if (!formData.semester) return toast.error("Semester is required");

    if (!formData.passingYear) return toast.error("Passing Year is required");

    setShowPayment(true);
  };

  // ==============================
  // Submit
  // ==============================

  const submitEnrollment = async (paymentSuccess) => {
    try {
      setLoading(true);

      const payload = {
        ...formData,

        semester: Number(formData.semester),

        passingYear: Number(formData.passingYear),

        registrationFeePaid: paymentSuccess,

        transactionId: paymentSuccess ? `TXN${Date.now()}` : "",
      };

      const res = await registerEnrollment(payload);

      toast.success(res.data.message);

      setShowPayment(false);

      setFeeStructure(null);

      setFormData({
        fullName: "",
        mobileNumber: "",
        courseType: "",
        courseId: "",
        instituteName: "",
        address: "",
        dob: "",
        gender: "",
        branch: "",
        semester: "",
        passingYear: "",
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Enrollment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="public-enrollment-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="enrollment-card">
              <div className="text-center mb-4">
                <h2 className="fw-bold">Course Registration</h2>

                <p className="text-muted">Fill the form below.</p>
              </div>

              <EnrollmentForm
                formData={formData}
                handleChange={handleChange}
                courses={courses}
                loadingCourses={loadingCourses}
                feeStructure={feeStructure}
                onProceedPayment={handleProceedPayment}
              />
            </div>
          </div>
        </div>
      </div>

      <DummyPaymentModal
        show={showPayment}
        loading={loading}
        amount={feeStructure?.registrationFee || 0}
        onClose={() => setShowPayment(false)}
        onSuccess={() => submitEnrollment(true)}
        onFailure={() => submitEnrollment(false)}
      />
    </div>
  );
}

export default PublicEnrollment;
