import React from 'react';
import {Container} from 'reactstrap';

import Feed from './feed/feed';
import NavigationContainer from '../containers/navigation-container';

const Admin = () => {
    return (
        <div>
            <NavigationContainer/>
            <div className="content-wrapper">
                <Container fluid>
                    <Feed/>
                </Container>
            </div>
        </div>
    )
};

export default Admin;