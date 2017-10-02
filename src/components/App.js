import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

import Header from './_Shared/Header';

const App = () => (
  <BrowserRouter>
    <div>
      <div className="container">
        <Routes />
      </div>
      <Header />
    </div>
  </BrowserRouter>
);

export default App;
