/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 1px;
  position: absolute;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 12%;
  }
`;

const ArrowButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primaryGrey};
  background-color: transparent;
  font-size: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageButton = styled.button`
  height: 32px;
  width: 10px;
  margin: 0 8px 0 8px;
  font-size: 16px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primaryGrey};
  padding: 0;
`;

const PageNumber = styled.span`
  color: ${({ theme }) => theme.colors.primaryPeach};
  font-size: 16px;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  paginateNext,
  paginatePrev,
  currentPage,
}) => {
  const pageNumbers = [];
  const arrowLeft = useRef();
  const arrowRight = useRef();
  const [disableArrowLeft, setDisableArrowLeft] = useState();
  const [disableArrowRight, setDisableArrowRight] = useState();

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useLayoutEffect(() => {
    if (currentPage === pageNumbers[0]) {
      setDisableArrowLeft(true);
      arrowLeft.current.style.backgroundColor = ' #F4F4F4';
      arrowLeft.current.style.border = 'none';
    }
    return () => {
      arrowLeft.current.style.backgroundColor = 'transparent';
      arrowLeft.current.style.border = '1px solid black';
      setDisableArrowLeft(false);
    };
  });

  useLayoutEffect(() => {
    if (currentPage === pageNumbers[pageNumbers.length - 1]) {
      arrowRight.current.style.backgroundColor = ' #F4F4F4';
      arrowRight.current.style.border = 'none';
      setDisableArrowRight(true);
    }
    return () => {
      arrowRight.current.style.backgroundColor = 'transparent';
      arrowRight.current.style.border = '1px solid black';

      setDisableArrowRight(false);
    };
  });

  return (
    <Wrapper>
      <ArrowButton
        onClick={() => (disableArrowLeft ? <></> : paginatePrev())}
        ref={arrowLeft}
      >
        <MdKeyboardArrowLeft className="icon" />
      </ArrowButton>
      {pageNumbers.map((number) => (
        <PageButton onClick={() => paginate(number)} key={number}>
          {number === currentPage ? (
            <PageNumber>{number}</PageNumber>
          ) : (
            <>{number}</>
          )}
        </PageButton>
      ))}
      <ArrowButton
        onClick={() => (disableArrowRight ? <></> : paginateNext())}
        ref={arrowRight}
      >
        <MdKeyboardArrowRight className="icon" />
      </ArrowButton>
    </Wrapper>
  );
};

Pagination.propTypes = {};

export default Pagination;
