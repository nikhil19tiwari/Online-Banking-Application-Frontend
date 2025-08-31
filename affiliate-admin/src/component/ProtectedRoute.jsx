import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("Authorization"); // JWT token check
  if (!token) {
    return <Navigate to="/" replace />; // redirect to login
  }
  return children;
};

export default ProtectedRoute;
