import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getEnrollments } from "../services/enrollmentApi";

import EnrollmentSearch from "../components/enrollments/EnrollmentSearch";
import EnrollmentTable from "../components/enrollments/EnrollmentTable";
import EnrollmentPagination from "../components/enrollments/EnrollmentPagination";
import EnrollmentSkeleton from "../components/enrollments/EnrollmentSkeleton";
import AssignAffiliateModal from "../components/enrollments/AssignAffiliateModal";
import EnrollmentViewModal from "../components/enrollments/EnrollmentViewModal";

import "../assets/images/css/enrollment.css"

function Enrollments() {
  // ==========================
  // Data
  // ==========================

  const [enrollments, setEnrollments] = useState([]);

  const [pagination, setPagination] = useState({});

  // ==========================
  // View Enrollment
  // ==========================

  const [viewId, setViewId] = useState(null);

  const [loading, setLoading] = useState(true);

  // ==========================
  // Filters
  // ==========================

  const [page, setPage] = useState(1);

  const limit = 20;

  const [search, setSearch] = useState("");

  const [courseType, setCourseType] = useState("");

  const [courseId, setCourseId] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  const [paymentStatus, setPaymentStatus] = useState("");

  const [enrollmentStatus, setEnrollmentStatus] = useState("");

  const [studentNameSort, setStudentNameSort] = useState("");

  const [remainingAmountSort, setRemainingAmountSort] = useState("");

  const [enrollmentDateSort, setEnrollmentDateSort] = useState("");

  // ==========================
  // Affiliate Modal
  // ==========================

  const [showAffiliateModal, setShowAffiliateModal] = useState(false);

  const [selectedEnrollment, setSelectedEnrollment] = useState(null);

  // ==========================
  // Load
  // ==========================

  const loadEnrollments = async () => {
    try {
      setLoading(true);

      const res = await getEnrollments({
        page,
        limit,
        search,
        courseType,
        courseId,
        sortOrder,
        paymentStatus,
        enrollmentStatus,
        studentNameSort,
        remainingAmountSort,
        enrollmentDateSort,
      });

      setEnrollments(res.data.data);

      setPagination(res.data.pagination);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to load enrollments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadEnrollments();
    }, 500);

    return () => clearTimeout(timer);
  }, [
    page,
    search,
    courseType,
    courseId,
    sortOrder,
    paymentStatus,
    enrollmentStatus,
    studentNameSort,
    remainingAmountSort,
    enrollmentDateSort,
  ]);

  return (
    <div className="enrollment-page">
      <EnrollmentSearch
        search={search}
        setSearch={setSearch}
        courseType={courseType}
        setCourseType={setCourseType}
        courseId={courseId}
        setCourseId={setCourseId}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        paymentStatus={paymentStatus}
        setPaymentStatus={setPaymentStatus}
        enrollmentStatus={enrollmentStatus}
        setEnrollmentStatus={setEnrollmentStatus}
        studentNameSort={studentNameSort}
        setStudentNameSort={setStudentNameSort}
        remainingAmountSort={remainingAmountSort}
        setRemainingAmountSort={setRemainingAmountSort}
        enrollmentDateSort={enrollmentDateSort}
        setEnrollmentDateSort={setEnrollmentDateSort}
        setPage={setPage}
      />

      {loading ? (
        <EnrollmentSkeleton />
      ) : (
        <>
          <EnrollmentTable
            enrollments={enrollments}
            onView={(id) => setViewId(id)}
            onAssignAffiliate={(item) => {
              setSelectedEnrollment(item);
              setShowAffiliateModal(true);
            }}
          />

          <EnrollmentPagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}

      <AssignAffiliateModal
        show={showAffiliateModal}
        enrollment={selectedEnrollment}
        onClose={() => {
          setShowAffiliateModal(false);

          setSelectedEnrollment(null);
        }}
        onSuccess={() => {
          setShowAffiliateModal(false);

          setSelectedEnrollment(null);

          loadEnrollments();
        }}
      />

      <EnrollmentViewModal
        enrollmentId={viewId}
        onClose={() => setViewId(null)}
      />
    </div>
  );
}

export default Enrollments;
