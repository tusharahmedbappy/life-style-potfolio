import React, { Component } from 'react';
import Navigation from './HeadSection/Navigation'
import SideNav from './HeadSection/SideNav'
import { Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom'


import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Resume from './Pages/Resume';


class Admin extends Component {
    state = {}
    render() {
        return (
            <div>

                <Row>
                    <Col md={12}>
                        <Navigation />
                    </Col>
                    <Col md={2} className="mt-4">
                        <div className="">
                            <SideNav />
                        </div>
                    </Col>
                    <Col md={10} className="">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/About" component={About} />
                        <Route exact path="/Contact" component={Contact} />
                        <Route exact path="/Portfolio" component={Portfolio} />
                        <Route exact path="/Blog" component={Blog} />
                        <Route exact path="/Resume" component={Resume} />
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Admin;