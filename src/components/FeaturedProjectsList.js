import React from 'react';
import styled from 'styled-components';
import FeaturedProject from './FeaturedProjects';

const Projects = [
  {
    imageSrc: '../images/todo.png',
    title: 'ToDo App',
    description: 'Designed and built a to-do app with Redux by creating slices, reducers and actions from scratch. I also used Material UI for the first time.',
    languages: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
    githubLink: 'project-todos',
    netlifyLink: 'todo-app-byfanny'
  },
  {
    imageSrc: '../images/quiz.png',
    title: 'Redux Quiz',
    description: 'Created a multiple-choice quiz with Redux, the assignment was to interact with the store using selectors and dispatching actions. This was my first project in Redux.',
    languages: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
    githubLink: 'project-redux-quiz',
    netlifyLink: 'neon-souffle-d2a8b2'
  },
  {
    imageSrc: '../images/ux-design.png',
    title: 'Collab with UX-designer',
    description: 'I was given a design hand-off from UX-design student Linnéa Rådahl. The assignment was to transform that design into code with React.',
    languages: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux'],
    githubLink: 'project-design-handoff',
    netlifyLink: 'fictious-gym-developedbyfanny'
  },
  {
    imageSrc: '../images/movies.png',
    title: 'Movies',
    description: 'Created a movie site with multiple pages using React Router and APIs combining useState with useEffect.',
    languages: ['HTML', 'CSS', 'JavaScript', 'React', 'JSX', 'Redux', 'Pair-programming'],
    githubLink: 'project-movies',
    netlifyLink: 'movie-releases-by-fanny-and-fiona'
  }
];

const FeaturedProjectsList = () => {
  return (
    <Section lang="en-US" className="featured-projects" title="Fanny's featured projects" aria-label="List of Fanny's featured projects">
      <SectionHeader lang="en">Featured Projects</SectionHeader>
      {Projects.map((project) => {
        return (
          <FeaturedProject
            key={project.imageSrc}
            imgSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            languages={project.languages.map(
              (language) => <Language key={language}>{language}</Language>
            )}
            githubLink={project.githubLink}
            netlifyLink={project.netlifyLink} />
        )
      })}
      <FeaturedProject
        imgSrc="../images/happy-thoughts.png"
        title="Happy Thoughts"
        description="Created a Twitter-inspired product, but with less negativity, using React state and fetching/posting data to an API."
        language1="React"
        language2="JSX"
        language3="no"
        githubLink="project-happy-thoughts"
        netlifyLink="happy-thoughts-byfanny" />
      <FeaturedProject
        imgSrc="../images/survey.png"
        title="Survey"
        description="Made a survey design and created a Typeform-like product using React state and controlled form."
        language1="React"
        language2="JSX"
        language3="no"
        githubLink="project-survey"
        netlifyLink="green-survey" />
      <FeaturedProject
        imgSrc="../images/music-releases.png"
        title="Music releases"
        description="Followed a design and created components using React to build a page which shows new albums and single releases
           by using data from Spotify. Created an extra component to show playlists in a sidebar. This was my first project in React."
        language1="React"
        language2="JSX"
        language3="Pair-programming"
        githubLink="project-music-releases"
        netlifyLink="extraordinary-macaron-fce4c5" />
      <FeaturedProject
        imgSrc="../images/weather-app.png"
        title="Weather app"
        description="Followed a design and built a simple weather dashboard that tells today's weather, temperature and a 5-day forecast using a weather API."
        language1="Pair-programming"
        language2="no"
        language3="no"
        githubLink="project-weather-app"
        netlifyLink="weather-app-byannafannyfiona" />
      <FeaturedProject
        imgSrc="../images/guess-who.png"
        title="Guess who the game"
        description="Created a digital version of the classic board game Guess who."
        language1="no"
        language2="no"
        language3="no"
        githubLink="project-guess-who"
        netlifyLink="guess-who-byfannystenberg" />
      <FeaturedProject
        imgSrc="../images/chatbot.png"
        title="Chatbot built in JS"
        description="Built a chatbot that gives you recommendations for restaurants in Stockholm depending on your pick of cuisine. This was my first project in JavaScript."
        language1="no"
        language2="no"
        language3="no"
        githubLink="project-chatbot"
        netlifyLink="theguide-chatbot" />
    </Section>
  )
};

export default FeaturedProjectsList;

export const Section = styled.section`
  margin-left: 24px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const SectionHeader = styled.h2`
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 80px;
  color: #0B24F5;
  margin: 24px 24px 24px 0;
`;

export const Language = styled.li`
  display: inline;
  padding: 3px;
  margin: 0 2px;
  background-color: #000000;
  color: #ffff;
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
`;