import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwtToken'); // Remove the JWT token from local storage
        navigate('/signin'); // Redirect to the signin page
    };

    return (
        <div>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li onClick={handleLogout}>Logout</li> {/* Add an onClick handler to the Logout list item */}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;