import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getBatches,
  getBatchById,
  changeBatchStatus,
} from "../services/batchApi";

import BatchSearch from "../components/batches/BatchSearch";
import BatchTable from "../components/batches/BatchTable";
import BatchPagination from "../components/batches/BatchPagination";
import BatchSkeleton from "../components/batches/BatchSkeleton";

import AddBatchModal from "../components/batches/AddBatchModal";
import EditBatchModal from "../components/batches/EditBatchModal";
import BatchViewModal from "../components/batches/BatchViewModal";
import AddStudentModal from "../components/batches/AddStudentModal";
import DeleteBatchModal from "../components/batches/DeleteBatchModal";

function Batches() {
  // ==========================
  // Listing
  // ==========================

  const [batches, setBatches] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  // ==========================
  // Filters
  // ==========================

  const [page, setPage] = useState(1);
  const limit = 10;

  const [search, setSearch] = useState("");
  const [courseType, setCourseType] = useState("");
  const [courseId, setCourseId] = useState("");

  // ==========================
  // View
  // ==========================

  const [viewId, setViewId] = useState(null);

  // ==========================
  // Add
  // ==========================

  const [showAdd, setShowAdd] = useState(false);

  // ==========================
  // Edit
  // ==========================

  const [showEdit, setShowEdit] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);

  // ==========================
  // Delete
  // ==========================

  const [showDelete, setShowDelete] = useState(false);

  // ==========================
  // Add Student
  // ==========================

  const [showStudentModal, setShowStudentModal] = useState(false);
  const [studentBatchId, setStudentBatchId] = useState(null);

  // ==========================
  // Load Batches
  // ==========================

  const loadBatches = async () => {
    try {
      setLoading(true);

      const res = await getBatches({
        page,
        limit,
        search,
        courseType,
        courseId,
      });

      setBatches(res.data.data);
      setPagination(res.data.pagination);
    } catch (err) {
      toast.error("Failed to load batches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadBatches();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search, courseType, courseId]);

  // ==========================
  // Edit
  // ==========================

  const handleEdit = async (id) => {
    try {
      const res = await getBatchById(id);

      setSelectedBatch(res.data.data);

      setShowEdit(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to load batch");
    }
  };

  // ==========================
  // Toggle Status
  // ==========================

  const handleStatus = async (batch, status) => {
    try {
      const res = await changeBatchStatus(batch._id, status);

      toast.success(res.data.message);

      loadBatches();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to change status");
    }
  };

  return (
    <div className="batch-page">
      <BatchSearch
        search={search}
        setSearch={setSearch}
        courseType={courseType}
        setCourseType={setCourseType}
        courseId={courseId}
        setCourseId={setCourseId}
        setPage={setPage}
        onAdd={() => setShowAdd(true)}
      />

      {loading ? (
        <BatchSkeleton />
      ) : (
        <>
          <BatchTable
            batches={batches}
            onView={(id) => setViewId(id)}
            onEdit={handleEdit}
            onDelete={(batch) => {
              setSelectedBatch(batch);
              setShowDelete(true);
            }}
            onStatus={handleStatus}
            onAddStudent={(id) => {
              setStudentBatchId(id);
              setShowStudentModal(true);
            }}
          />

          <BatchPagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}

      {/* View */}

      <BatchViewModal batchId={viewId} onClose={() => setViewId(null)} />

      {/* Add */}

      <AddBatchModal
        show={showAdd}
        onClose={() => setShowAdd(false)}
        onSuccess={() => {
          setShowAdd(false);
          loadBatches();
        }}
      />

      {/* Edit */}

      <EditBatchModal
        show={showEdit}
        batch={selectedBatch}
        onClose={() => {
          setShowEdit(false);
          setSelectedBatch(null);
        }}
        onSuccess={() => {
          setShowEdit(false);
          setSelectedBatch(null);
          loadBatches();
        }}
      />

      {/* Delete */}

      <DeleteBatchModal
        show={showDelete}
        batchId={selectedBatch?._id}
        batchName={selectedBatch?.name}
        onClose={() => {
          setShowDelete(false);
          setSelectedBatch(null);
        }}
        onSuccess={loadBatches}
      />

      {/* Add Student */}

      <AddStudentModal
        show={showStudentModal}
        batchId={studentBatchId}
        onClose={() => {
          setShowStudentModal(false);
          setStudentBatchId(null);
        }}
        onSuccess={() => {
          setShowStudentModal(false);
          setStudentBatchId(null);
          loadBatches();
        }}
      />
    </div>
  );
}

export default Batches;
