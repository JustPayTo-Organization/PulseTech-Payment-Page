<<<<<<< HEAD
import './App.css';
import Landing from '../pages/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import SuccessModal from "../components/modals/SuccessModal";
// import FailedModal from "../components/modals/FailedModal";
// import PendingModal from "../components/modals/PendingModal";
import Confirm from "../pages/Confirm";
import NotFound from "../pages/NotFound";
import StatusPage from "../pages/StatusPage";

function App() {

    const website_base_url = import.meta.env.VITE_WEBSITE_URL;

    if (window.location.pathname === "/") {
        window.location.replace(website_base_url); // replaces history entry
    }

  return (
    <>
      <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to={`/${website_base_url}`} replace />} /> */}
        <Route path="/:merchant_username" element={<Landing />} />
        {/* <Route path="/:merchant_username/status/success" element={<SuccessModal />} />
        <Route path="/:merchant_username/status/failed" element={<FailedModal />} />
        <Route path="/:merchant_username/status/pending" element={<PendingModal />} /> */}
        <Route path="/:merchant_username/status" element={<StatusPage />} />
        <Route path="/:merchant_username/confirm" element={<Confirm />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
=======
// import Login from './pages/Login'
import { BrowserRouter } from "react-router-dom";
import Layout from './layouts/Layout';

function App() {

  return (
    <>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
>>>>>>> 7bc08ca0bb4219182d20a8d60b7654c44f910c8b
    </>
  )
}

export default App
