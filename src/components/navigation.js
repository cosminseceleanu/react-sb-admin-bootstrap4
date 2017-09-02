import React, {Component} from 'react';

import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'ahoy-reactstrap';

import Sidebar from './navigation/sidebar';
import Header from './navigation/header';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar id="mainNav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavbarBrand className="navbar-brand-title">SB Admin React</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar.bind(this)}/>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <Sidebar/>
                    <ul className="navbar-nav sidenav-toggler">
                        <li className="nav-item">
                            <a className="nav-link text-center" id="sidenavToggler">
                                <i className="fa fa-fw fa-angle-left"/>
                            </a>
                        </li>
                    </ul>
                    <Header/>
                </div>
            </Navbar>
        )
    }
}