import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const navigate=useNavigate();
    // localStorage.setItem("isLoggedIN", "true");
    const [user, setUser] = useState({"uemail":"", "upassword":""});

    var acceptData=(event)=>{
        var key=event.target.id;
        var value=event.target.value;
        setUser({...user, [key]: value});
        console.log("user:", user);
    }

    const handleSubmit=(event)=>{
           
        if(user.uemail==='admin@gmail' && user.upassword==='123')
        {
            localStorage.setItem("isLoggedIN", "true");

            const isLoggedIn=localStorage.getItem("isLoggedIN")==="true";
            console.log("Login valid in login Page:", isLoggedIn);
            navigate("/");
        }

        event.preventDefault();
    }

    return (
        <div>
            <h5>This is Login Page</h5>

            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" id="uemail" onChange={acceptData} />

                <label>Password</label>
                <input type="password" id="upassword" onChange={acceptData} />

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;