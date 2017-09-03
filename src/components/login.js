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

const Login = () => {
    return (
        <Card className="card-login mx-auto mt-5">
            <CardHeader>Login</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <Label>Email address</Label>
                        <Input type="email" placeholder="Enter email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button color="primary" block>Login</Button>
                </Form>
                <div className="text-center">
                    <Link className="d-block small mt-3" to="/register">Register an Account</Link>
                    <Link className="d-block small" to="/forgot-password">Forgot Password?</Link>
                </div>
            </CardBody>
        </Card>
    )
};

export default Login;