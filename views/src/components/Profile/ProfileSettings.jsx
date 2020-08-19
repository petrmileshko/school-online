import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

export default function ProfileSettings (props) {

    const {user} = props;

    return (
        <div className="widget__body">
            <span className="widget__section--title h4">01. Personnal Informations</span>
            <Form className="form-horizontal">
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userName">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">Full Name</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="text" placeholder={ user.name } />
                    </Col>
                </Form.Group>
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userEmail">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">Email</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="email" placeholder={ user.email } />
                    </Col>
                </Form.Group>
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userPhone">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">Phone</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="tel" placeholder={ user.phone } />
                    </Col>
                </Form.Group>
            </Form>
            <span className="widget__section--title h4">02. Change Password</span>
            <Form className="form-horizontal">
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userCurrentPassword">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">Current Password</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userNewPassword">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">New Password</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group className="form-group row d-flex align-items-center mb-5" controlId="userConfirmPassword">
                    <Form.Label className="col-lg-3 form-control-label d-flex justify-content-lg-end">Confirm Password</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
            </Form>
            <hr className="separator-dashed" />
            <div className="btn__group">
                <Button className="btn btn__gradient btn__grad-danger" type="submit">Save</Button>
                <Button variant="secondary" type="reset">Cancel</Button>
            </div>
        </div>
    )
}