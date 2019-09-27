import React, { Component } from 'react';
import {Nav,Navbar, Badge} from 'react-bootstrap'
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
    state = {}
    render() {
        return (
            <div className="my-5">
                <div className="container-fluide">
                    <Navbar expand="lg" className="fixed-top bg__color">
                        <div className="navbar__brand">
                            <img src="/image/profile.jpg" alt="" /> <span>Ariyat Sinha</span>
                        </div>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                <Nav.Link><Badge variant="danger">5</Badge>Message</Nav.Link>
                                <Nav.Link><Badge variant="warning">32</Badge>Info</Nav.Link>
                                <Nav.Link><Badge variant="success">99+</Badge>Connect</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>
                </div>
            </div>
        );
    }
}

export default Navigation;