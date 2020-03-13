import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from './components/layouts/header/header-component'
import NavBarComponent from './components/layouts/navbar/navbar-component'
import FooterComponent from './components/layouts/footer/footer-component'
import NavFooterComponent from './components/layouts/navbar/nav-footer-component'
import HomeComponent from './components/home/home-component'
import CardComponent from './components/layouts/card/card-component'
import AcsComponent from './components/courses/acs/acs-component'
import  ExpertiseComponent from './components/expertise/experise-component'
import RecommendComponent from './components/recommend/recommend-component'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <HeaderComponent></HeaderComponent> */}
      <NavBarComponent></NavBarComponent>
      <br></br>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/acs" component={AcsComponent} />
          <Route path="/expertise" component={ExpertiseComponent} />
          <Route path="/recommend" component={RecommendComponent} />
          <Route path="/about" component={HomeComponent} />
          <Route path="/contact" component={HomeComponent} />
        </Switch>
      </Router> 
      <NavFooterComponent ></NavFooterComponent>
      {/* <HomeComponent></HomeComponent> */}

      {/* <CardComponent></CardComponent> */}
      
    </div>
  );
}

export default App;
