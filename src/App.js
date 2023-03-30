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
        <FeaturedProjects />
      </main>
      <aside>
        Skills
      </aside>
      <Footer />
    </>
  )
}
