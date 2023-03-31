import React from 'react';
import Header from 'components/Header';
import FeaturedProjects from 'components/FeaturedProjects';
import Footer from 'components/Footer';
import Tech from 'components/Tech';
import Skills from 'components/Skills';

export const App = () => {
  return (
    <>
      <Header />
      <div className="scroll" aria-hidden="true">
        <p className="arrow"><i className="fa-solid fa-arrow-down" /></p>
        <p className="scroll-text">Lets scroll</p>
      </div>
      <main>
        <Tech />
        <section lang="en-US" className="featured-projects" title="Fanny's featured projects" aria-label="List of Fanny's featured projects">
          <h2 lang="en" className="featuredProjectsTitle">Featured Projects</h2>
          <FeaturedProjects
            imgSrc="../images/movies.png"
            title="Movies"
            description="Created a movie site with multiple pages using React Router and APIs combining useState with useEffect."
            language1="React"
            language2="JSX"
            language3="Pair-programming"
            githubLink="project-movies"
            netlifyLink="movie-releases-by-fanny-and-fiona" />
          <FeaturedProjects
            imgSrc="../images/happy-thoughts.png"
            title="Happy Thoughts"
            description="Created a Twitter-inspired product, but with less negativity, using React state and fetching/posting data to an API."
            language1="React"
            language2="JSX"
            language3="no"
            githubLink="project-happy-thoughts"
            netlifyLink="happy-thoughts-byfanny" />
          <FeaturedProjects
            imgSrc="../images/survey.png"
            title="Survey"
            description="Made a survey design and created a Typeform-like product using React state and controlled form."
            language1="React"
            language2="JSX"
            language3="no"
            githubLink="project-survey"
            netlifyLink="green-survey" />
          <FeaturedProjects
            imgSrc="../images/music-releases.png"
            title="Music releases"
            description="Followed a design and created components using React to build a page which shows new albums and single releases
             by using data from Spotify. Created an extra component to show playlists in a sidebar. This was my first project in React."
            language1="React"
            language2="JSX"
            language3="Pair-programming"
            githubLink="project-music-releases"
            netlifyLink="extraordinary-macaron-fce4c5" />
          <FeaturedProjects
            imgSrc="../images/weather-app.png"
            title="Weather app"
            description="Followed a design and built a simple weather dashboard that tells today's weather, temperature and a 5-day forecast using a weather API."
            language1="Pair-programming"
            language2="no"
            language3="no"
            githubLink="project-weather-app"
            netlifyLink="weather-app-byannafannyfiona" />
          <FeaturedProjects
            imgSrc="../images/guess-who.png"
            title="Guess who the game"
            description="Created a digital version of the classic board game Guess who."
            language1="no"
            language2="no"
            language3="no"
            githubLink="project-guess-who"
            netlifyLink="guess-who-byfannystenberg" />
          <FeaturedProjects
            imgSrc="../images/chatbot.png"
            title="Chatbot built in JS"
            description="Built a chatbot that gives you recommendations for restaurants in Stockholm depending on your pick of cuisine. This was my first project in JavaScript."
            language1="no"
            language2="no"
            language3="no"
            githubLink="project-chatbot"
            netlifyLink="theguide-chatbot" />
        </section>
      </main>
      <Skills />
      <Footer />
    </>
  )
}
