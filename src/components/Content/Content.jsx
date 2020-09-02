import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Profile from '../Profile/Profile.jsx';
import ProfileSettings from '../Profile/ProfileSettings.jsx';

export default function Content () {
    return (
        <div className="content__inner profile">
            <Container fluid>
                <Row>
                    <div className="content__header">
                        <h1 className="content__header--title">Profile</h1>
                        <div className="breadcrumb__wrapper">
                            <ul className="breadcrumb__list">
                                <li className="breadcrumb__item">
                                    <a href="#" className="breadcrumb__link">Home</a>
                                </li>
                                <li className="breadcrumb__item">
                                    <span href="#" className="breadcrumb__link">Profile</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row className="flex-row">
                    <Col xl={3}>
                        <Profile />
                    </Col>
                    <Col xl={9}>
                        <ProfileSettings />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}