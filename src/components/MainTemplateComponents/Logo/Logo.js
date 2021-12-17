import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  max-width: 100;
  height: 100%;
  grid-area: logo;
  color: ${({ theme }) => theme.colors.primaryGrey};
`;

const Text = styled.div`
  h1,
  h2 {
    margin: 0;
  }
  @media only screen and (min-width: 1024px) {
    width: 45%;
  }
`;

const Logo = (props) => {
  return (
    <Wrapper className="flexRow">
      <Text>
        <h1>nextboringblog</h1>
      </Text>
    </Wrapper>
  );
};

Logo.propTypes = {};

export default Logo;
