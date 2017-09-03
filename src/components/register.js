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
    Button,
    Col
} from 'ahoy-reactstrap';

const Register = () => {
    return (
        <Card className="card-register mx-auto mt-5">
            <CardHeader>Register an Account</CardHeader>
            <CardBody>
                <Form>
                    <FormGroup>
                        <div className="form-row">
                            <Col md="6">
                                <Label>First name</Label>
                                <Input type="text" placeholder="Enter first name"/>
                            </Col>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Col md="6">
                                <Label>Last name</Label>
                                <Input type="text" placeholder="Enter last name"/>
                            </Col>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Col md="6">
                                <Label>Email address</Label>
                                <Input type="email" placeholder="Enter email"/>
                            </Col>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Col md="6">
                                <Label>Password</Label>
                                <Input type="password" placeholder="Password"/>
                            </Col>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div className="form-row">
                            <Col md="6">
                                <Label>Confirm Password</Label>
                                <Input type="password" placeholder="Confirm password"/>
                            </Col>
                        </div>
                    </FormGroup>
                    <Button color="primary" block>Register</Button>
                </Form>
                <div className="text-center">
                    <Link className="d-block small mt-3" to="/login">Login</Link>
                    <Link className="d-block small" to="/forgot-password">Forgot Password?</Link>
                </div>
            </CardBody>
        </Card>
    )
};

export default Register;