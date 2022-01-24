import React from 'react';
import styled from 'styled-components';
import BlogPost from '../../BlogContent/BlogPost/BlogPost';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Title = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 0;
  margin-top: 25%;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    margin-top: 0%;
  }
`;

const FeaturedArticles = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    margin-bottom: 35px;
    grid-template-areas:
      'first first third'
      'fifth  second fourth'
      'fifth sixth sixth';

    justify-content: unset;
    align-items: unset;
    flex-direction: unset;
  }
`;

const FeaturedArticle = styled.div`
  margin: 5px;
  border-bottom: 1px solid black;
  grid-area: ${({ section }) => section};
  display: flex;
  justify-content: center;
  padding: 0 0 0 5%;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1000px) {
    border: 1px solid black;
  }
`;

const productData = {
  date: '12.12.12',
  title: 'Usability: A part of the user experience',
};

const productData2 = {
  date: '12.3.19',
  title: 'How to write highly readable React code - 10 Coding style tips',
};

const SeeAllButtton = styled.button`
  width: auto;
  height: 30%;
  line-height: 20px;
  margin-right: 10%;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  white-space: nowrap;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  .icon {
    margin: 0;
    font-size: 20px;
    line-height: 20px;
  }
`;

const HomeSection = () => {
  return (
    <Wrapper>
      <Title>
        <h1>Featured Articles</h1>
        <SeeAllButtton>
          See all <MdKeyboardArrowRight className="icon" />
        </SeeAllButtton>
      </Title>
      <FeaturedArticles>
        <FeaturedArticle section={'first'}>
          <BlogPost postData={productData} show={false} />
        </FeaturedArticle>
        <FeaturedArticle section={'second'}>
          <BlogPost postData={productData} show={false} />
        </FeaturedArticle>
        <FeaturedArticle section={'third'}>
          <BlogPost postData={productData} show={false} />
        </FeaturedArticle>

        <FeaturedArticle section={'fourth'}>
          <BlogPost postData={productData} show={false} />
        </FeaturedArticle>
        <FeaturedArticle section={'fifth'}>
          <BlogPost postData={productData2} show={false} />
        </FeaturedArticle>

        <FeaturedArticle section={'sixth'}>
          {' '}
          <BlogPost postData={productData2} show={false} />
        </FeaturedArticle>
      </FeaturedArticles>
    </Wrapper>
  );
};

HomeSection.propTypes = {};

export default HomeSection;
