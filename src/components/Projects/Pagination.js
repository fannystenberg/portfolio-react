import React from 'react';
import styled from 'styled-components';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <Container key={number}>
            <PageNumber type="button" onClick={() => paginate(number)}>
              {number}
            </PageNumber>
          </Container>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

export const Container = styled.li`
    display: inline;
`;

export const PageNumber = styled.button`
    margin: 5px;
    padding: 5px 10px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
    background-color: #0B24F5;
    color: white;
    cursor: pointer;
    outline: none;
    opacity: 0.7;


    &:hover {
        opacity: 1;
    }
`;