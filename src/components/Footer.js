/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <h2>Time to talk</h2>
      <div className="about-me">
        <div className="myProfileImg">
          <img className="profile-pic" src="../images/img_3060.jpg" alt="profile image of Fanny" />
        </div>
        <div className="nameTitle" lang="en-US">
          <h1 className="name">Fanny Stenberg</h1>
          <h2 className="title">Frontend Developer</h2>
        </div>
      </div>
      <div className="phoneAndMail" lang="en-US">
        <p>+46(0) 767 16 47 19</p>
        <p>ffannystenberg@gmail.com</p>
      </div>
      <div className="contactMe">
        <a hrefLang="en-US" className="icon" title="link to Fanny's Linked In page" href="https://www.linkedin.com/in/fanny-stenberg/" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fab fa-linkedin-in" />
        </a>
        <a hrefLang="en-US" className="icon" title="link to Fanny's Github page" href="https://github.com/fannystenberg" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fab fa-github" />
        </a>
        <a hrefLang="en-US" className="icon" title="link to Fanny's mail" href="mailto:ffannystenberg@gmail.com" target="_blank" rel="noreferrer">
          <i aria-hidden="true" className="fa-solid fa-envelope" />
        </a>
      </div>
    </footer>
  )
};

export default Footer;