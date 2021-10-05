import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="mt-1 bg-dark text-light">
            <div className="footer-container d-flex">

                <div className="col-md-4">
                    <h2 className="ps-4 mt-4 footer-header">Enjoy learning</h2>

                </div>
                {/* 
                link-list */}
                <div className="col-md-4 mt-6 ">

                    <ul className="footer-menu mt-4 pe-4">


                        <li>Help</li>
                        <li>FAQ</li>
                        <li>contact us</li>
                        <li>Apply</li>
                        <li>Blog</li>
                    </ul>

                </div>
                {/* icon */}

                <div className="col-md-4 ps-4 social-icon">

                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-twitter-square"></i>
                    <br />

                </div>

            </div>
            {/* copyright */}
            <div>
                <p className="footer-text"> <i class="far fa-copyright"></i>Copyright 2021.All rights resreved. </p>

            </div>
        </div>
    );
};

export default Footer;