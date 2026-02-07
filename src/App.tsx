import './App.css';
import Landing from '../pages/Landing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "../components/SuccessModal";
// import PaymentFailed from "../components/FailedModal";
// import PaymentPending from "../components/PendingModal";

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
