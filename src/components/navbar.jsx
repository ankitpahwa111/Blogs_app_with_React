import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (

        <nav className='nav-wrapper blue darken-1'>
            <div className="container">
                <a href="/" className="brand-logo">BLOGS</a>
                <ul className='right'>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/About'>ABOUT</Link></li>
                    <li><Link to='/Contact'>CONTACT</Link></li>
                </ul>
            </div>

        </nav>

    )
}
export default Navbar;