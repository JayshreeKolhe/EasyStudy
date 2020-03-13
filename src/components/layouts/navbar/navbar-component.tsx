import React, { Component } from 'react';
import './navbar.scss'
import { Navbar, Nav, Button } from 'react-bootstrap';
import HomeLogo from '../../../assets/images/logo.png'

export default class NavBarComponent extends Component {
    render() {
        return (
            <Navbar bg="light" >
                <Navbar.Brand href="/">
                    <img id="logo" src={HomeLogo}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        {/* <Nav.Link href="#login">Sign Up</Nav.Link> */}
                        <Button variant="outline-success">Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
