import React from 'react';
import linksData from '../../../Data/navLinks.json';
import { NavLink } from 'react-router-dom';

function NavLinks() {
    return (
        <ul className='nav-links flex items-center -mb-5 max-lg:hidden'>
            {
                linksData.map((link, index) => <li key={index}>
                    <NavLink
                        to={link.to}
                        className={({ isActive }) => `block py-3 px-5 transition border-2 border-b-0 border-r-0 border-dark-color-12 ${(index === 0) ? 'rounded-tl-md' : index === (linksData.length - 1) ? 'rounded-tr-md border-r-2' : ''} ${isActive ? 'bg-dark-color-8' : 'sm:hover:bg-dark-color-8'}`}
                    >{link.label}</NavLink>
                </li>)
            }
        </ul>
    )
}

export default NavLinks;