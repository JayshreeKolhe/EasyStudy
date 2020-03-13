import React, { Component } from 'react'
import { Container, Accordion, Card,  Form, Button } from 'react-bootstrap'

export default class ExpertiseComponent extends Component {

    render() {
        return (
            <Container style={{ backgroundColor: '#FC5252', height: '441pt', width: '900pt' }}>
                <h1 style={{ alignContent: "middle" }}>I have Expertise in:</h1>
                <br></br>
                <br></br>
                <Container className="vertical-center" style={{ backgroundColor: "pink", width: "500pt" }}>
                    <br></br>
                    <Container className="vertical-center" style={{ width: "450pt" }}>
                        <Accordion >
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Programming Languages
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Form.Group controlId="formBasicCheckbox" className="vertical-left" >
                                            <Form.Check type="checkbox" label="C#" />
                                            <Form.Check type="checkbox" label="JavaScript" />
                                        </Form.Group>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Libraries
                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Design Tools
                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Testing Framework
                        </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Container>
                    <br></br>
                    <Button variant="info" href="/recommend">Get Start Now</Button>
                    <br></br>
                </Container>
                <br></br>
            </Container>
        )
    }
}                      