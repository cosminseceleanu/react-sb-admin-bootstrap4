import React from 'react';

import {Nav} from 'ahoy-reactstrap';

import SidebarItem from './sidebar-item';

const Sidebar = () => {
    return (
        <Nav navbar className="navbar-sidenav">
            <SidebarItem title="Dashboard" icon="fa-dashboard"/>
            <SidebarItem title="Charts" icon="fa-area-chart"/>
            <SidebarItem title="Tables" icon="fa-table"/>
        </Nav>
    );
};

export default Sidebar;