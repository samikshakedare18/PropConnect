import { Outlet, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedRoute()
{
// const navigation=useNavigate();
// const isLoggedIn=localstorage.getItem("isLoggedIN")
// if(!isLoggedIN)
// return <Navigate  to="/login" />
// return <Outlet />
const isLoggedIn=localStorage.getItem("isLoggedIN")==="true";
console.log("Login valid in ProtectedRoute:", isLoggedIn);
return isLoggedIn? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoute;