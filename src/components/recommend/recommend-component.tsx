import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import js from '../../assets/images/js.png'
import reactLearn from '../../assets/images/react-learn.png'
import xd from '../../assets/images/xd.png'

export default class RecommendComponent extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: '#FC5252', height: '441pt', width: '900pt' }}>
                <h1 style={{ alignContent: "middle" }}>Courses for you:</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Container className="verical-center">
                    <Row>
                        <Col>
                            <img src={xd} style={{ width: "200pt" }}></img>
                        </Col>
                        <Col>
                            <img src={reactLearn} style={{ width: "200pt" }}></img>
                        </Col>
                        <Col>
                            <img src={js} style={{ width: "200pt" }}></img>
                        </Col>
                    </Row>
                </Container>
            </Container>

        )
    }
} 