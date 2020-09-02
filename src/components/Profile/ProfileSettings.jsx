import React from 'react';

import { Col, Form, Button } from 'react-bootstrap';

export const ProfileSettings = props => {
    const { user } = props;

    const formGroupClasses = 'form-group row d-flex align-items-center mb-5';
    const formLabelClasses = 'col-lg-3 form-control-label d-flex justify-content-lg-end';

    return (
        <div className="widget__body">
            <span className="widget__section--title h4">01. Personnal Informations</span>
            <Form className="form-horizontal">
                <Form.Group className={ formGroupClasses } controlId="userName">
                    <Form.Label className={ formLabelClasses }>Full Name</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="text" placeholder={ user.name } />
                    </Col>
                </Form.Group>
                <Form.Group className={ formGroupClasses } controlId="userEmail">
                    <Form.Label className={ formLabelClasses }>Email</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="email" placeholder={ user.email } />
                    </Col>
                </Form.Group>
                <Form.Group className={ formGroupClasses } controlId="userPhone">
                    <Form.Label className={ formLabelClasses }>Phone</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="tel" placeholder="" />
                    </Col>
                </Form.Group>
            </Form>
            <span className="widget__section--title h4">02. Change Password</span>
            <Form className="form-horizontal">
                <Form.Group className={ formGroupClasses } controlId="userCurrentPassword">
                    <Form.Label className={ formLabelClasses }>Current Password</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group className={ formGroupClasses } controlId="userNewPassword">
                    <Form.Label className={ formLabelClasses }>New Password</Form.Label>
                    <Col lg={7}>
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group className={ formGroupClasses } controlId="userConfirmPassword">
                    <Form.Label className={ formLabelClasses }>Confirm Password</Form.Label>
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