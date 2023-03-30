/* eslint-disable jsx-quotes */
import React from 'react';
import Header from 'components/Header';
import FeaturedProjects from 'components/FeaturedProjects';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <div className="scroll" aria-hidden="true">
        <p className="arrow"><i className="fa-solid fa-arrow-down" /></p>
        <p className="scroll-text">Lets scroll</p>
      </div>
      <main>
        <section lang="en-US" className="tech" title="Information about tech-stack" aria-label="Information about tech-stack">
          <h2>Tech</h2>
          <p>
            HTML, CSS, Flexbox, <mark className="pink-bg-text">JavaScript,</mark> ES6, JSX,
            <mark className="blue-bg-text">React,</mark> React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s,
            <mark className="light-blue-bg-text">mob-programming,</mark> pair-programming, Github.
          </p>
        </section>
        <section lang="en-US" className="featured-projects" title="Fanny's featured projects" aria-label="List of Fanny's featured projects">
          <h2 lang="en" className="featuredProjectsTitle">Featured Projects</h2>
          <FeaturedProjects
            imgSrc="../images/happy-thoughts.png"
            title="Happy Thoughts"
            description="Created a Twitter-inspired product, but with less negativity, using React state and fetching/posting data to an API."
            githubLink="project-happy-thoughts"
            netlifyLink="happy-thoughts-byfanny" />
          <FeaturedProjects
            imgSrc="../images/survey.png"
            title="Survey"
            description="Made a survey design and created a Typeform-like product using React state and controlled form."
            githubLink="project-survey"
            netlifyLink="green-survey" />
          <FeaturedProjects
            imgSrc="../images/music-releases.png"
            title="Music releases"
            description="Followed a design and created components using React to build a page which shows new albums and single releases
             by using data from Spotify. Created an extra component to show playlists in a sidebar. This was my first project in React."
            githubLink="project-music-releases"
            netlifyLink="extraordinary-macaron-fce4c5" />
        </section>
      </main>
      <aside>
        Skills
      </aside>
      <Footer />
    </>
  )
}
