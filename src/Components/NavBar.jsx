import {Link} from 'react-router-dom'
function NavBar() 
{
return (<div>
    <div className='navbar'>

    <div>
        <h4>PropConnect</h4>
    </div>
    <div className='nav-links'>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/aboutus">About Us</Link>
    <Link to="/contactus">Contact Us</Link>
    <Link to="/favorite">Favorite</Link>
    <Link to="/logout">LogOut</Link>
    </div>
    </div>

</div>)
}

export default NavBar;