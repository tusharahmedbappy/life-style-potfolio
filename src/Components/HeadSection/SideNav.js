import React, { Component } from 'react';
import { Col, Row, Navbar, Nav } from 'react-bootstrap';
import { NavLink,Link } from 'react-router-dom';
import './style.css'

let style = {
    color: 'black',
    fontWeight: 'blod'
}
class SideNav extends Component {
    state = {}

    render() {
        return (
            <Row className="">
                <Col md={12}>
                    <nav className="side_nav_style">
                        <ul>
                            <li>
                                <Link to="/">
                                    <i class="la la-home"></i>
                                    <span> Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/About">
                                    <i class="la la-user"></i>
                                    <span> About</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Resume">
                                    <i class="la la-briefcase"></i>
                                    <span> Resume</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Portfolio">
                                    <i class="la la-medkit"></i>
                                    <span> Portfolio</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Contact">
                                    <i class="la la-envelope"></i>
                                    <span> Contact</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Blog">
                                    <i class="la la-newspaper-o"></i>
                                    <span> Blog</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </Col>
            </Row>

        );
    }
}

export default SideNav;