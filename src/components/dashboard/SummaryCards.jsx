import {
  FaUserGraduate,
  FaBookOpen,
  FaMoneyBillWave,
  FaClipboardList,
} from "react-icons/fa";

function SummaryCards({ overview, revenue }) {
  const cards = [
    {
      title: "Students",
      icon: <FaUserGraduate size={30} />,
      color: "primary",
      vt: overview?.students?.vt || 0,
      lt: overview?.students?.lt || 0,
      total: overview?.students?.total || 0,
    },

    {
      title: "Active Courses",
      icon: <FaBookOpen size={30} />,
      color: "success",
      vt: overview?.activeCourses?.vt || 0,
      lt: overview?.activeCourses?.lt || 0,
      total: overview?.activeCourses?.total || 0,
    },

    {
      title: "Revenue",
      icon: <FaMoneyBillWave size={30} />,
      color: "warning",
      vt: revenue?.vt?.totalRevenue || 0,
      lt: revenue?.lt?.totalRevenue || 0,
      total: revenue?.grandTotalRevenue || 0,
      isCurrency: true,
    },

    {
      title: "Enrollments",
      icon: <FaClipboardList size={30} />,
      color: "danger",
      vt: revenue?.vt?.totalEnrollments || 0,
      lt: revenue?.lt?.totalEnrollments || 0,
      total: revenue?.grandTotalEnrollments || 0,
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className={`card border-0 shadow h-100`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5>{card.title}</h5>

                <div className={`text-${card.color}`}>{card.icon}</div>
              </div>

              <hr />

              <div className="mb-2">
                <strong>VT :</strong>{" "}
                {card.isCurrency ? `₹${card.vt}` : card.vt}
              </div>

              <div className="mb-2">
                <strong>LT :</strong>{" "}
                {card.isCurrency ? `₹${card.lt}` : card.lt}
              </div>

              <div className="fw-bold fs-5 text-success">
                Total : {card.isCurrency ? ` ₹${card.total}` : card.total}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
