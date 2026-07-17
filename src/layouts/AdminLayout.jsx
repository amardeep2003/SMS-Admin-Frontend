import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

function AdminLayout() {
    return (
        <>
            <Sidebar />

            <div className="main">

                <Header />

                <div className="page">

                    <Outlet />

                </div>

            </div>
        </>
    );
}

export default AdminLayout;