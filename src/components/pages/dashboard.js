import React from 'react';
import {Row, Col} from 'reactstrap'

import Feed from "../feed/feed";
import IconCard from "../ui/icon-card";

const Dashboard = () => {
    return (
        <div>
            <Row>
                {renderIconCards()}
            </Row>
            <Row> <Feed/> </Row>
        </div>
    )
};

const renderIconCards = () => {
    return iconCardsMessages.map((message, index) => {
        return <Col key={index} sm="6" xl="3" className="mb-3"><IconCard {...message}/></Col>
    });
};

const iconCardsMessages = [
    {
        bgColorClass: 'bg-primary',
        icon: 'fa fa-fw fa-comments',
        text: '26 New Messages!',
        buttonText: 'View Details'
    },
    {
        bgColorClass: 'bg-warning',
        icon: 'fa fa-fw fa-list',
        text: '11 New Tasks!',
        buttonText: 'View Details'
    },
    {
        bgColorClass: 'bg-success',
        icon: 'fa fa-fw fa-shopping-cart',
        text: '123 New Orders!',
        buttonText: 'View Details'
    },
    {
        bgColorClass: 'bg-danger',
        icon: 'fa fa-fw fa-support',
        text: '13 New Tickets!',
        buttonText: 'View Details'
    }
];

export default Dashboard;