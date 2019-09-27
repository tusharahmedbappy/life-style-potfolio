import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

class Contact extends Component {
    state = {}
    render() {
        return (
            <div className="my-5">
                <Row>
                    <Col md={6} className="m-auto">
                        <h3 className="text-center">Contact</h3>
                        <hr />
                    </Col>

                    <Col md={12} className="my-5">
                        <Row>
                            <Col md={6}>
                                <Col md={12}>
                                    <Col md={12} >
                                        <div className="service__style">
                                            <span>Get In Touch</span>
                                        </div>
                                    </Col>
                                    <Col md={12} className="my-3">
                                        <div className="p-2">
                                            <i className="la la-map-marker la-1x text-primary"></i>
                                            <span> Los Angeles, USA</span>
                                        </div>
                                        <div className="p-2">
                                            <i className="la la-envelope la-1x text-primary"></i>
                                            <span> example@example.com</span>

                                        </div>
                                        <div className="p-2">
                                            <i className="la la-phone la-1x text-primary"></i>
                                            <span> +1234567890</span>

                                        </div>
                                        <div className="p-2">
                                            <i className="la la-check-circle la-1x text-primary"></i>
                                            <span> Freelance Available</span>

                                        </div>
                                    </Col>
                                </Col>
                                <Col md={12}>
                                    <Col md={12} >
                                        <div className="service__style my-3">
                                            <span>Contact Form</span>
                                        </div>
                                    </Col>
                                    <Col md={12} >
                                        <form action="">
                                            <div className="form-group">
                                                <input 
                                                type="text" 
                                                placeholder="Name Surname" 
                                                className="form-control" 
                                                
                                                />
                                                <i className="la la-user"></i>
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                type="text" 
                                                placeholder="Email Address" 
                                                className="form-control" 
                                                
                                                />
                                                <i className="la la-envelope"></i>
                                            </div>
                                            <div className="form-group">
                                                <textarea className="form-control" cols="30" placeholder="Your Message to me"></textarea>
                                                <i className="la la-comment"></i>
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-outline-primary">Send Message</button>
                                            </div>

                                        </form>
                                    </Col>

                                </Col>
                            </Col>
                            <Col md={5} className="ml-2">
                                <div id="sub-frame-error" jstcache="0">
                                        <div class="icon icon-offline" jseval="updateIconClass(this.classList, iconClass)" jstcache="1"></div>
                                    <div id="sub-frame-error-details" jsselect="summary" jsvalues=".innerHTML:msg" jstcache="2">No internet
                                    <br/><i className="la la-smile-o la-4x"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>


                </Row>
            </div>
        );
    }
}

export default Contact;