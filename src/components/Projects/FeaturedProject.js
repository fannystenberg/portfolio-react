import React from 'react';
import styled from 'styled-components';
import LinkButton from './LinkButton';

const FeaturedProject = ({
  imgSrc,
  title,
  description,
  languages,
  githubLink,
  netlifyLink
}) => {
  return (
    <ProjectWrapper lang="en-US">
      <ImageWrapper aria-hidden="true">
        <ProjectImage src={imgSrc} alt="" />
      </ImageWrapper>
      <ProjectInfo aria-label="Information about the project">
        <ProjectTitle lang="en">{title}</ProjectTitle>
        <ProjectDescription lang="en">{description}</ProjectDescription>
        <ProjectLanguages
          lang="en"
          aria-label="Coding languages used in this project">
          {languages}
        </ProjectLanguages>
        <LinkButton
          linkType="github"
          url={`https://github.com/fannystenberg/${githubLink}`} />
        <LinkButton
          linkType="netlify"
          url={`https://${netlifyLink}.netlify.app/`} />
      </ProjectInfo>
    </ProjectWrapper>
  );
};
export default FeaturedProject;

export const ProjectWrapper = styled.article`
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
  font-family: "Satoshi-Variable";
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 43px;
  color: #000000;
`;

export const ProjectDescription = styled.p`
  font-family: "EB Garamond";
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
