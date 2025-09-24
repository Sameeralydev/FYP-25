import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  // agar user login nahi hai to Home pe bhejo
  if (!user) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;