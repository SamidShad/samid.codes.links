import React from "react";
import { FaGithub, FaInstagram, FaLaptop, FaTwitter } from "react-icons/fa";
import profilePic from "./assets/profilepic.png";
import "./App.scss";

function App() {
  return (
    <>
      <div className="nav_area">
        <nav className="navbar">
          <h1 className="logo">@samid.codes</h1>
        </nav>
      </div>
      <div className="banner"></div>
      <div className="main_page"></div>
      <div className="profile_area">
        <img className="profile_pic" src={profilePic} alt="samid.codes" />
        <div className="profile_details">
          <h1 className="profile_name">Samid.Codes</h1>
          <p className="profile_description">Web Developer</p>
          <p className="profile_description">
            "I help entrepreneurs through my skills"
          </p>
        </div>
      </div>
      <div className="link_page">
        <div className="link_card">
          <div className="link_description">
            <FaGithub className="link_icons" />
            <h1>GitHub</h1>
            <p>
              Check out my GitHub profile for a collection of my coding projects
              and contributions.
            </p>

            <a
              className="linkUrl"
              href="https://www.github.com/samidshad/"
              target="_blank"
            >
              <button className="btn">Check out</button>
            </a>
          </div>
        </div>
        <div className="link_card">
          <div className="link_description">
            <FaInstagram className="link_icons" />
            <h1>Instagram</h1>
            <p>
              Follow for web dev inspiration: projects, ideas, and coding
              artistry. Let's create together!
            </p>
            <a
              className="linkUrl"
              href="https://www.instagram.com/samid.codes/"
              target="_blank"
            >
              <button className="btn">Check out</button>
            </a>
          </div>
        </div>
        <div className="link_card">
          <div className="link_description">
            <FaTwitter className="link_icons" />
            <h1>Twitter</h1>
            <p>
              Follow me on Twitter for web dev inspiration: projects, ideas,
              coding artistry. Let's create together!
            </p>

            <a
              className="linkUrl"
              href="https://twitter.com/SamidShad"
              target="_blank"
            >
              <button className="btn">Check out</button>
            </a>
          </div>
        </div>
        <div className="link_card">
          <div className="link_description">
            <FaLaptop className="link_icons" />
            <h1>Portfolio</h1>
            <p>Busy to build my protfolio website soon it will be published</p>
            <button className="disbtn">On progress</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
