import React, { Component } from 'react';
import { Row, Col,Form,Card } from 'react-bootstrap';
import '../HeadSection/style.css'

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home__bg__style">
                <Row className="mt-4">
                    <Col md={6}>
                        <div className="home__text__style">
                            <h3 className="mt-5">This is Ariyat Sinha</h3>
                            <p><b>Software Engineer :</b> Web && Application Developer</p>

                        </div>
                        <Row className="mt-5">
                            <Col md={4}>
                                <hr />
                            </Col>
                            
                            <Col md={4}>
                            <button className="btn btn-outline-warning btn-round">Download Resume</button>
                            </Col>
                            <Col md={4}>
                                <hr />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <div className="p-4"  style={{marginTop:'300px'}}>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="text" placeholder="Enter Email"></Form.Control>
                                </Form.Group>
                                <Form.Group>
                                   <button className="btn btn-outline-info">Subscribe</button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Home;