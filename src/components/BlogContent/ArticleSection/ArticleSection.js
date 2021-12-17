import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlogPost from '../BlogPost/BlogPost';
import Pagination from '../Pagination/Pagination';
import { fetchArticles } from '../../../helpers/helpers';
import axios from 'axios';
import BlogPostSkeleton from '../BlogPostSkeleton/BlogPostSkeleton';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  position: relative;
  @media only screen and (min-width: 1024px) {
    min-height: 100%;
    padding-bottom: 0px;
  }
  padding-bottom: 100px;
`;

const Pages = styled.div`
  background-color: yellow;
  width: 100%;
  height: 12%;
  margin: 1px;
`;

const ArticleSection = ({ instance, cmsSelector }) => {
  const query = `
  {
    ${cmsSelector} {
      id
      title
      date
      urltext
    }
  }`;

  const [articles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetchArticles(query, setLatestArticles);
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    setPosts(articles);
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginatePrev = () => setCurrentPage(currentPage - 1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateNext = () => setCurrentPage(currentPage + 1);

  return (
    <Wrapper>
      {articles.length === 0 ? (
        <>
          <BlogPostSkeleton />
          <BlogPostSkeleton />
          <BlogPostSkeleton />
          <BlogPostSkeleton />
        </>
      ) : (
        <>
          {currentPost.map((post) => {
            return <BlogPost postData={post} key={post.id} />;
          })}

          {posts.length <= 4 ? (
            <></>
          ) : (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              paginateNext={paginateNext}
              paginatePrev={paginatePrev}
              currentPage={currentPage}
              key={instance}
            />
          )}
        </>
      )}
    </Wrapper>
  );
};

ArticleSection.propTypes = {};

export default ArticleSection;
