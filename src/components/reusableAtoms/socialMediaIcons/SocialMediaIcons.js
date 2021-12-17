import React from 'react';
import styled from 'styled-components';
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialFacebook,
} from 'react-icons/ti';
import { AiFillGithub } from 'react-icons/ai';

const Wrapper = styled.div`
  width: auto;
  padding: 0;

  .icon {
    margin: 0;
    font-size: 20px;
    margin: 2px 13px 2px 13px;
    &:first-of-type {
      margin: 2px 13px 2px 0;
    }

    &:hover {
      font-size: 22px;
      margin: 0 12px 0 12px;
    }

    &:hover:first-of-type {
      font-size: 22px;
      margin: 0 11px 0 0;
    }
  }
`;

const SocialMediaIcons = (props) => {
  return (
    <Wrapper>
      <TiSocialFacebook className="icon" />
      <AiFillGithub className="icon" />
      <TiSocialTwitter className="icon" />
      <TiSocialLinkedin className="icon" />
    </Wrapper>
  );
};

SocialMediaIcons.propTypes = {};

export default SocialMediaIcons;
