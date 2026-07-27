import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import UserDetail from './Pages/UserDetails';
import Simple from './Pages/Simple.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Navbar from './Pages/Navbar.js';

import Counter from './Pages/Count.js';
import Welcome from './Pages/ProsLevel.js';

import Eventer from './Pages/Eventer.js';
import Fruits from './Pages/Property.js';
import { UseRef } from 'react';

import { memo } from 'react';
import Memo from './Pages/UseMemo.js';

function App() {

  return (

    <div className="App">

      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<UserDetail />} />
        <Route path="/contact" element={<Simple/>} />
      </Routes>

      <Navbar/>
      
      <Counter/>

      <Welcome name="Gobi"/>

      <Welcome name = "Ramu"/>

      <useRef/>

      <Memo/>

      <Eventer/>

      <Fruits/>
    
      </BrowserRouter>

    
    </div>
  );
}

export default App;
