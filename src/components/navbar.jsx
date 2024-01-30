import React from "react";

function Navbar() {
    return (
        <div>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;