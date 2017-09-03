import React from 'react';
import {Container} from 'ahoy-reactstrap';

import Feed from './feed/feed';

const Content = () => {
    return (
        <div className="content-wrapper">
            <Container fluid>
                <Feed/>
            </Container>
        </div>
    )
};

export default Content;