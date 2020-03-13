import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import acs from '../../../assets/images/acs-card.png'
import bdba from '../../../assets/images/bdba-card.png'
import it from '../../../assets/images/it-card.png'
import ibe from '../../../assets/images/ibe-card.png'



export default class CardComponent extends Component {
  render() {
    return (
      <Container fluid style={{ height: '480pt', width: '900pt' }} >


        <h5>Let Us Know What</h5>
        <h5>Are You Studying.
       </h5>
       <br></br>
        <Row>
          <Col>
            <Card style={{ width: '35rem' }}>
              <Card.Link href="/acs">
              <Card.Header as="h5">Applied Computer Science</Card.Header>
              </Card.Link>
              <Card.Img variant="top" src={acs} />
              {/* <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body> */}
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '35rem' }}>
              <Card.Header as="h5">Big Data & Business Analytics</Card.Header>
              <Card.Img variant="top" src={bdba} />
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: '35rem' }}>
              <Card.Header as="h5">Information Technology</Card.Header>
              <Card.Img variant="top" src={it} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '35rem' }}>
              <Card.Header as="h5">International Business Engineering</Card.Header>
              <Card.Img variant="top" src={ibe} />
            </Card>
          </Col>
        </Row>
      </Container >
    )
  }
}