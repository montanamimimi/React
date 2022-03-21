import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { selectAuthed } from "../../Store/profile/selectors";

export const PrivateRoute = ({ children }) => {
    const authed = useSelector(selectAuthed);
    return authed ? children : <Navigate to="/" replace />;
};