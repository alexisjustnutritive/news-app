import React from 'react';
import './header.scss';

import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

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
                                    { countryCodes.map( country => <option key={ country.country }>{ country.name }</option>) }
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <h5 className="flex-grow-1 text-center">All news in one place</h5>
            </Navbar>
    )
}

export default Header
