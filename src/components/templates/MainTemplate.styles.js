import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  max-width: 100%;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 5% auto auto auto 10%;
  gap: 0px 0px;
  grid-template-areas:
    'logo'
    '.'
    'nav'
    'content'
    'about'
    'footer ';

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 0.1fr 0.8fr 1.1fr 0.4fr;
    grid-template-rows: 0.4fr 1.7fr 0.2fr;
    gap: 0px 0px;
    grid-template-areas:
      '. logo nav .'
      '. about content .'
      'footer footer footer footer';
  }
`;
