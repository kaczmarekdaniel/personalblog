import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowLeft } from 'react-icons/hi';
import ReactDOM from 'react-dom';
import { fetchArticles } from '../../../helpers/helpers';
import { useLayoutEffect } from 'react/cjs/react.development';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: black;
  position: absolute;
  color: white;

  top: 0;
  right: 0;
  left: 0;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  @media screen and (min-width: 1024px) {
    .content {
      width: 50%;
    }
  }
`;

const Content = styled.p`
  height: auto;
`;

const Close = styled.button`
  position: fixed;
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

const ArticleContent = styled.div`
  background-color: transparent;
  width: auto;
  color: white;
  justify-content: flex-start;
  margin: 0 20% 0 20%;
  text-align: justify;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  width: auto;
  color: white;
  justify-content: flex-start;
  margin: 0 10% 0 10%;
  text-align: justify;
  img {
    max-width: 100%;
  }

  @media screen and (min-width: 1000px) {
    margin: 0 20% 0 20%;
  }
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
      imageurl {
        url
      }
    }
}`;
  const modalNode = document.createElement('div');
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  }

  useLayoutEffect(() => {
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

      <ContentContainer>
        <h1>
          {currentArticle.length === 0 ? (
            <></>
          ) : (
            <>
              <img src={currentArticle[0].imageurl.url} />
              <p>{currentArticle[0].title}</p>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                volutpat ligula risus, ut auctor metus euismod et. Phasellus
                vehicula lorem porttitor metus ultricies aliquam. Cras hendrerit
                sit amet quam non pellentesque. Sed lobortis orci convallis,
                consectetur enim id, tincidunt sem. Praesent convallis leo ut
                placerat lobortis. Maecenas id ipsum accumsan, pharetra arcu in,
                scelerisque nibh. Cras vehicula dolor rhoncus quam ullamcorper
                posuere a sed turpis. Duis porta id lacus et iaculis.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nunc euismod leo laoreet
                justo tincidunt facilisis. Sed mattis aliquet vulputate. Donec
                at nunc nisi. Cras at est vitae purus bibendum auctor ut et
                nisl. Nullam eu est sed metus lobortis ullamcorper. Sed
                scelerisque justo faucibus turpis rhoncus fermentum. Fusce
                dictum dui vel lobortis porttitor. Cras a nibh odio. Proin vel
                tristique ligula. Nunc elit est, lacinia nec urna id, imperdiet
                hendrerit dolor. Aliquam rutrum euismod diam, et faucibus diam
                consectetur gravida. Aenean lacus elit, pellentesque eu viverra
                vitae, maximus nec dolor. Etiam ornare fermentum congue.
                Pellentesque venenatis elit lectus, a interdum ex venenatis vel.
                Quisque blandit finibus sapien, in pharetra justo scelerisque
                et. Nulla aliquam urna quis nisl tincidunt tempus. Praesent
                accumsan hendrerit sagittis. Vestibulum nec odio in ipsum
                commodo egestas. Pellentesque sed tortor nec nulla molestie
                placerat nec eget lacus. Proin quis diam eros. In elementum,
                tortor vitae egestas sagittis, justo nunc vestibulum leo, at
                tempus massa nisl ut libero. Etiam volutpat felis eu felis
                bibendum dictum. Donec facilisis efficitur nisi vitae volutpat.
                Duis vitae bibendum lorem. Integer scelerisque orci eget risus
                vestibulum, eu faucibus ipsum efficitur. Donec id sem eget arcu
                convallis vehicula. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi volutpat ligula risus, ut auctor metus
                euismod et. Phasellus vehicula lorem porttitor metus ultricies
                aliquam. Cras hendrerit sit amet quam non pellentesque. Sed
                lobortis orci convallis, consectetur enim id, tincidunt sem.
                Praesent convallis leo ut placerat lobortis. Maecenas id ipsum
                accumsan, pharetra arcu in, scelerisque nibh. Cras vehicula
                dolor rhoncus quam ullamcorper posuere a sed turpis. Duis porta
                id lacus et iaculis. Pellentesque habitant morbi tristique
                senectus et netus et malesuada fames ac turpis egestas. Nunc
                euismod leo laoreet justo tincidunt facilisis. Sed mattis
                aliquet vulputate. Donec at nunc nisi. Cras at est vitae purus
                bibendum auctor ut et nisl. Nullam eu est sed metus lobortis
                ullamcorper. Sed scelerisque justo faucibus turpis rhoncus
                fermentum. Fusce dictum dui vel lobortis porttitor. Cras a nibh
                odio. Proin vel tristique ligula. Nunc elit est, lacinia nec
                urna id, imperdiet hendrerit dolor. Aliquam rutrum euismod diam,
                et faucibus diam consectetur gravida. Aenean lacus elit,
                pellentesque eu viverra vitae, maximus nec dolor. Etiam ornare
                fermentum congue. Pellentesque venenatis elit lectus, a interdum
                ex venenatis vel. Quisque blandit finibus sapien, in pharetra
                justo scelerisque et. Nulla aliquam urna quis nisl tincidunt
                tempus. Praesent accumsan hendrerit sagittis. Vestibulum nec
                odio in ipsum commodo egestas. Pellentesque sed tortor nec nulla
                molestie placerat nec eget lacus. Proin quis diam eros. In
                elementum, tortor vitae egestas sagittis, justo nunc vestibulum
                leo, at tempus massa nisl ut libero. Etiam volutpat felis eu
                felis bibendum dictum. Donec facilisis efficitur nisi vitae
                volutpat. Duis vitae bibendum lorem. Integer scelerisque orci
                eget risus vestibulum Nulla aliquam urna quis nisl tincidunt
                tempus. Praesent accumsan hendrerit sagittis. Vestibulum nec
                odio in ipsum commodo egestas. Pellentesque sed tortor nec nulla
                molestie placerat nec eget lacus. Proin quis diam eros. In
                elementum, tortor vitae egestas sagittis, justo nunc vestibulum
                leo, at tempus massa nisl ut libero. Etiam volutpat felis eu
                felis bibendum dictum. Donec facilisis efficitur nisi vitae
                volutpat. Duis vitae bibendum lorem. Integer scelerisque orci
                eget risus vestibulum, eu faucibus ipsum efficitur. Donec id sem
                eget arcu convallis vehicula. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi volutpat ligula risus, ut
                auctor metus euismod et. Phasellus vehicula lorem porttitor
                metus ultricies aliquam. Cras hendrerit sit amet quam non
                pellentesque. Sed lobortis orci convallis, consectetur enim id,
                tincidunt sem. Praesent convallis leo ut placerat lobortis.
                Maecenas id ipsum accumsan, pharetra arcu in, scelerisque nibh.
                Cras vehicula dolor rhoncus quam ullamcorper posuere a sed
                turpis. Duis porta id lacus et iaculis. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nunc euismod leo laoreet justo tincidunt facilisis. Sed
                mattis aliquet vulputate. Donec at nunc nisi. Cras at est vitae
                purus bibendum auctor ut et nisl. Nullam eu est sed metus
                lobortis ullamcorper. Sed scelerisque justo faucibus turpis
                rhoncus fermentum. Fusce dictum dui vel lobortis porttitor. Cras
                a nibh odio. Proin vel tristique ligula. Nunc elit est, lacinia
                nec urna id, imperdiet hendrerit dolor. Aliquam rutrum euismod
                diam, et faucibus diam consectetur gravida. Aenean lacus elit,
                pellentesque eu viverra vitae, maximus nec dolor. Etiam ornare
                fermentum congue. Pellentesque venenatis elit lectus, a interdum
                ex venenatis vel. Quisque blandit finibus sapien, in pharetra
                justo scelerisque et. Nulla aliquam urna quis nisl tincidunt
                tempus. Praesent accumsan hendrerit sagittis. Vestibulum nec
                odio in ipsum commodo egestas. Pellentesque sed tortor nec nulla
                molestie placerat nec eget lacus. Proin quis diam eros. In
                elementum, tortor vitae egestas sagittis, justo nunc vestibulum
                leo, at tempus massa nisl ut libero. Etiam volutpat felis eu
                felis bibendum dictum. Donec facilisis efficitur nisi vitae
                volutpat. Duis vitae bibendum lorem. Integer scelerisque orci
                eget risus vestibulum
              </Content>
              <hr />
              <p>{currentArticle[0].author} </p>
              <p>{currentArticle[0].date} </p>
              <hr />
            </>
          )}
        </h1>
      </ContentContainer>
    </Wrapper>,
    modalNode
  );
};

ArticleModal.propTypes = {};

export default ArticleModal;
