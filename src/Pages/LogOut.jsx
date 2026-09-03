import {useNavigate} from "react-router-dom";

function LogOut() 
{
    var navigate = useNavigate();
    const handleLogout = () => 
        {
            localStorage.removeItem("isLoggedIN");
            navigate("/login");
        }
    return(<><h5>This is LogOut Page</h5>
    <button onClick={handleLogout}>LogOut</button>
    
    </>)

      
}
export default LogOut;