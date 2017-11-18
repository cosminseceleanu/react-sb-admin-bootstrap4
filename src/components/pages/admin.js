import React from 'react';
import {Container} from 'reactstrap';

import Dashboard from './dashboard';
import NavigationContainer from '../../containers/navigation-container';

const Admin = () => {
    return (
        <div>
            <NavigationContainer/>
            <div className="content-wrapper">
                <Container fluid>
                    <Dashboard/>
                </Container>
            </div>
        </div>
    )
};

export default Admin;