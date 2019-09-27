import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Resume extends Component {
    state = {}
    render() {
        return (
            <div className="my-5 px-3">
                <Row>
                    <Col md={6} className="m-auto">
                        <h3 className="text-center">Resume</h3>
                        <hr />
                    </Col>
                    <Col md={12} className="bg-info">
                        <Row>
                            <Col md={12} className="py-2 text-center">
                                <h2>Md.Tusar Ali</h2>
                                <h4>Junior Software Engineer</h4>
                            <h6>Gangni,Meherpur,Bangladesh</h6>
                                <span>Email : tusarahmedbappy@gmail.com</span><br />
                                <span>https : ariyatsinha.ga</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} className="my-4">
                        <Row>
                            <Col md={6}>
                                <div className="service__style">
                                    <span>EDUCATION</span>
                                </div>
                                <div className="education_section">
                                    <h4>Bangladesh Polytechnic Institute of Technology .</h4>
                                    <span style={{ fontSize: '20px' }}>Computer Science and Engineering.</span><br />
                                    <span>  Jun 4,2016 to Mar 2, 2020·Rajshahi.</span><br/>


                                    <h5>Udacity Online Campus Nanodegree Programs.</h5>
                                    <span style={{ fontSize: '20px' }}>Software Development.</span><br />
                                    <span>Laravel.Reactjs.ReactNative</span><br />
                                    <span>Dec 3,2018 to Apr 23,2019·MountainView,California.</span>

                                    <h4>Udemy,Inc Online Learning Platform.Completed Courses:</h4>
                                    <span>-Modern HTML & CSS From The Beginning by Brad Traversy.</span><br/>
                                    <span>-Beginning PHP Practices by Edwin Dias.</span><br/>
                                    <span>-Modern Advanced OPP PHP Practices by Edwin Dias.</span><br/>
                                    <span>-Reactjs– The  Beginning by Mosh Hamedani..</span><br/>
                                    <span>-React Practise Course by Coding Revolution.</span><br/>
                                    <span>-The Complete Guide To Build RESTful APIs by Mosh Hamedani.</span><br/>

                                    <h5>Currently Taking:</h5>
                                    <span>-The Modern GraphQL Bootcamp(AdvancedNode.js)</span>
                                    <span> -DataBase DesignA-Z™ Learn MSSQL & Postgre SQL</span>
                                </div>
                                <div className="service__style my-4">
                                    <span>EXPERIENCE</span>
                                </div>
                                <div>
                                    <h5>OaMetrix,Inc.</h5>
                                    <span>FrontEnd Engineer.</span><br/>
                                    <span>Qualified for Laravel, React,WordPress.</span><br/>
                                    <span>Dec 14,2018 to Mar 21,2019·South Africa·ViaRemote</span><br/>
                                



                                </div>

                            </Col>
                            <Col md={6}>
                                <div className="service__style">
                                    <span>PASSION</span>
                                </div>
                                <div className="passion_section">
                                    <ul>
                                        <li>
                                            <h4>Programming</h4>
                                        </li>
                                        <li>

                                            <h4>Travelling</h4>
                                        </li>
                                        <li>

                                            <h4>Problem Solving</h4>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Resume;