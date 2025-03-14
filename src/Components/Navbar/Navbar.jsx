import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './Components/NavLinks';

function Navbar() {
    return (
        <nav className='border-b-2 border-b-dark-color-12'>
            <div className='container flex items-center justify-between py-3'>
                {/* App Logo */}
                <Link
                    to={``}
                    className='uppercase font-semibold text-xl'
                >BA7R</Link>
                {/* Nav Links */}
                <NavLinks />
                {/* Contact Link */}
                <Link
                    to={`/contact`}
                    className="btn"
                >Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar;