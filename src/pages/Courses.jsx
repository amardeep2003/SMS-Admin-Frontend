import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
  getCourseById,
  changeCourseStatus,
} from "../services/courseApi";

import CourseSearch from "../components/courses/CourseSearch";
import CourseTable from "../components/courses/CourseTable";
import CoursePagination from "../components/courses/CoursePagination";
import CourseSkeleton from "../components/courses/CourseSkeleton";

import AddCourseModal from "../components/courses/AddCourseModal";
import EditCourseModal from "../components/courses/EditCourseModal";
import CourseViewModal from "../components/courses/CourseViewModal";
import DeleteCourseModal from "../components/courses/DeleteCourseModal";

import "../assets/images/css/course.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const [type, setType] = useState("");

  const [status, setStatus] = useState("");

  const [sortBy, setSortBy] = useState("updatedAt");

  const [sortOrder, setSortOrder] = useState("asc");

  // View

  const [viewId, setViewId] = useState(null);

  // Add

  const [showAdd, setShowAdd] = useState(false);

  // Edit

  const [showEdit, setShowEdit] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);

  // Delete

  const [showDelete, setShowDelete] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  // ==========================
  // Load Courses
  // ==========================

  const loadCourses = async () => {
    try {
      setLoading(true);

      const res = await getCourses({
        page,
        limit,
        search,
        type,
        status,
        sortBy,
        sortOrder,
      });

      setCourses(res.data.courses);

      setPagination(res.data.pagination);
    } catch (err) {
      toast.error("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadCourses();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search, type, status, sortBy, sortOrder]);

  // ==========================
  // Add Success
  // ==========================

  const handleAddSuccess = () => {
    setShowAdd(false);

    loadCourses();
  };

  // ==========================
  // Edit
  // ==========================

  const handleEdit = async (course) => {
    try {
      const res = await getCourseById(course._id);

      setSelectedCourse(res.data.data);

      setShowEdit(true);
    } catch (err) {
      toast.error("Unable to load course");
    }
  };

  // ==========================
  // Edit Success
  // ==========================

  const handleEditSuccess = () => {
    setShowEdit(false);

    setSelectedCourse(null);

    loadCourses();
  };

  // ==========================
  // Delete
  // ==========================

  const handleDelete = async () => {
    try {
      await deleteCourse(deleteId);

      await loadCourses();

      toast.success("Course deleted successfully");

      setDeleteId(null);

      setShowDelete(false);

      // loadCourses();
    } catch (err) {
      console.log(err);
      console.log(err.response);
      toast.error(err.response?.data?.message || "Delete Failed");
    }
  };

  // ==========================
  // Status Change
  // ==========================

  const handleStatus = async (id) => {
    try {
      await changeCourseStatus(id);
      await loadCourses();
      toast.success("Status Updated");

      // loadCourses();
    } catch (err) {
      console.log(err);
      console.log(err.response);
      toast.error(err.response?.data?.message || "Status Change Failed");
    }
  };

  // ==========================
  // Return
  // ==========================

  return (
    <div className="course-page">
      <CourseSearch
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        status={status}
        setStatus={setStatus}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        setPage={setPage}
        onAdd={() => setShowAdd(true)}
      />

      {loading ? (
        <CourseSkeleton />
      ) : (
        <>
          <CourseTable
            courses={courses}
            loadCourses={loadCourses}
            onView={setViewId}
            onEdit={handleEdit}
            onDelete={(id) => {
              setDeleteId(id);
              setShowDelete(true);
            }}
            onStatus={handleStatus}
          />

          <CoursePagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}

      {/* =========================
            View Modal
      ========================== */}

      <CourseViewModal courseId={viewId} onClose={() => setViewId(null)} />

      {/* =========================
            Add Course
      ========================== */}

      <AddCourseModal
        show={showAdd}
        onClose={() => setShowAdd(false)}
        onSuccess={handleAddSuccess}
      />

      {/* =========================
            Edit Course
      ========================== */}

      <EditCourseModal
        show={showEdit}
        course={selectedCourse}
        onClose={() => {
          setShowEdit(false);
          setSelectedCourse(null);
        }}
        onSuccess={handleEditSuccess}
      />

      {/* =========================
            Delete Course
      ========================== */}

      <DeleteCourseModal
        show={showDelete}
        courseId={deleteId}
        onClose={() => {
          setShowDelete(false);
          setDeleteId(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Courses;
