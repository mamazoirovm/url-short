"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import Bars from "../../public/bars.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="container navbar-flex ">
        <a className="logo" href="#">
          <Image src={Logo} alt="logo-url-shotening" />
        </a>
        <div className="navabr-left">
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <div className="navbar-right">
            <a className="login" href="#">
              Login
            </a>
            <a className="sign" href="#">
              Sign Up
            </a>
          </div>
        </div>

        <button className="menus" onClick={toggleOverlay}>
          <Image src={Bars} alt="menus" />
        </button>
      </div>
      {isOpen && (
        <div className="overlay" onClick={toggleOverlay}>
          <div className="modal">
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
            <a className="login" href="#">
              Login
            </a>
            <a className="sign" href="#">
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
