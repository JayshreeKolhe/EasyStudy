import React, { Component } from 'react';
import './home.scss';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import { Container, Row, Col } from 'react-bootstrap'
import CardComponent from '../layouts/card/card-component'
import homepage from '../../assets/images/homepage-image.png'
import how from "../../assets/images/how.png"

export default class HomeComponent extends Component {

  render() {
    return (
      <Container>
        <Container style={{ backgroundColor: '#FC5252', height: '458pt', width: '900pt' }}>
          <Row>
            <Col>
              <img src={homepage} style={{ float: "left", height: '400pt', width: '400pt' }}></img>
            </Col>
            <Col>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <h1 >Improve Yourself</h1>
              <h1>    Right Now</h1>
              <br></br>
              <br></br>
              <h4 style={{color:"white"}}>Future proof yourself, don't get</h4>
              <h4 style={{color:"white"}}> left behind. Learn when, how </h4>
              <h4 style={{color:"white"}}>  and what you need.  </h4>
              

            </Col>
          </Row>
        </Container>
        <Container >
          <img src={how} style={{ height: '540pt', width: '900pt' }}></img>
        </Container>
        <Container style={{ height: '540pt', width: '900pt' }}>
          <CardComponent></CardComponent>
        </Container>
      </Container>
    );
  }
}