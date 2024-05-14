import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <>
      {toast.error("For This Action You Need to Login")}
      <Navigate state={location.pathname} to="/login"></Navigate>;
    </>
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.any,
};

export default PrivateRoute;
