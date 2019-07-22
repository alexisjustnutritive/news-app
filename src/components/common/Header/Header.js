import React from 'react';
import './header.scss';

import { Navbar, Nav, Form, FormControl, Badge } from 'react-bootstrap';

const Header = ( { category, countryCodes, country, Uuid } ) => {
    
    let countryName = countryCodes.find( element => element[ 'alpha-2' ] === country );
    let countrySelected = countryName !== undefined ? <span className="badge badge-secondary mx-2">country: { countryName.name }</span> : null;

    

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sd" className="m-0 text-white" style={{ padding: "0.8rem 0" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
                <Navbar.Collapse id="basic-navbar-nav" className="mx-4 py-2 text-white" >
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
                                    { countryCodes.map( countryitem => <option key={ Uuid() }>{ countryitem.name }</option>) }
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Nav>
                </Navbar.Collapse>
                <h5 className="flex-grow-1 text-center">All news in one place</h5>
            </Navbar>
            <div className="filter-container d-flex justify-items-center p-2 bg-white">
                { countrySelected }
                <span className="badge badge-secondary">category: { category }</span>
            </div>
        </header>
    );
}

export default Header;
