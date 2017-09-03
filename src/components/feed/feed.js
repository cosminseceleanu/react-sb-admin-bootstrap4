import React from 'react';
import {
    Row,
    Col
} from 'ahoy-reactstrap';

import Item from './item';
import {feedItems} from "../../data/feed-items";

const Feed = () => {
    const items = feedItems.map((item, index) => <Item key={index} item={item}/>);
    return (
        <Row>
            <Col lg="8">
                <div className="mb-0 mt-4">
                    <i className="fa fa-newspaper-o"/> News Feed
                </div>
                <hr className="mt-2"/>
                <div className="card-columns">
                    {items}
                </div>
            </Col>
        </Row>
    )
};

export default Feed;