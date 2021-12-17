import React from 'react';
import styled from 'styled-components';
import useModal from '../../../hooks/useModal';
import PostTag from '../../reusableAtoms/PostTag/PostTag';

const Wrapper = styled.article`
  width: 100%;
  height: 20vh;
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
    height: 20%;
    padding: 0;
  }

  &.pulse {
    animation: pulse-animation 1.5s infinite;
  }

  @keyframes pulse-animation {
    0% {
      opacity: 0.7;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0.7;
    }
  }
`;

const PublicationDate = styled.p`
  font-size: 12px;
  max-width: 100px;
  background-color: lightgrey;
  color: lightgrey;
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

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    text-align: left;
    margin: 0;
    padding: 0;
  }
`;

const SkeletonTitle = styled.div`
  width: 85%;
  min-height: 50px;
  background-color: lightgrey;
  color: lightgrey;

  display: flex;
  border-radius: 5px;
`;

const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TagWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostTagSkeleton = styled.div`
  background-color: lightgrey;
  color: lightgrey;
  width: auto;
  height: 30px;
  padding: 0 15px 0 15px;
  font-size: 12px;
  margin: 2px;
  line-height: 14px;
`;

const BlogPost = ({ postData }) => {
  return (
    <Wrapper className="pulse">
      <ArticleTitle>
        <PublicationDate>123</PublicationDate>
        <SkeletonTitle>123</SkeletonTitle>
      </ArticleTitle>
      <TagWrapper>
        <Tags>
          <PostTagSkeleton>#designThinking</PostTagSkeleton>
          <PostTagSkeleton>#Design</PostTagSkeleton>
          <PostTagSkeleton>#HCI</PostTagSkeleton>
        </Tags>
      </TagWrapper>
    </Wrapper>
  );
};

BlogPost.propTypes = {};

export default BlogPost;
