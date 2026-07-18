import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getStudents } from "../services/studentApi";

import StudentSearch from "../components/students/StudentSearch";
import StudentTable from "../components/students/StudentTable";
import StudentPagination from "../components/students/StudentPagination";
import StudentSkeleton from "../components/students/StudentSkeleton";

import "../assets/images/css/student.css";

function Students() {
  const [students, setStudents] = useState([]);
  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");

  const limit = 20;

  const loadStudents = async () => {
    try {
      setLoading(true);

      const res = await getStudents({
        page,
        limit,
        search,
      });

      setStudents(res.data.data);

      setPagination(res.data.pagination);
    } catch (error) {
      toast.error("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadStudents();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search]);

  return (
    <div className="student-page">
      <StudentSearch search={search} setSearch={setSearch} setPage={setPage} />

      {loading ? (
        <StudentSkeleton />
      ) : (
        <>
          <StudentTable students={students} />

          <StudentPagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
}

export default Students;
