import Image from "next/image";
import React from "react";
import Logo from "../../public/logo-white.svg";
import Facebook from "../../public/face.svg";
import Twitter from "../../public/twit.svg";
import Pinterest from "../../public/pint.svg";
import Instagram from "../../public/insta.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2>Boost your links today</h2>
        <button className="sign get">Get Started</button>
      </div>
      <div className="footer-bottom">
        <div className="container footer-items">
          <a href="#">
            <Image src={Logo} alt="logo-white" />
          </a>
          <div className="footer-list">
            <div className="footer-ul">
                   <ul>
                <h6>Features</h6>
                <li>Link Shortening</li>
                <li>Branded Links</li>
                <li>Analytics</li>
            </ul>
            <ul>
                <h6>Resources</h6>
                <li>Blog</li>
                <li>Developers</li>
                <li>Developers</li>
            </ul>
            <ul>
                <h6>Company</h6>
                <li>About</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Careers</li>
            </ul>
            </div>
       
            <ul className="social">
                <li><Image src={Facebook} alt="facebook"/></li>
                <li><Image src={Twitter} alt="twitter"/></li>
                <li><Image src={Pinterest} alt="pinterest"/></li>
                <li><Image src={Instagram} alt="instagram"/></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
