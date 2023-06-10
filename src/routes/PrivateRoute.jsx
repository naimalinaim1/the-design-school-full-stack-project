import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContent } from "../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContent);
  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <p className="text-blue-500">Loading...</p>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
