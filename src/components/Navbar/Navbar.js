import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (





        <div >
            <ul className="d-flex link-list ">
                <Link to="/home">Home</Link>

                <Link to="/about">About Us</Link>

                <Link to="/activities">Activities</Link>

                <Link to="/services">Services</Link>

            </ul>

        </div>




    );
};

export default Navbar;