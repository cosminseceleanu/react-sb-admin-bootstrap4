import React from 'react';
import {
    NavItem,
    NavLink,
    Form,
    InputGroup,
    Input,
    Button,
} from 'ahoy-reactstrap';

import AlertsDropdownContainer from '../../containers/alerts-dropdown-container';
import MessagesDropdownContainer from '../../containers/messages-dropdown-container';

const Header = () => {
    return (
        <ul className="navbar-nav ml-auto">
            <MessagesDropdownContainer/>
            <AlertsDropdownContainer/>
            <NavItem>
                <Form className="form-inline my-2 my-lg-0 mr-lg-2">
                    <InputGroup>
                        <Input placeholder="Search for..." />
                        <Button color="primary"> <i className="fa fa-search"/></Button>
                    </InputGroup>
                </Form>
            </NavItem>
            <NavItem>
                <NavLink href="/logout"> <i className="fa fa-fw fa-sign-out"/> Logout </NavLink>
            </NavItem>
        </ul>
    )
};

export default Header;