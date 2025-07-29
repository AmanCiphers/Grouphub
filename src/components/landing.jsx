import logo from "../assets/Logo.svg";
import heroimage from "../assets/group-1-photo.png";
import "./landing.css";
import React, { useState } from "react";
import { Menu, X } from 'lucide-react'

const LandingPage = () => {
  return (
    <>
      <div className="mainPage">
        <div className="nav-container">
          <Navbar></Navbar>
        </div>

        <div className="box1-container">
          {/* <Box1></Box1> */}
        </div>

        <div className="box2-container">
          {/* <Box2></Box2> */}
        </div>
      </div>
    </>
  );
};


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <>
      <div className="navbar">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>

        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? <X className="X"/> : <Menu />}
        </div>

        <div className={`navlinks-container ${isOpen ? 'open' : ''}`}>
          <ul className="nav-left">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#tutorials">Tutorials</a></li>
            <li><a href="#tutorials">LeaderBoard</a></li>
            <li><a href="#tutorials">Contribute</a></li>
            <li><a href="#projects">Find Projects</a></li>
          </ul>

          <ul className="nav-right">
            <li><a href="#account" className="black">Account</a></li>
            <li><a href="#dashboard" className="black">Dashboard</a></li>
          </ul>

        </div>
      </div>
    </>
  );
}

const Box1 = () => {

  return (
    <>
      <div className="box1">
        <div className="textcontainer">
          <div className="herotext">
            <h1>Build Together, Smarter</h1>
            <h2>Find Projects     | Join Teams</h2>
            <h2>Create projects | Make Teams</h2>
            <h3>An AI-powered platform to join or create group projects, collaborate, and grow no experience needed.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

const Box2 = () => {
  return (
    <div className="box box2">
      <ul>{/* optional nav links */}</ul>

      <div className="img">
        <img src={heroimage} alt="heroimage" />
      </div>

      <div className="bigimage">
        <img src={logo} alt="big logo" />
      </div>
    </div>
  );
};







export default LandingPage;
