import {
  FaUserGraduate,
  FaBookOpen,
  FaIndianRupeeSign,
  FaClipboardList,
} from "react-icons/fa6";

function SummaryCards({ overview, revenue }) {
  const cards = [
    {
      title: "Total Students",
      icon: <FaUserGraduate />,
      value: overview?.students?.total || 0,
      vt: overview?.students?.vt || 0,
      lt: overview?.students?.lt || 0,
      bg: "primary-card",
      iconBg: "primary-icon",
    },
    {
      title: "Active Courses",
      icon: <FaBookOpen />,
      value: overview?.activeCourses?.total || 0,
      vt: overview?.activeCourses?.vt || 0,
      lt: overview?.activeCourses?.lt || 0,
      bg: "success-card",
      iconBg: "success-icon",
    },
    {
      title: "Revenue",
      icon: <FaIndianRupeeSign />,
      value: `₹${revenue?.grandTotalRevenue || 0}`,
      vt: `₹${revenue?.vt?.totalRevenue || 0}`,
      lt: `₹${revenue?.lt?.totalRevenue || 0}`,
      bg: "warning-card",
      iconBg: "warning-icon",
    },
    {
      title: "Enrollments",
      icon: <FaClipboardList />,
      value: revenue?.grandTotalEnrollments || 0,
      vt: revenue?.vt?.totalEnrollments || 0,
      lt: revenue?.lt?.totalEnrollments || 0,
      bg: "danger-card",
      iconBg: "danger-icon",
    },
  ];

  return (
    <div className="row g-4 mb-4">
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className={`summary-card ${card.bg}`}>
            <div className="summary-top">
              <div>
                <small>{card.title}</small>

                <h3>{card.value}</h3>
              </div>

              <div className={`summary-icon ${card.iconBg}`}>{card.icon}</div>
            </div>

            <div className="summary-footer">
              <span>VT : {card.vt}</span>

              <span>LT : {card.lt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
