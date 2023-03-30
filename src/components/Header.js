/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../Header.css';

const Header = () => {
  return (
    <header>
      <div className="picture" aria-hidden="true">
        <img className="cover" src="../images/portfolio-cover.png" alt="portfolio cover" />
      </div>
      <div className="header-container">
        <div className="myProfilePic">
          <img className="profile-pic" src="../images/img_3060.jpg" alt="profile image of Fanny" />
        </div>
        <div className="nameAndTitle" lang="en-US">
          <h1 className="name">Fanny Stenberg</h1>
          <h2 className="title">Frontend Developer</h2>
        </div>
        <div className="introduction" lang="en-US">
          <p>
          Happy to see that you have found your way to my portfolio - nice to meet you! 👋<br />
          After working with customers in various roles for the past 10 years I am currently
          changing career to tech. As a result, I have extensive experience as a user in different
          business systems and I am eager to explore how I can leverage this knowledge as
          a developer.<br /> I enjoy being proactive and have a strong sense of ownership
          and responsibility. I thrive in team-oriented environments that foster growth and
          encourage improvement, both as individuals and team.<br />
          As I enter my new career path, I am excited to learn and share knowledge.
          </p>
        </div>
        <div className="contact-me">
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
      </div>
    </header>
  )
};

export default Header;