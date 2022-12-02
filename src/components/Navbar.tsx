import './Navbar.css';

import React from 'react';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie />Movies
                </Link>
            </h2>
        </nav>
    )
}