import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
import Square from './Square';
import Board from './Board';
import EdgarTestSite from './EdgarTestSite';
import CalculateScore from './EdgarTestSite';

function App() {
  return (
    <div className="">
      <Header/>
      <div>
        <Square className="gray " textContent="Hello" index="1"/>
        <Square className="blue " textContent="World" index="2"/>
        <Square textContent="This is "/>
      </div>
      <Board />
      <Footer/>
      <CalculateScore />
    </div>
    
  );
}

export default App;