import React from 'react';
import { theme } from '../../assets/styles/theme';
import { Wrapper } from './MainTemplate.styles';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../MainTemplateComponents/Navigation/Navigation';
import Logo from '../MainTemplateComponents/Logo/Logo';
import About from '../MainTemplateComponents/About/About';
import Content from '../MainTemplateComponents/ContentRouter/Content';
import Footer from '../MainTemplateComponents/Footer/Footer';

const MainTemplate = ({ children }) => {
  return (
    <Router>
      <Wrapper>
        <Logo />
        <Navigation />
        <About />
        <Content />
        <Footer />
      </Wrapper>
    </Router>
  );
};

export default MainTemplate;
