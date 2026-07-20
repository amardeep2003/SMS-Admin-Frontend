import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
    getAffiliates,
    getAffiliateById,
    getAffiliateForEdit,
    deleteAffiliate
} from "../services/affiliateApi";

import AffiliateSearch from "../components/affiliates/AffiliateSearch";
import AffiliateTable from "../components/affiliates/AffiliateTable";
import AffiliatePagination from "../components/affiliates/AffiliatePagination";
import AffiliateSkeleton from "../components/affiliates/AffiliateSkeleton";

import AddAffiliateModal from "../components/affiliates/AddAffiliateModal";
import EditAffiliateModal from "../components/affiliates/EditAffiliateModal";
import AffiliateViewModal from "../components/affiliates/AffiliateViewModal";
import DeleteAffiliateModal from "../components/affiliates/DeleteAffiliateModal";

import "../../src/assets/images/css/affiliate.css";

function Affiliates() {
    // =============================
    // Listing
    // =============================

    const [affiliates, setAffiliates] = useState([]);
    const [pagination, setPagination] = useState({});
    const [loading, setLoading] = useState(true);

    // =============================
    // Filters
    // =============================

    const [page, setPage] = useState(1);

    const limit = 10;

    const [search, setSearch] = useState("");

    const [year, setYear] = useState(new Date().getFullYear());

    const [sortBy, setSortBy] = useState("");

    const [sortOrder, setSortOrder] = useState("");

    // =============================
    // View
    // =============================

    const [viewId, setViewId] = useState(null);

    // =============================
    // Add
    // =============================

    const [showAdd, setShowAdd] = useState(false);

    // =============================
    // Edit
    // =============================

    const [showEdit, setShowEdit] = useState(false);

    const [selectedAffiliate, setSelectedAffiliate] = useState(null);

    // =============================
    // Delete
    // =============================

    const [showDelete, setShowDelete] = useState(false);

    // =============================
    // Load Affiliates
    // =============================

    const loadAffiliates = async () => {
        try {
            setLoading(true);

            const res = await getAffiliates({
                page,
                limit,
                search,
                year,
                sortBy,
                sortOrder,
            });

            setAffiliates(res.data.data);

            setPagination(res.data.pagination);
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Failed to load affiliates"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            loadAffiliates();
        }, 500);

        return () => clearTimeout(timer);
    }, [page, search, year, sortBy, sortOrder]);

    // =============================
    // Edit
    // =============================

    // const handleEdit = async (id) => {
    //     try {
    //         const res = await getAffiliateById(id);

    //         setSelectedAffiliate(res.data.data);

    //         setShowEdit(true);
    //     } catch (err) {
    //         toast.error(
    //             err.response?.data?.message || "Unable to load affiliate"
    //         );
    //     }
    // };

    const handleEdit = async (id) => {
        try {
            const res = await getAffiliateForEdit(id);

            setSelectedAffiliate(res.data.data);

            setShowEdit(true);
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Failed to load affiliate"
            );
        }
    };

    return (
        <div className="affiliate-page">

            <AffiliateSearch
                search={search}
                setSearch={setSearch}
                year={year}
                setYear={setYear}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                setPage={setPage}
                onAdd={() => setShowAdd(true)}
            />

            {loading ? (
                <AffiliateSkeleton />
            ) : (
                <>
                    <AffiliateTable
                        affiliates={affiliates}
                        onView={(id) => setViewId(id)}
                        onEdit={handleEdit}
                        onDelete={(affiliate) => {
                            setSelectedAffiliate(affiliate);
                            setShowDelete(true);
                        }}
                    />

                    <AffiliatePagination
                        pagination={pagination}
                        page={page}
                        setPage={setPage}
                    />
                </>
            )}

            {/* View */}

            <AffiliateViewModal
                affiliateId={viewId}
                onClose={() => setViewId(null)}
            />

            {/* Add */}

            <AddAffiliateModal
                show={showAdd}
                onClose={() => setShowAdd(false)}
                onSuccess={() => {
                    setShowAdd(false);
                    loadAffiliates();
                }}
            />

            {/* Edit */}

            <EditAffiliateModal
                show={showEdit}
                affiliate={selectedAffiliate}
                onClose={() => {
                    setShowEdit(false);
                    setSelectedAffiliate(null);
                }}
                onSuccess={() => {
                    setShowEdit(false);
                    setSelectedAffiliate(null);
                    loadAffiliates();
                }}
            />

            {/* Delete */}

            <DeleteAffiliateModal
                show={showDelete}
                affiliateId={selectedAffiliate?._id}
                affiliateName={selectedAffiliate?.fullName}
                onClose={() => {
                    setShowDelete(false);
                    setSelectedAffiliate(null);
                }}
                onSuccess={loadAffiliates}
            />
        </div>
    );
}

export default Affiliates;