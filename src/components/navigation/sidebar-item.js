import React from 'react';

const SidebarItem = ({title, icon, href = '#'}) => {
    return (
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title={title}>
            <a className="nav-link" href={href}>
                <i className={`fa fa-fw ${icon}`}/>
                <span className="nav-link-text">{title}</span>
            </a>
        </li>
    )
};

export default SidebarItem;