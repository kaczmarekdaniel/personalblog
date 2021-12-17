import logo from './logo.svg';
import { GlobalStyle } from './assets/styles/globalStyles';
import { theme } from './assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import MainTemplate from './components/templates/MainTemplate';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  height: auto;
  max-width: 100%;

  margin: 0;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <MainTemplate></MainTemplate>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
