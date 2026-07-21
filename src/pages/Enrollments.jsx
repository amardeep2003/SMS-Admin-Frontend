import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getEnrollments } from "../services/enrollmentApi";

import EnrollmentSearch from "../components/enrollments/EnrollmentSearch";
import EnrollmentTable from "../components/enrollments/EnrollmentTable";
import EnrollmentPagination from "../components/enrollments/EnrollmentPagination";
import EnrollmentSkeleton from "../components/enrollments/EnrollmentSkeleton";
import AssignAffiliateModal from "../components/enrollments/AssignAffiliateModal";

function Enrollments() {
  // ==========================
  // Data
  // ==========================

  const [enrollments, setEnrollments] = useState([]);

  const [pagination, setPagination] = useState({});

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
  }, [page, search, courseType, courseId, sortOrder]);

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
        setPage={setPage}
      />

      {loading ? (
        <EnrollmentSkeleton />
      ) : (
        <>
          <EnrollmentTable
            enrollments={enrollments}
            onAssignAffiliate={(enrollment) => {
              setSelectedEnrollment(enrollment);

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
    </div>
  );
}

export default Enrollments;
