import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  margin: 20px 0 30px 0;
`;
const Text = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 300;
`;
const Btn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  line-height: 20px;
  text-align: center;
  padding: 0;
  font-size: 20px;
  font-weight: 300;
  margin: 0 0 0 16px;
  color: ${({ theme }) => theme.colors.primaryGrey};
`;

const ExploreButton = (props) => {
  return (
    <Wrapper>
      <Text>Learn more</Text>
      <Btn>
        <MdKeyboardArrowRight />
      </Btn>
    </Wrapper>
  );
};

ExploreButton.propTypes = {};

export default ExploreButton;
