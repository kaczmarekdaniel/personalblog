import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { fetchArticles } from '../../../helpers/helpers';
import { Link } from 'react-router-dom';
import BlogPost from '../../BlogContent/BlogPost/BlogPost';

const activeClassName = 'active-link';
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 24px 0 24px;
  line-height: 1.5;
  font-size: 16px;
  &.${activeClassName} {
    border-bottom: 1px solid black;
  }

  &:first-of-type {
    margin: 0 24px 0 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: nav;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 1% 0 1%;

  @media only screen and (min-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    padding: 0;
    align-items: center;
  }
`;

const SearchInput = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 40px;
  margin: 20px 0 0 0;
  border-radius: 5px;
  z-index: 4;
  padding: 0;
  overflow: hidden;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  overflow: hidden;
  input {
    height: 40px;
    border: none;
    width: 256px;
    background-color: transparent;
    padding: 0 0 0 10px;
    &::placeholder {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primaryGrey};
    }
    &:focus {
      outline: none;
    }
  }
  button {
    border-radius: 5px;

    border: none;
    height: 100%;
    width: 40px;
    background-color: ${({ theme }) => theme.colors.primaryPeach};
    font-weight: 300;
    margin: 0;
    color: white;
    font-size: 16px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 0;
  }
`;

const SearchResults = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

const ArticlesPropositions = styled.div`
  min-height: 300px;
  height: auto;
  width: 100%;
  z-index: 4;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  bottom: 0;
  top: 60px;
  box-shadow: -2px 4px 10px lightgrey;
  @media only screen and (min-width: 1024px) {
    top: 40px;
  }
`;

const ArticleLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primaryGrey};
  margin: 5px 0 5px 0;
  height: auto;
`;

const ArticleLinkSkeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryGrey};
  margin: 5px 0 5px 0;
  width: 100%;
  height: 25%;
  height: auto;
`;

const Navigation = (props) => {
  const [focused, setFocused] = useState(false);
  const [searchingText, setSearchingText] = useState();
  const [matchingArticles, setMatchingArticles] = useState([]);
  const searchInput = useRef();

  const query = `{
    allArticles(filter: {title: { matches: {pattern: "${searchingText}"}}}) {
      id
      title
      date
      urltext
    }
  }`;

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setTimeout(() => {
      setFocused(false);
    }, 200);
  };

  const inputValue = () => {
    setSearchingText(searchInput.current.value);
  };

  useEffect(() => {
    console.log(searchingText);
    if (searchInput.current.value.length > 2) {
      fetchArticles(query, setMatchingArticles);
    } else {
      console.log('Too short text');
    }
  }, [searchingText]);
  return (
    <Wrapper>
      <StyledLink to="/home">home</StyledLink>
      <StyledLink to="/blog">blog</StyledLink>
      <StyledLink to="/contact">contact us</StyledLink>

      <SearchResults>
        <SearchInput>
          <input
            type="text"
            placeholder="Search"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyUp={inputValue}
            ref={searchInput}
          ></input>
          <button>
            <FaSearch />
          </button>
        </SearchInput>

        {focused ? (
          <ArticlesPropositions>
            {searchInput.current.value.length > 2 ? (
              matchingArticles.map((item) => (
                <ArticleLink to={`/blog/${item.urltext}`} key={item.id}>
                  {item.title}
                </ArticleLink>
              ))
            ) : (
              <></>
            )}
          </ArticlesPropositions>
        ) : (
          <></>
        )}
      </SearchResults>
    </Wrapper>
  );
};

Navigation.propTypes = {};

export default Navigation;
