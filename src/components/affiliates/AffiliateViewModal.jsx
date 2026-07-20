import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { getAffiliateById } from "../../services/affiliateApi";

function AffiliateViewModal({ affiliateId, onClose }) {
    const [loading, setLoading] = useState(true);

    const [data, setData] = useState(null);

    const currentYear = new Date().getFullYear();

    useEffect(() => {
        if (!affiliateId) return;

        loadAffiliate();
    }, [affiliateId]);

    const loadAffiliate = async () => {
        try {
            setLoading(true);

            const res = await getAffiliateById(affiliateId, {
                year: currentYear,
            });

            setData(res.data.data);
        } catch (err) {
            toast.error(
                err.response?.data?.message ||
                "Failed to load affiliate details"
            );
        } finally {
            setLoading(false);
        }
    };

    if (!affiliateId) return null;

    return (
        <div className="modal fade show d-block modal-bg">
            <div
                className="modal-dialog modal-xl modal-dialog-scrollable"
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Affiliate Details</h4>

                        <button
                            className="btn-close"
                            onClick={onClose}
                        />
                    </div>

                    <div className="modal-body">

                        {loading ? (
                            <div className="text-center py-5">
                                Loading...
                            </div>
                        ) : (
                            <>
                                {/* Affiliate */}

                                <div className="card mb-4">

                                    <div className="card-header">
                                        <strong>Affiliate Information</strong>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-6 mb-3">
                                                <strong>Name</strong>

                                                <p>{data.affiliate.fullName}</p>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <strong>Mobile</strong>

                                                <p>{data.affiliate.mobileNumber}</p>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <strong>Email</strong>

                                                <p>{data.affiliate.email}</p>
                                            </div>

                                            <div className="col-md-6 mb-3">
                                                <strong>Status</strong>

                                                <p>{data.affiliate.status}</p>
                                            </div>

                                            <div className="col-12">
                                                <strong>Address</strong>

                                                <p>{data.affiliate.address}</p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Summary */}

                                <div className="card mb-4">

                                    <div className="card-header">
                                        <strong>Summary</strong>
                                    </div>

                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-4">
                                                <strong>Year</strong>

                                                <p>{data.summary.year}</p>
                                            </div>

                                            <div className="col-md-4">
                                                <strong>Total Courses</strong>

                                                <p>{data.summary.totalCourseSold}</p>
                                            </div>

                                            <div className="col-md-4">
                                                <strong>Total Revenue</strong>

                                                <p>
                                                    ₹
                                                    {new Intl.NumberFormat(
                                                        "en-IN"
                                                    ).format(
                                                        data.summary.totalRevenue
                                                    )}
                                                </p>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                {/* Courses */}

                                <div className="card">

                                    <div className="card-header">
                                        <strong>Courses Sold</strong>
                                    </div>

                                    <div className="card-body p-0">

                                        <div className="table-responsive">

                                            <table className="table table-bordered mb-0">

                                                <thead>

                                                    <tr>
                                                        <th>Student</th>

                                                        <th>Course</th>

                                                        <th>Type</th>

                                                        <th>Selling Price</th>

                                                        <th>Paid</th>

                                                        <th>Remaining</th>

                                                        <th>Status</th>
                                                    </tr>

                                                </thead>

                                                <tbody>

                                                    {data.courses.length ? (
                                                        data.courses.map((course) => (
                                                            <tr
                                                                key={course.enrollmentId}
                                                            >
                                                                <td>
                                                                    {course.studentName}
                                                                </td>

                                                                <td>
                                                                    {course.courseName}
                                                                </td>

                                                                <td>
                                                                    {course.courseType}
                                                                </td>

                                                                <td>
                                                                    ₹{course.sellingPrice}
                                                                </td>

                                                                <td>
                                                                    ₹
                                                                    {
                                                                        course.totalPaidAmount
                                                                    }
                                                                </td>

                                                                <td>
                                                                    ₹
                                                                    {
                                                                        course.remainingAmount
                                                                    }
                                                                </td>

                                                                <td>
                                                                    {
                                                                        course.paymentStatus
                                                                    }
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td
                                                                colSpan="7"
                                                                className="text-center py-4"
                                                            >
                                                                No Course Sold
                                                            </td>
                                                        </tr>
                                                    )}

                                                </tbody>

                                            </table>

                                        </div>

                                    </div>

                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AffiliateViewModal;