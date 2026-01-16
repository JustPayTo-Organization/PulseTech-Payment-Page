// Layout.tsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Landing from "../pages/Landing";
import Transactions from "../pages/Transactions";
import Withdrawal from "../pages/Withdrawal";
import Login from "../pages/Login";
import ChangePass from "../pages/ChangePass";

export default function Layout() {  
    const location = useLocation();

    // hide sidebar on login page
    const hideSidebar = location.pathname === "/login" || location.pathname === "/changepass";

    return (
        <div className="h-screen flex overflow-hidden">
            {!hideSidebar && <Sidebar />}
            {/* Body */}
            <div className="flex-1 min-h-screen bg-slate-50/50 overflow-y-auto">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to="/login" replace />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/withdrawal" element={<Withdrawal />} />
                    <Route path="/changepass" element={<ChangePass />} />
                </Routes>
            </div>
        </div>
    );
}
