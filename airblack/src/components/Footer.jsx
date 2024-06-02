import React from 'react';
import './css/Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: './images/image.png' }}>
      <div className="footer-header">Join our growing <br></br>community of<br></br>35,000+ alumni</div>

      <button className="apply-button">Apply Now</button>
      <div className="social-icons">
        <FaInstagram className="icon" />
        <FaFacebookF className="icon" />
        <FaLinkedinIn className="icon" />
        <FaTwitter className="icon" />
      </div>
    </div>
  );
}

export default Footer;
