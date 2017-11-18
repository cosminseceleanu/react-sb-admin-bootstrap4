import React from 'react';

import {
    NavDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Badge
} from 'reactstrap';

const MessagesDropdown = ({isDropdownOpen, toogleDropdown, messages}) => {
    return (
        <NavDropdown isOpen={isDropdownOpen} toggle={toogleDropdown}>

            <DropdownToggle nav className="nav-link dropdown-toggle mr-lg-2">
                <i className="fa fa-fw fa-envelope"/>
                <span className="d-lg-none">Messages
                    <Badge color="primary" pill>12 New</Badge>
                </span>
                <span className="new-indicator text-primary d-none d-lg-block">
                    <i className="fa fa-fw fa-circle"/>
                    <span className="number">12</span>
                </span>
            </DropdownToggle>

            <DropdownMenu>
                <DropdownItem header> New Messages: </DropdownItem>
                <DropdownItem divider/>
                {renderMessages(messages)}
            </DropdownMenu>
        </NavDropdown>
    )
};

const renderMessages = messages => {
    return messages.map((message, index) =>
        <DropdownItem key={index}>
            <strong>{message.sender}</strong>
            <span className="small float-right text-muted">{message.date}</span>
            <div className="dropdown-message small">{message.text}</div>
        </DropdownItem>
    )
};

export default MessagesDropdown;