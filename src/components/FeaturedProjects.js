import React from 'react';
import styled from 'styled-components';

const FeaturedProject = (
  { imgSrc, title, description, language1, language2, language3, githubLink, netlifyLink }
) => {
  return (
    <ProjectWrapper lang="en-US" className="project">
      <ImageWrapper aria-hidden="true">
        <ProjectImage src={imgSrc} alt="" />
      </ImageWrapper>
      <ProjectInfo aria-label="Information about the project">
        <ProjectTitle lang="en">{title}</ProjectTitle>
        <ProjectDescription lang="en">{description}</ProjectDescription>
        <ProjectLanguages lang="en" aria-label="Coding languages used in this project">
          <li lang="en" className="showList">HTML</li>
          <li lang="en" className="showList">CSS</li>
          <li lang="en" className="showList">JavaScript</li>
          <li lang="en" className={language1.length <= 2 ? 'hideList' : 'showList'}>{language1}</li>
          <li lang="en" className={language2.length <= 2 ? 'hideList' : 'showList'}>{language2}</li>
          <li lang="en" className={language3.length <= 2 ? 'hideList' : 'showList'}>{language3}</li>
        </ProjectLanguages>
        <Button
          btnColor="#EB5577"
          lang="en"
          type="button"
          title="link to project on Github"
          onClick={() => window.open(`https://github.com/fannystenberg/${githubLink}`)}>
          <span><i aria-hidden="true" className="fab fa-github" /></span>
            View the code
        </Button>
        <Button
          btnColor="#0B24F5"
          lang="en"
          type="button"
          title="link to project on Netlify"
          onClick={() => window.open(`https://${netlifyLink}.netlify.app/`)}>
          <span><i aria-hidden="true" className="fa-solid fa-globe" /></span>
            Live demo
        </Button>
      </ProjectInfo>
    </ProjectWrapper>
  )
};
export default FeaturedProject;

export const ProjectWrapper = styled.div`
  margin-top: 24px;

  @media (min-width: 667px) and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  margin: 24px 24px 24px 0;
`;

export const ProjectImage = styled.img`
  @media (min-width: 667px) and (max-width: 1024px) {
    width: 184px;
    height: 280px;
    object-fit: cover;
  }
`;

export const ProjectInfo = styled.div``;

export const ProjectTitle = styled.h3`
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 43px;
  color: #000000;
`;

export const ProjectDescription = styled.p`
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  color: #000000;
  margin: 24px 24px 24px 0;

  @media (min-width: 667px) and (max-width: 1024px) {
    max-width: 80%;
    margin: 24px 0 24px 0;
  }
`;

export const ProjectLanguages = styled.ul``;

export const Button = styled.button`
  display: block;
  margin: 12px 0px 12px 0;
  background-color: #F5F5F5;
  border-radius: 40px;
  border: none;
  padding: 12px;
  font-family: 'Satoshi-Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  color: #333333;

  &:hover {
    background-color: ${(props) => props.btnColor};
    color: white;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    display: inline;
    margin-right: 5px;
  }
`;