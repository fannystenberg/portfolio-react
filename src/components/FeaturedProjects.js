import React from 'react';

const FeaturedProjects = (
  { imgSrc, title, description, language1, language2, language3, githubLink, netlifyLink }
) => {
  return (
    <div lang="en-US" className="project">
      <div className="projectPicture" aria-hidden="true">
        <img src={imgSrc} alt="" />
      </div>
      <div className="project-info" aria-label="Information about the project">
        <h3 lang="en">{title}</h3>
        <p lang="en">{description}</p>
        <ul lang="en" className="project-languages" aria-label="Coding languages used in this project">
          <li lang="en" className="showList">HTML</li>
          <li lang="en" className="showList">CSS</li>
          <li lang="en" className="showList">JavaScript</li>
          <li lang="en" className={language1.length <= 2 ? 'hideList' : 'showList'}>{language1}</li>
          <li lang="en" className={language2.length <= 2 ? 'hideList' : 'showList'}>{language2}</li>
          <li lang="en" className={language3.length <= 2 ? 'hideList' : 'showList'}>{language3}</li>
        </ul>
        <button
          lang="en"
          type="button"
          className="view-code"
          title="link to project on Github"
          aria-label="View code on Github"
          onClick={() => window.open(`https://github.com/fannystenberg/${githubLink}`)}>
          <span><i aria-hidden="true" className="fab fa-github" /></span>
            View the code
        </button>
        <button
          lang="en"
          type="button"
          className="live-demo"
          title="link to project on Netlify"
          aria-label="View project live in Netlify"
          onClick={() => window.open(`https://${netlifyLink}.netlify.app/`)}>
          <span><i aria-hidden="true" className="fa-solid fa-globe" /></span>
            Live demo
        </button>
      </div>
    </div>
  )
};
export default FeaturedProjects;