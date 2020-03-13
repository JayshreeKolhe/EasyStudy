import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Radio, RadioGroup } from 'react-radio-group'
import fascination from "../../../assets/images/fascination.png"

export default class AcsComponent extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: '#FC5252', height: '441pt', width: '900pt' }}>
                <Row>
                    <Col>
                        <img src={fascination} style={{ float: "left", height: '400pt', width: '400pt' }}></img>
                    </Col>
                    <Col>
                        <br></br>
                        <br></br>
                        <h1>What Fascinates You?</h1>
                        <br></br>
                        <br></br>
                        <RadioGroup name="fruits" >
                            <div className="radio-button-background">
                                <a href="/expertise">
                                <Radio value="UX" className="radio-button" />Usability Engineering & UX Design
                                </a>
                            </div>
                            <br></br>
                            <div className="radio-button-background">
                                <Radio value="BC" disabled className="radio-button" />Business Computing
                            </div>
                            <br></br>
                            <div className="radio-button-background">
                                <Radio value="MC" disabled className="radio-button" />Mobile Computing
                            </div>
                        </RadioGroup>
                    </Col>
                </Row>
            </Container>

        );
    }
}