import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BlogContent from '../../BlogContent/BlogContent';
import BlogPost from '../../BlogContent/BlogPost/BlogPost';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-area: content;
`;

const count = {
  data: {
    _allArticlesMeta: {
      count: 1,
    },
  },
};

const first = 'all';
const second = 'react';

const Content = (props) => {
  console.log(count.data._allArticlesMeta.count);
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Wrapper className="flexColumn">home</Wrapper>
        </Route>
        <Route path="/blog">
          <Wrapper className="flexColumn">
            <BlogContent />
          </Wrapper>
        </Route>
        <Route path="/contact">
          <Wrapper className="flexColumn"> contact</Wrapper>
        </Route>
      </Switch>
    </Wrapper>
  );
};

Content.propTypes = {};

export default Content;
