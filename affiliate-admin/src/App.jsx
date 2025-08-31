import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminLogin from "./component/AdminLogin";
import Landing from "./DashBoard.jsx/Landing";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/dashboard" element={<ProtectedRoute><Landing /></ProtectedRoute>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
