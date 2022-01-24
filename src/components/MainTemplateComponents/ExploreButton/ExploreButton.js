import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 95px;
  align-items: center;
  flex-direction: row;
  margin: 20px 0 30px 0;
  overflow: hidden;
`;
const Text = styled.p`
  overflow: hidden;
  white-space: nowrap;
  width: 75px;
  margin: 0;
  font-size: 12px;
  font-weight: 300;
  z-index: 0;

  &.animate:hover {
    animation: slideOut 1.5s;
  }

  @keyframes slideOut {
    from {
      transform: translatex(0);
    }
    to {
      transform: translateX(150%);
    }
  }
`;
const Btn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border: none;
  line-height: 20px;
  text-align: center;
  z-index: 1;
  opacity: 1;
  padding: 0;
  font-size: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primaryGrey};
`;

const ExploreButton = (props) => {
  return (
    <Wrapper>
      <Text className="animate">Learn more</Text>
      <Btn>
        <MdKeyboardArrowRight />
      </Btn>
    </Wrapper>
  );
};

export default ExploreButton;
