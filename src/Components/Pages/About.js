import React, { Component } from 'react';
import { Row, Col, Card, } from 'react-bootstrap'

class About extends Component {
    state = {}
    render() {
        return (
            <div className="my-5">
                <Row>
                    <Col md={6} className="m-auto">
                        <h3 className="text-center"> About Me</h3>
                        <hr />
                    </Col>

                    <Col md={12}>
                        <div className="about__text px-3 my-4 text-center">
                            <span>Hi, I'm Ariyat Sinha </span>,invidunt sed labore eirmod ea et, dolor sit sea et est diam lorem sed.
                            Est rebum lorem sed at consetetur et eirmod. I'm good at
                            <span> html, css, wordpress, Material, bootstrap, React,Laravel</span>

                        </div>
                        <div className="media__style text-center my-4">
                            <button className="btn btn-outline-danger">Download CV</button>
                            <i className="la la-linkedin la-2x"></i>
                            <i className="la la-github la-2x "></i>
                            <i className="la la-skype la-2x"></i>
                        </div>
                    </Col>
                    <Col md={12} >
                        <div className="service__style">
                            <span>Services</span>
                        </div>
                    </Col>
                    <Col md={12} >
                        <Row className="services">
                            <Col md={4} className="services p-4">
                                <i className="la la-apple la-2x p-3"></i>
                                <i className="la la-android la-2x p-3"></i>
                                <i className="la la-windows la-2x p-3"></i>
                                <h5>Mobile Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col md={4} className="p-4">
                                <i className="la la-rocket la-2x p-3"></i>
                                <h5>Web Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col md={4} className="p-4">
                                <i className="la la-object-group la-2x p-3"></i>
                                <h5>Web Design</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col md={4} className="p-4">
                                <i className="la la-gamepad la-2x p-3"></i>
                                <h5>Game Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col md={4} className="p-4">
                                <i className="la la-desktop la-2x p-3"></i>
                                <h5>Desktop Development</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>
                            <Col md={4} className="p-4">
                                <i className="la la-bullhorn la-2x p-3"></i>
                                <h5>Binding Indentity</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Col>



                        </Row>
                    </Col>



                    <Col md={12} >
                        <div className="service__style my-5">
                            <span>Pricing</span>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row className="px-3 services">
                            <Col md={4} className="text-center">
                                <div className="mb-5">
                                    <i className="la la-tachometer la-3x text-center"></i>
                                    <h6>BASIC</h6>
                                    <span>$52.2 <small>per/hour</small></span>
                                </div>
                                <div>
                                    <p>IOS Development</p>
                                    <p>Android Development</p>
                                    <p>Window Phone Development</p>
                                    <p>Web Development</p>
                                    <p>Web Design</p>
                                    <p>Game Development</p>
                                    <p>Desktop Development</p>
                                    <p>Branding Identity</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center">
                                <div className="mb-5">
                                    <i className="la la-star la-3x text-center"></i>
                                    <h6>PRIMIUM</h6>
                                    <span>$52.2 <small>per/hour</small></span>
                                </div>

                                <div>
                                    <p>IOS Development</p>
                                    <p>Android Development</p>
                                    <p>Window Phone Development</p>
                                    <p>Web Development</p>
                                    <p>Web Design</p>
                                    <p>Game Development</p>
                                    <p>Desktop Development</p>
                                    <p>Branding Identity</p>
                                </div>
                            </Col>
                            <Col md={4} className="text-center">
                                <div className="mb-5">
                                    <i className="la la-rocket la-3x text-center"></i>
                                    <h6>PROFESSIONAL</h6>
                                    <span>$52.2 <small>per/hour</small></span>
                                </div>
                                <div>
                                    <p>IOS Development</p>
                                    <p>Android Development</p>
                                    <p>Window Phone Development</p>
                                    <p>Web Development</p>
                                    <p>Web Design</p>
                                    <p>Game Development</p>
                                    <p>Desktop Development</p>
                                    <p>Branding Identity</p>
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} >
                        <div className="service__style my-5">
                            <span>Fun Facts</span>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row className="px-3 services">
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <i className="la la-smile-o la-2x"></i>
                                        <h3>255</h3>
                                        <p>Satisfied Customers</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <i className="la la-trophy la-2x"></i>
                                        <h3>25</h3>
                                        <p>Awards Won</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <i className="la la-lightbulb-o la-2x"></i>
                                        <h3>155</h3>
                                        <p>Project Completed</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <Card.Body>
                                        <i className="la la-code la-2x"></i>
                                        <h3>3M +</h3>
                                        <p>Lines of Code</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col md={12} >
                        <div className="service__style my-5">
                            <span>Client</span>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row className="px-3 services">
                            <Col md={2}>
                                <i className="la la-cubes la-4x"></i>
                            </Col>
                            <Col md={2}>
                                <i className="la la-cutlery la-4x"></i>
                            </Col>
                            <Col md={2}>
                                <i className="la la-diamond la-4x"></i>
                            </Col>
                            <Col md={2}>
                                <i className="la la-flask la-4x"></i>
                            </Col>
                            <Col md={2}>
                                <i className="la la-industry la-4x"></i>
                            </Col>
                            <Col md={2}>
                                <i className="la la-paw la-4x"></i>
                            </Col>
                        </Row>
                        
                    </Col>
                    
                </Row>


            </div>
        );
    }
}

export default About;