import React, { Component } from 'react'
import { Navbar, Nav, Container, NavbarBrand, Button } from 'react-bootstrap'
import HomeLogo from '../../../assets/images/logo.png'
import 'font-awesome/css/font-awesome.min.css';

export default class NavFooterComponent extends Component {
    render() {
        return (
            <div className="sticky-bottom">
                <Navbar color="dark" >
                    <Container>
                        <Navbar.Brand href="/">
                            <img id="logo" src={HomeLogo}></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav >
                                <Nav.Link href="/about">About Us</Nav.Link>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                                <Nav.Link  href="/fb" > 
                                {/* {/* Follow Us: */}
                                    <Button className="fa fa-facebook"></Button>                                 </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
        )
    }
}