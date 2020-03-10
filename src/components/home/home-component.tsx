import React, { Component } from 'react';
import './home.scss';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import homepage from '../../assets/images/homepage-image.png'

export default class HomeComponent extends Component {
  
  render(){
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#FC5252', height: '911pt' }} >

        <img src = {homepage} style={{height:'400pt',width:'400pt'}}>

        </img>
        </Typography>>
      </Container>
    </React.Fragment>
  );
}
}