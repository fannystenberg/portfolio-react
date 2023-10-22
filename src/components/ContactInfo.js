import React from 'react';

const ContactInfo = () => {
  return (
    <>
      <a
        hrefLang="en-US"
        className="icon"
        title="link to Fanny's Linked In page"
        href="https://www.linkedin.com/in/fanny-stenberg/"
        target="_blank"
        rel="noreferrer">
        <i aria-hidden="true" className="fab fa-linkedin-in" />
      </a>
      <a
        hrefLang="en-US"
        className="icon"
        title="link to Fanny's Github page"
        href="https://github.com/fannystenberg"
        target="_blank"
        rel="noreferrer">
        <i aria-hidden="true" className="fab fa-github" />
      </a>
      <a
        hrefLang="en-US"
        className="icon"
        title="link to Fanny's mail"
        href="mailto:ffannystenberg@gmail.com"
        target="_blank"
        rel="noreferrer">
        <i aria-hidden="true" className="fa-solid fa-envelope" />
      </a>
    </>
  );
};

export default ContactInfo;
