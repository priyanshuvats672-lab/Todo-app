import { Navigate, useLocation } from "react-router-dom";
import useUser from "../context/userContext";

export default function ProtectedRoute({ children }) {
    const { user } = useUser();
    const location = useLocation();

    if (user) {
        return children;
    }

    return <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
    />;
}