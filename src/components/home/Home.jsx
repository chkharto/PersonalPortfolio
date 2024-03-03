import React from "react";
import "./home.css";
import userImage from "../../user.png";
import work1 from "../../project1.png";
import work2 from "../../catalog.png";
import work3 from "../../project3.png";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      {/* ----------about---------- */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={userImage} alt="user" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>
                Hello, i'm Frontend Web Developer. i am a student at the Sokhumi
                State University in Tbilisi.I am in the second year at the
                Faculty of Computer Technology.
              </p>

              <div className="tab-title">
                <p className="tab-links">Skills</p>
              </div>
              <div className="skills">
                <li>HTML</li>
                <br />
                <li>CSS</li>
                <br />
                <li>JS(basic)</li>
                <br />
                <li>React js</li>
                <br />
                <li>Wordpress(basic)</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------------portfolio------------- --> */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={work1} alt="work" />
              <div className="layer">
                <h3>Sign in/up</h3>
                <p>
                  this is sign in and sign up website where you can sign in/up,
                  log out and change your password.
                </p>
                <a href="https://chkharto.github.io/photo-editor/">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work2} alt="work2" />
              <div className="layer">
                <h3>Movie Catalog</h3>
                <p>
                  On this site you can search any kind of movie or tv show and
                  it will show results.
                </p>
                <a href="https://chkharto.github.io/Movie-Catalog/">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="work">
              <img src={work3} alt="work3" />
              <div className="layer">
                <h3>Weather App</h3>
                <p>
                  This is weather app where you can find weather in any part of
                  the world.
                </p>
                <a href="https://chkharto.github.io/React-Weather-App/">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- --------------contact--------------- --> */}
      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contact-left">
              <h1 class="sub-title">Contact Me</h1>
              <p>
                <SiGmail className="i" />
                dato.chkhartishvili24@gmail.com
              </p>
              <p>
                <FaSquarePhoneFlip className="i" /> +995 598 18 12 88
              </p>
            </div>
            <div class="contact-right t">
              <div class="social-icons">
                <a href="https://www.facebook.com/dato.chxartishvili.96">
                  <FaFacebook className="i" />
                </a>
                <a href="https://www.instagram.com/dato.chkhartishvilii/">
                  <FaInstagram className="i" />
                </a>
                <a href="https://github.com/chkharto">
                  <FaGithub className="i" />
                </a>
                <a href="https://www.linkedin.com/in/%E1%83%93%E1%83%90%E1%83%97%E1%83%9D-%E1%83%A9%E1%83%AE%E1%83%90%E1%83%A0%E1%83%A2%E1%83%98%E1%83%A8%E1%83%95%E1%83%98%E1%83%9A%E1%83%98-5194b029a/">
                  <FaTwitter className="i" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
