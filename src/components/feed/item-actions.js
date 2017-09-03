import React from 'react';

import {CardBody} from 'ahoy-reactstrap';

const ItemActions = () => {
    return (
        <CardBody className="py-2 small">
            <a className="mr-3 d-inline-block" href="/">
                <i className="fa fa-fw fa-thumbs-up"/>Like
            </a>
            <a className="mr-3 d-inline-block" href="/">
                <i className="fa fa-fw fa-comment"/> Comment
            </a>
            <a className="d-inline-block" href="/">
                <i className="fa fa-fw fa-share"/> Share
            </a>
        </CardBody>
    )
};

export default ItemActions;