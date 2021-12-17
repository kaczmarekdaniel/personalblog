import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import Navigation from '../../MainTemplateComponents/Navigation/Navigation';

const DraggableCategories = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: row;
  padding: 0;
  z-index: 1;
`;

const Pages = styled.div`
  background-color: yellow;
  width: 100%;
  height: 10%;
  margin: 1px;
`;

const DraggableCarousel = styled.div`
  width: auto;
  display: inline-flex;
  height: auto;
  flex-direction: row;
  z-index: 1;
`;

const activeClassName = 'active-link';
const CategoryButton = styled(NavLink).attrs({ activeClassName })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin: 0 24px 0 24px;
  white-space: nowrap;
  line-height: 1.5;
  width: auto;
  font-size: 16px;
  &.${activeClassName} {
    border-bottom: 2px solid black;
  }
`;

const ArrowLeftButton = styled.button`
  border: none;
  z-index: 2;
  font-size: 24px;
  width: 25px;
  display: flex;
  padding-left: 0;
  background-color: white;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 0;
  line-height: 24px;
  border-bottom: 2px solid transparent;
  opacity: 1;
`;

const BlogContentNavigation = (props) => {
  const wrapper = useRef(null);
  const carousel = useRef(null);
  const arrow = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(carousel.current, {
      bounds: wrapper.current,
      type: 'x',
      edgeResistance: 1, // 0 - 1
      dragResistance: 0, // 0 - 1
      overshootTolerance: 0,
      zIndexBoost: false,
    });
    Draggable.zIndex = 1;
  }, []);
  return (
    <>
      <h1>Recent posts</h1>
      <DraggableCategories className="wrapper" ref={wrapper}>
        <ArrowLeftButton ref={arrow}>
          <MdKeyboardArrowLeft />
        </ArrowLeftButton>
        <DraggableCarousel ref={carousel}>
          <CategoryButton to="/blog/all" exact>
            latest
          </CategoryButton>
          <CategoryButton to="/blog/react" exact>
            react
          </CategoryButton>
          <CategoryButton to="/blog/design" exact>
            design
          </CategoryButton>
          <CategoryButton to="/blog/other" exact>
            others
          </CategoryButton>
        </DraggableCarousel>
      </DraggableCategories>
    </>
  );
};

BlogContentNavigation.propTypes = {};

export default BlogContentNavigation;
