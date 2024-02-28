import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useToken } from "../store/AuthContext";

function Logout() {
  const { LogoutUser } = useToken();
  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
}

export default Logout;
