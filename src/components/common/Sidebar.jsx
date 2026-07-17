import { NavLink } from "react-router-dom";
import {
    FaTachometerAlt,
    FaUserGraduate,
    FaBook,
    FaLayerGroup,
    FaClipboardList,
    FaHandshake,
    FaChalkboardTeacher,
    FaSignOutAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logicgyan.webp";

const menus = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <FaTachometerAlt />,
    },
    {
        name: "Students",
        path: "/students",
        icon: <FaUserGraduate />,
    },
    {
        name: "Courses",
        path: "/courses",
        icon: <FaBook />,
    },
    {
        name: "Batches",
        path: "/batches",
        icon: <FaLayerGroup />,
    },
    {
        name: "Enrollments",
        path: "/enrollments",
        icon: <FaClipboardList />,
    },
    {
        name: "Affiliate",
        path: "/affiliate",
        icon: <FaHandshake />,
    },
    {
        name: "Trainers",
        path: "/trainers",
        icon: <FaChalkboardTeacher />,
    },
];

function Sidebar() {
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <aside className="sidebar">

            <div className="text-center py-4 border-bottom">

                <img
                    src={logo}
                    alt="LogicGyan"
                    className="logo img-fluid"
                />

            </div>

            <div className="mt-4">

                {menus.map((menu) => (
                    <NavLink
                        key={menu.path}
                        to={menu.path}
                        className={({ isActive }) =>
                            `sidebar-link ${isActive ? "active" : ""}`
                        }
                    >
                        <span className="icon">{menu.icon}</span>

                        <span>{menu.name}</span>
                    </NavLink>
                ))}

            </div>

            <div className="mt-auto p-3">

                <button
                    className="logout-btn w-100"
                    onClick={logout}
                >
                    <FaSignOutAlt />
                    Logout
                </button>

            </div>

        </aside>
    );
}

export default Sidebar;