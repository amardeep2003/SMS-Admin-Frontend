import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getTrainers,
  getTrainerById,
  deleteTrainer,
  changeTrainerStatus,
} from "../services/trainerApi";

import TrainerSearch from "../components/trainers/TrainerSearch";
import TrainerTable from "../components/trainers/TrainerTable";
import TrainerPagination from "../components/trainers/TrainerPagination";
import TrainerSkeleton from "../components/trainers/TrainerSkeleton";

import AddTrainerModal from "../components/trainers/AddTrainerModal";
import EditTrainerModal from "../components/trainers/EditTrainerModal";
import TrainerViewModal from "../components/trainers/TrainerViewModal";
import DeleteTrainerModal from "../components/trainers/DeleteTrainerModal";

// import "../assets/images/css/trainer.css";

function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [pagination, setPagination] = useState({});

  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [sortBy, setSortBy] = useState("");

  const [sortOrder, setSortOrder] = useState("");

  // View

  const [viewId, setViewId] = useState(null);

  // Add

  const [showAdd, setShowAdd] = useState(false);

  // Edit

  const [showEdit, setShowEdit] = useState(false);

  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Delete

  const [showDelete, setShowDelete] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  // ==========================
  // Load Trainers
  // ==========================

  const loadTrainers = async () => {
    try {
      setLoading(true);

      const res = await getTrainers({
        page,
        limit,
        search,
        status,
        sortBy,
        sortOrder,
      });

      setTrainers(res.data.trainers);

      setPagination(res.data.pagination);
    } catch (err) {
      toast.error("Failed to load trainers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      loadTrainers();
    }, 500);

    return () => clearTimeout(timer);
  }, [page, search, status, sortBy, sortOrder]);

  // ==========================
  // Add Success
  // ==========================

  const handleAddSuccess = () => {
    setShowAdd(false);

    loadTrainers();
  };

  // ==========================
  // Edit
  // ==========================

  const handleEdit = async (trainer) => {
    try {
      const res = await getTrainerById(trainer._id);

      setSelectedTrainer(res.data.trainer);

      setShowEdit(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Unable to load trainer");
    }
  };

  // ==========================
  // Edit Success
  // ==========================

  const handleEditSuccess = () => {
    setShowEdit(false);

    setSelectedTrainer(null);

    loadTrainers();
  };

  // ==========================
  // Delete
  // ==========================

  const handleDelete = async () => {
    try {
      await deleteTrainer(deleteId);

      toast.success("Trainer deleted successfully");

      setDeleteId(null);

      setShowDelete(false);

      loadTrainers();
    } catch (err) {
      toast.error(err.response?.data?.message || "Delete Failed");
    }
  };

  // ==========================
  // Toggle Status
  // ==========================

  const handleStatus = async (id) => {
    try {
      const res = await changeTrainerStatus(id);

      toast.success(res.data.message);

      loadTrainers();
    } catch (err) {
      toast.error(err.response?.data?.message || "Status Change Failed");
    }
  };

  return (
    <div className="trainer-page">
      <TrainerSearch
        search={search}
        setSearch={setSearch}
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
        <TrainerSkeleton />
      ) : (
        <>
          <TrainerTable
            trainers={trainers}
            onView={(id) => setViewId(id)}
            onEdit={handleEdit}
            onDelete={(id) => {
              setDeleteId(id);
              setShowDelete(true);
            }}
            onStatus={handleStatus}
          />

          <TrainerPagination
            pagination={pagination}
            page={page}
            setPage={setPage}
          />
        </>
      )}

      {/* View Trainer */}

      <TrainerViewModal trainerId={viewId} onClose={() => setViewId(null)} />

      {/* Add Trainer */}

      <AddTrainerModal
        show={showAdd}
        onClose={() => setShowAdd(false)}
        onSuccess={handleAddSuccess}
      />

      {/* Edit Trainer */}

      <EditTrainerModal
        show={showEdit}
        trainer={selectedTrainer}
        onClose={() => {
          setShowEdit(false);
          setSelectedTrainer(null);
        }}
        onSuccess={handleEditSuccess}
      />

      {/* Delete Trainer */}

      {/* <DeleteTrainerModal
        show={showDelete}
        trainerId={deleteId}
        onClose={() => {
          setShowDelete(false);
          setDeleteId(null);
        }}
        onDelete={handleDelete}
      /> */}

      <DeleteTrainerModal
        show={showDelete}
        trainerId={deleteId}
        trainerName={trainers.find((t) => t._id === deleteId)?.name}
        onClose={() => {
          setShowDelete(false);
          setDeleteId(null);
        }}
        onSuccess={() => {
          loadTrainers();
        }}
      />
    </div>
  );
}

export default Trainers;
