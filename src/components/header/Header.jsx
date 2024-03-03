import React from 'react';
import "./header.css";
import { FaReact, FaHtml5, FaCss3, FaJs, FaWordpress } from "react-icons/fa";


const Header = () => {
  return (
    <div className="header">
        <div className="container">
            <nav>
                <h1>Personal Portfolio</h1>
                <ul id="show">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="header-text">
                <p>Frontend Web Developer</p>
                <h1>Hi, I'm <span>Dato</span> <br /> Chkhartishvili</h1>
            </div>
            <div className="icons">
                <FaReact className='icon1' />
                <FaJs className='icon2' />
                <FaHtml5 className='icon3' />
                <FaCss3 className='icon4' />
                <FaWordpress className='icon5' />
            </div>
        </div>
    </div>
  )
}

export default Header;