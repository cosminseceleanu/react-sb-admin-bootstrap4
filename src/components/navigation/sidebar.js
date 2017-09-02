import React from 'react';

import SidebarItem from './sidebar-item';

const Sidebar = () => {
    return (
        <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <SidebarItem title="Dashboard" icon="fa-dashboard"/>
            <SidebarItem title="Charts" icon="fa-area-chart"/>
            <SidebarItem title="Tables" icon="fa-table"/>
        </ul>
    );
};

export default Sidebar;