import { Container } from '@chakra-ui/layout';
import React from 'react';
import { Outlet } from 'react-router';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Container minH="87vh">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
