import React from 'react';
import styled from 'styled-components';

const LinkButton = ({ linkType, url }) => {
  let icon = '';
  let color = '';
  let text = '';
  let title = '';

  if (linkType === 'github') {
    icon = 'fab fa-github';
    color = '#EB5577';
    text = 'View code';
    title = 'Link to project on GitHub';
  } else {
    icon = 'fa-solid fa-globe';
    color = '#0B24F5';
    text = 'Live demo';
    title = 'Link to project on Netlify';
  }

  return (
    <StyledButton
      btnColor={color}
      lang="en"
      type="button"
      title={title}
      onClick={() => window.open(url)}>
      <span aria-hidden="true">
        <i className={icon} />{' '}
      </span>
      {text}
    </StyledButton>
  );
};

export default LinkButton;

const StyledButton = styled.button`
  display: block;
  margin: 12px 0px 12px 0;
  background-color: #f5f5f5;
  border-radius: 40px;
  border: none;
  padding: 12px;
  font-family: "Satoshi-Variable";
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
