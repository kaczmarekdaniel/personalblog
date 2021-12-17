import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import BlogContentNavigation from './BlogContentNavigation/BlogContentNavigation';
import ArticleSection from './ArticleSection/ArticleSection';
import { latestSectionQuery } from '../../graphQL/queries';
import {
  reactSectionQuery,
  designSectionQuery,
  techSectionQuery,
} from '../../graphQL/queries';
import useModal from '../../hooks/useModal';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  h1 {
    color: ${({ theme }) => theme.colors.primaryGrey};
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 24px;
    margin-top: 40px;
  }
`;

const BlogContent = ({ data }) => {
  const { ArticleModal, isOpen, handleCloseModal, setModalState } = useModal();
  const [articles, setLatestArticles] = useState();
  useEffect(() => {
    setLatestArticles(data);
  }, []);

  return (
    <>
      <Wrapper className="wrapper">
        <BlogContentNavigation />
        <Switch>
          <Route exact path="/blog/all">
            <Wrapper className="flexColumn">
              <ArticleSection
                instance={1}
                key={1}
                cmsSelector={latestSectionQuery}
              />
            </Wrapper>
          </Route>

          <Route path="/blog/react">
            <Wrapper className="flexColumn">
              <ArticleSection
                instance={2}
                key={2}
                cmsSelector={reactSectionQuery}
              />{' '}
            </Wrapper>
          </Route>

          <Route path="/blog/design">
            <Wrapper className="flexColumn">
              <Wrapper className="flexColumn">
                <ArticleSection
                  instance={3}
                  key={3}
                  cmsSelector={designSectionQuery}
                />{' '}
              </Wrapper>{' '}
            </Wrapper>
          </Route>

          <Route path="/blog/other">
            <Wrapper className="flexColumn">
              <ArticleSection
                instance={4}
                key={4}
                cmsSelector={techSectionQuery}
              />{' '}
            </Wrapper>{' '}
          </Route>
          <Route exact path="/blog/:id">
            {isOpen ? (
              <ArticleModal
                isOpen={isOpen}
                handleClose={handleCloseModal}
                setModalState={setModalState}
              />
            ) : null}
          </Route>
          <Route exact path="/blog">
            <Redirect to="/blog/all" />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
};

export default BlogContent;
