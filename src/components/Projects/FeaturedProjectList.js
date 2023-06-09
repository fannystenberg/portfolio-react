import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Projects } from './Projects.js';
import FeaturedProject from './FeaturedProject.js';
import Pagination from './Pagination.js';

const FeaturedProjectList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    setPosts(Projects);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Section lang="en-US" title="List of Fanny's featured projects">
      <SectionHeader lang="en">Featured Projects</SectionHeader>
      {currentPosts.map((project) => {
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
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate} />
    </Section>
  )
};

export default FeaturedProjectList;

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