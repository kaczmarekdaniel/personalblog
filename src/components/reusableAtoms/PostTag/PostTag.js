import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  height: 30px;
  padding: 0 15px 0 15px;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin: 2px;
  line-height: 14px;
  font-weight: 300;
`;

const PostTag = ({ children }) => {
  return (
    <Wrapper>
      <p>{children}</p>
    </Wrapper>
  );
};

PostTag.propTypes = {};

export default PostTag;
