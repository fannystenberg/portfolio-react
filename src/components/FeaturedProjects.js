import React from 'react';

const FeaturedProjects = ({ imgSrc, title, description, githubLink, netlifyLink }) => {
  return (
    <div lang="en-US" className="project">
      <div className="projectPicture" aria-hidden="true">
        <img src={imgSrc} alt="" />
      </div>
      <div className="project-info" aria-label="Information about the project">
        <h3 lang="en">{title}</h3>
        <p lang="en">{description}</p>
        <ul lang="en" className="project-languages" aria-label="Coding languages used in this project">
          <li lang="en">HTML</li>
          <li lang="en">CSS</li>
          <li lang="en">JavaScript</li>
          <li lang="en">React</li>
          <li lang="en">JSX</li>
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