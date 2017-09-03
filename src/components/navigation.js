import React from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Collapse
} from 'ahoy-reactstrap';

import Sidebar from './navigation/sidebar';
import Header from './navigation/header';

const Navigation = ({isOpen, toogleNavbar}) => {
    return (
        <Navbar id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <NavbarBrand className="navbar-brand-title">SB Admin React</NavbarBrand>
            <NavbarToggler onClick={toogleNavbar}/>
            <Collapse navbar isOpen={isOpen}>
                <Sidebar/>
                <Header/>
            </Collapse>
        </Navbar>
    )
};

export default Navigation;