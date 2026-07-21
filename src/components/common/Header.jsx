import { FaBars, FaSearch } from "react-icons/fa";

function Header() {
    const admin = JSON.parse(localStorage.getItem("admin"));

    return (
        <header className="header">

            {/* Left */}

            <div className="d-flex align-items-center gap-3">

                <button className="menu-btn mobile-menu">
                    <FaBars />
                </button>

                {/* <div className="search-box position-relative">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        className="form-control ps-5"
                        placeholder="Search Students, Courses..."
                    />

                </div> */}

            </div>

            {/* Right */}

            <div className="d-flex align-items-center gap-3">

                {/* <button className="header-icon">

                    <FaMoon />

                </button>

                <button className="header-icon position-relative">

                    <FaBell />

                    <span className="notify-dot"></span>

                </button> */}

                <div className="d-flex align-items-center gap-2">

                    <div className="profile-circle">

                        {admin?.name?.charAt(0).toUpperCase()}

                    </div>

                    <div>

                        <h6 className="m-0 fw-bold">{admin?.name}</h6>

                        <small className="text-muted">{admin?.email}</small>

                    </div>

                </div>

            </div>

        </header>
    );
}

export default Header;