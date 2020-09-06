import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Laptops from './components/laptops/laptopList';
import Navbar from './components/layout/navbar';
import LaptopSearch from './components/laptops/laptopSearch';
import {VerifyUserAuthentication} from './store/actions/authAction';
import {connect} from 'react-redux';

function App({VerifyUserAuthentication}) {

  useEffect(()=>{
    
    VerifyUserAuthentication();
  },[])
 
  return (
    <BrowserRouter>
    <div className="app">
      <div className="mainContainer">
        <div id="subContainer1">
          <Navbar/>
          <LaptopSearch/>
          <Laptops/>
        </div>        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default connect(null,{VerifyUserAuthentication})(App);