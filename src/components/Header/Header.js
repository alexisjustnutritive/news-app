import React from 'react';
import './header.scss';

import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = ( { countryCodes } ) => {
    return (
            <Navbar bg="light" expand="sd">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto py-4">
                        <Form>
                            <Form.Group>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select">
                                    <option>general</option>
                                    <option>health</option>
                                    <option>business</option>
                                    <option>technology</option>
                                    <option>entertainment</option>
                                    <option>science</option>
                                    <option>sports</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control as="select">
                                    { 
                                        countryCodes.map( country => {
                                            <p>Hello World</p>        
                                        } )
                                    }
                                    
                                </Form.Control>
                            </Form.Group>

                        </Form>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header
