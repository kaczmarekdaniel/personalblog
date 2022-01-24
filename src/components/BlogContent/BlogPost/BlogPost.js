import React from 'react';
import styled from 'styled-components';
import PostTag from '../../reusableAtoms/PostTag/PostTag';
import { Link } from 'react-router-dom';

const Wrapper = styled.article`
  width: 100%;
  min-height: 20vh;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: nowrap;
  padding: 20px;
  &:last-of-type {
    border-bottom: none;
  }
  @media only screen and (min-width: 1024px) {
    min-height: 20%;

    padding: 0;
  }
`;

const PublicationDate = styled.p`
  font-size: 12px;

  color: ${({ theme }) => theme.colors.primaryGrey};
`;
const ArticleTitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  width: 80%;
  margin: 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primaryGrey};
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    font-size: 1rem;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
    padding: 0;
  }
`;

const Tags = styled.div`
  display: none;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (min-width: 400px) {
    display: flex;
  }
`;
const TagWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkTo = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryGrey};
`;

const BlogPost = ({ postData, show = true }) => {
  return (
    <Wrapper>
      <ArticleTitle>
        <PublicationDate>{postData.date}</PublicationDate>

        <LinkTo to={`/blog/${postData.urltext}`}>{postData.title}</LinkTo>
      </ArticleTitle>
      <TagWrapper>{show ? <></> : <></>}</TagWrapper>
    </Wrapper>
  );
};

BlogPost.propTypes = {};

export default BlogPost;
