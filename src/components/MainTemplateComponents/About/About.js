import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import SocialMediaIcons from '../../reusableAtoms/socialMediaIcons/SocialMediaIcons';
import ExploreButton from '../ExploreButton/ExploreButton';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-area: about;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: ${({ theme }) => theme.colors.primaryGrey};
  font-style: normal;
  margin-top: 25%;
  h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  p {
    font-weight: 200;
    color: ${({ theme }) => theme.colors.primaryGrey};
    line-height: 1.5;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    h1 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 1000px) {
    margin-top: 0%;
  }
`;

const Text = styled.div`
  width: 75%;

  @media only screen and (min-width: 1024px) {
    width: 45%;
  }
`;

const About = (props) => {
  return (
    <Wrapper>
      <Text>
        <h1>what i do?</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum
          augue erat ac eros. Cras ultricies mattis convallis.
        </p>
        <ExploreButton />
        <SocialMediaIcons />
      </Text>
    </Wrapper>
  );
};

About.propTypes = {};

export default About;
