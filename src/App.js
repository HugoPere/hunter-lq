
import logo from './logo.png';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path ='/' exact ></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
