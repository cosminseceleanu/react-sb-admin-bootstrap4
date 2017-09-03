import React from 'react';

import {
    NavItem,
    NavLink
} from 'ahoy-reactstrap';

const SidebarItem = ({title, icon, href = '/'}) => {
    return (
        <NavItem>
            <NavLink href={href}>
                <i className={`fa fa-fw ${icon}`}/>
                <span className="nav-link-text">{title}</span>
            </NavLink>
        </NavItem>
    )
};

export default SidebarItem;