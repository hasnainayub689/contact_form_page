import React from 'react';
import Lottie from 'lottie-react';
import logoAnimation from '../../public/img/Logo_Animation - 1708783223475.json';
import './navbar.css';

function Navbar() {
    return (
        <nav className="main_nav">
            <div className="logo">
                <Lottie
                    className="logo_animation"
                    animationData={logoAnimation}
                />
            </div>
            <div>
                <ul className="main_ul">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
