import React from 'react';
import styled from 'styled-components';
import SocialMediaIcons from '../../reusableAtoms/socialMediaIcons/SocialMediaIcons';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-area: footer;
  font-weight: 300;
  font-style: light;
  position: relative;
  color: ${({ theme }) => theme.colors.primaryGrey};
  margin-top: 25%;
  flex-direction: column-reverse;
  padding-top: 25%;
  @media screen and (min-width: 1000px) {
    margin-top: 0%;
    padding-top: 0%;

    flex-direction: row;
  }
`;
const Circle = styled.div`
  width: 64px;
  height: 64px;
  background-color: white;
  position: absolute;
  top: -32px;
  border-radius: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  .icon {
    height: 50%;
    font-size: 20px;
  }
`;

const Footer = (props) => {
  return (
    <Wrapper>
      <p>copyright Daniel Kaczmarek</p>
      <Circle>
        <MdKeyboardArrowUp className="icon" />
      </Circle>
      <SocialMediaIcons />
    </Wrapper>
  );
};

export default Footer;
