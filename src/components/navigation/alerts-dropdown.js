import React from 'react';

import {
    NavDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Badge
} from 'reactstrap';

const AlertsDropdown = ({isDropdownOpen, toogleDropdown}) => {
    return (
        <NavDropdown isOpen={isDropdownOpen} toggle={toogleDropdown}>

            <DropdownToggle nav className="nav-link dropdown-toggle mr-lg-2">
                <i className="fa fa-fw fa-bell"/>
                <span className="d-lg-none">Alerts
                    <Badge color="warning" pill>6 New</Badge>
                 </span>
                <span className="new-indicator text-warning d-none d-lg-block">
                    <i className="fa fa-fw fa-circle"/>
                    <span className="number">6</span>
                </span>
            </DropdownToggle>
            <DropdownMenu>
                    <DropdownItem header> New Alerts: </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                        <span className="text-success">
                             <strong><i className="fa fa-long-arrow-up"/>Status Update</strong>
                        </span>
                        <span className="small float-right text-muted">11:21 AM</span>
                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem>
                        <span className="text-danger">
                            <strong> <i className="fa fa-long-arrow-down"/> Status Update</strong>
                        </span>
                        <span className="small float-right text-muted">11:21 AM</span>
                        <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                    </DropdownItem>
            </DropdownMenu>
        </NavDropdown>
    )
};

export default AlertsDropdown;