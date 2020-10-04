import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Norte from './pages/Norte';
import Nordeste from './pages/Nordeste';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/norte' element={<Norte />} />
          <Route path='/nordeste' element={<Nordeste />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
