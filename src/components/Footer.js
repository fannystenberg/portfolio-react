/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import ContactInfo from './ContactInfo';

const Footer = () => {
  return (
    <footer>
      <h2>Time to talk</h2>
      <div className="about-me">
        <div className="myProfileImg">
          <img
            className="profile-pic"
            src="../images/img_3060.jpg"
            alt="profile image of Fanny" />
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
        <ContactInfo />
      </div>
    </footer>
  );
};

export default Footer;
