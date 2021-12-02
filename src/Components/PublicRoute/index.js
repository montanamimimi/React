import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import { selectAuthed } from "../../Store/profile/selectors";

export const PublicRoute = ({ children }) => {
    const authed = useSelector(selectAuthed);
    return !authed ? children : <Navigate to="/chats" replace />;
};

export const PublicOutlet = () => {
    const authed = useSelector(selectAuthed);
    return !authed ? <Outlet /> : <Navigate to="/chats" replace />;
}