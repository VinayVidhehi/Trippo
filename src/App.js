import React from 'react';
import './App.css';

import Body from './Components/Body';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Alphas from './Components/Alphas/Alphas';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup}/>
        <Route path='/' Component={Body} />
        <Route path='/alphas' Component={Alphas} />
      </Routes>
    </div>
  );
}

export default App;
