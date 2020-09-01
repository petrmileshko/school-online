import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import logo from '../../img/logo.png';

export const Login = () => {
    const auth = useContext(AuthContext);
    const {loading, request} = useHttp();
    const [form, setForm] = useState({
        email: '',
        pass: ''
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    const loginHandler = async () => {
        try {
            const data = await request(
                'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/MainController.php',
                'POST',
                {Table: 'Users', action: 'login', ...form}
            );

            auth.login( data.question, data.id, data.access );
        } catch (e) {}
    }

    return (
        <Container fluid className="auth__page">
            <Row>
                <Col md={5} lg={6} xl={8} className="col-left">
                    <div className="title__wrapper">
                        <h1 className="title">Welcome To Education Online!</h1>
                        <span className="subtitle">Etiam consequat urna at magna bibendum, in tempor arcu fermentum vitae mi massa egestas.</span>
                        <span className="h3 pt-5" style={{color: '#fff'}}>Данные для авторизации в приложении</span>
                        <span className="h4 pt-3" style={{color: '#fff'}}>Учитель:</span>
                        <span>Email: ivan@gamle.ru</span>
                        <span>Password: 1234</span>
                    </div>
                </Col>
                <Col md={7} lg={6} xl={4} className="col-right">
                    <div className="auth-form__wrapper">
                        <img
                            className="logo"
                            src={ logo }
                            alt="logo"
                            width="140"
                            height="127"
                        />
                        <span className="h3 auth__title text-center">Sign In To Education Online</span>

                        <Form className="form__signIn">
                            <Form.Group controlId="inputEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={ form.email }
                                    onChange={ changeHandler }
                                />
                                <Form.Label>Email</Form.Label>
                                <span className="bar"></span>
                            </Form.Group>
                            <Form.Group controlId="inputPassword">
                                <Form.Control
                                    type="password"
                                    name="pass"
                                    value={ form.pass }
                                    onChange={ changeHandler }
                                />
                                <Form.Label>Password</Form.Label>
                                <span className="bar"></span>
                            </Form.Group>
                            <div className="form__include">
                                <Form.Check
                                    type="checkbox"
                                    name="checkbox"
                                    label="Remember me"
                                    id="check_remember"
                                />
                                <a href="/" className="forgot-pass">Forgot Password?</a>
                            </div>
                            <Button
                                className="btn btn-primary btn__gradient btn__grad-danger btn__sign-in"
                                type="submit"
                                disabled={ loading }
                                onClick={ loginHandler }
                            >
                            Sign in
                            </Button>
                        </Form>
                        <div className="register">
                            <span className="register__text">Don't have an account?</span>
                            <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}