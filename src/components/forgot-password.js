import React from 'react';
import {Link} from 'react-router-dom';

import {
    Card,
    CardBody,
    CardHeader,
    Form,
    Input,
    Label,
    FormGroup,
    Button
} from 'ahoy-reactstrap';

const ForgotPassword = () => {
    return (
        <Card className="card-login mx-auto mt-5">
            <CardHeader>Reset Password</CardHeader>
            <CardBody>
                <div className="text-center mt-4 mb-5">
                    <h4>Forgot your password?</h4>
                    <p>Enter your email address and we will send you instructions on how to reset your password.</p>
                </div>
                <Form>
                    <FormGroup>
                        <Label>Email address</Label>
                        <Input type="email" placeholder="Enter email"/>
                    </FormGroup>
                    <Button color="primary" block>Reset Password</Button>
                </Form>
                <div className="text-center">
                    <Link className="d-block small mt-3" to="/register">Register an Account</Link>
                    <Link className="d-block small" to="/login">Login</Link>
                </div>
            </CardBody>
        </Card>
    )
};

export default ForgotPassword;