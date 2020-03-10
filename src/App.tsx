import React from 'react';
import './App.scss';
import {  Route, Switch } from "react-router-dom";
import HeaderComponent from './components/layouts/header/header-component'
import FooterComponent from './components/layouts/footer/footer-component'
import HomeComponent from './components/home/home-component'
import CardComponent from './components/layouts/card/card-component'

const App: React.FC =  ()  => {
  return (
    <div className="App">
        <HeaderComponent></HeaderComponent>
        <br></br>
        <HomeComponent></HomeComponent>
        <CardComponent></CardComponent>
        <FooterComponent ></FooterComponent>
    </div>
  );
}

export default App;
