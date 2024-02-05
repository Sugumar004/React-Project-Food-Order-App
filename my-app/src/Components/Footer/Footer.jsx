
import React from 'react';
import { FaInfoCircle, FaTruck, FaPhoneAlt, FaShareSquare,FaFacebookSquare ,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

import './Footer.css'; // Import your CSS file for Footer styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-column">
          <h4><FaInfoCircle /> About Us</h4><br></br>
          <p> About our online <br></br> food delivery service.</p>
        </div>
        <div className="footer-column">
          <h4><FaTruck /> Services</h4>
          <br></br>
          <ul>
            <li><FaTruck /> Delivery</li>
            <li><FaTruck /> Pick-up</li>
            <li><FaTruck /> Order Tracking</li>
            <li><FaTruck /> Customer Support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4><FaPhoneAlt /> Contact Us</h4>
          <br></br>
          <p><MdLocationOn /> 123 Street Name, City</p>
          <p><MdEmail /> Email: info@example.com</p>
          <p><BiSolidContact /> Phone: +1234567890</p>
        </div>
        <div className="footer-column">
          <h4><FaShareSquare /> Social Media</h4>
          <br></br>
          <ul>
            <li><FaFacebookSquare /> Facebook</li>
            <li><FaTwitter /> Twitter</li>
            <li><FaInstagram/> Instagram</li>
            <li><FaLinkedin /> LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
