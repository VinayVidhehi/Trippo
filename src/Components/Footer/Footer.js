import React from 'react'
import "./Footer.css";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-main-container'>
        <div className="footer-hero">
            <h2>Trippo</h2>
            <div className="links">
                <a href="">Alphas</a>
                <a className='login' href="">Login</a>
            </div>
            <div className="socials">
                <a href=""><FaInstagram /></a>
                <a href=""><FaXTwitter /></a>
                <a href=""><FaFacebookF /></a>
            </div>
            <div className="copyright">
                <p>© 2023 Trippo Technologies Inc.</p>
            </div>
            <div className="privacy">
                <a href="">Privacy</a>
                <a href="">Terms</a>
                <a href="">Developers</a>
            </div>
        </div>
        
    </div>
  )
}

export default Footer