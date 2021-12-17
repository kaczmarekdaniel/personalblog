import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import ReactDOM from 'react-dom';
import { fetchArticles } from '../../../helpers/helpers';

const Wrapper = styled.div`
  margin-right: 20px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  position: fixed;
  color: white;
  top: 0px;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1024px) {
    .content {
      width: 50%;
    }
  }
`;

const Close = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  height: 30px;
  font-size: 32px;
  background-color: transparent;
  color: white;
  border: none;
  padding: 0;
  z-index: 3;
`;

const modalContainer = document.getElementById('modal-container');

const ArticleModal = ({ isOpen, handleClose, setModalState }) => {
  const [currentArticle, setCurrentArticle] = useState([]);
  const { id } = useParams();

  const selector = `allArticles(filter: {urltext: {eq: "${id}"}}, orderBy: _createdAt_ASC)`;

  const query = `
  {
    ${selector} {
      id
      title
      author
      date
      urltext
    }
}`;
  const modalNode = document.createElement('div');
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    document.body.style.overflow = 'hidden';
    return () => {
      modalContainer.removeChild(modalNode);
      document.body.style.overflow = 'unset';
    };
  }, [modalNode]);

  useEffect(() => {
    fetchArticles(query, setCurrentArticle);
  }, []);

  console.log(currentArticle[0]);

  return ReactDOM.createPortal(
    <Wrapper>
      <Link to="/blog/all">
        <Close
          onClick={() => {
            handleClose();
            setModalState(true);
          }}
        >
          <HiArrowLeft />
        </Close>
      </Link>

      <p>{currentArticle.length === 0 ? <></> : currentArticle[0].title}</p>
    </Wrapper>,
    modalNode
  );
};

ArticleModal.propTypes = {};

export default ArticleModal;
