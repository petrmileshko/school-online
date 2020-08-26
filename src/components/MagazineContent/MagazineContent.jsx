import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {Magazine} from '../Magazine/Magazine';
import GroupsList from '../Magazine/GroupsList';


export default function MagazineContent (props) {

    const {user} = props;

    return (
        <div className="content__inner profile">
            <Container fluid>
                <Row>
                    <div className="content__header">
                        <h1 className="content__header--title">Журнал оценок</h1>
                        <div className="breadcrumb__wrapper">
                            <ul className="breadcrumb__list">
                                <li className="breadcrumb__item">
                                    <a href="#" className="breadcrumb__link">Home</a>
                                </li>
                                <li className="breadcrumb__item">
                                    <span href="#" className="breadcrumb__link">Magazine</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Row>
                <Row className="flex-row">
                    <Col xl={12}>
                        <Magazine user={ user }/>
                    </Col>
                
                </Row>
                <Row className="flex-row">
                    <Col xl={12}>
                        <GroupsList user={ user }/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

    