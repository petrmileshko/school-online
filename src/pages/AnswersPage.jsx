import React, { useState, useCallback } from 'react';
import { Header } from "../components/Header/Header.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import { AnswersList } from '../components/Answers/AnswersList.jsx';

import { Container, Row, Col } from 'react-bootstrap';

export const AnswersPage = () => {
    const [sbShrink, setSbShrink] = useState(true);
    
    const sidebarToggleHandler = useCallback(() => {
        
        setSbShrink(prev => !prev);
        
    }, []);

    return (
        <div className={`page page__answers${ sbShrink ? '' : ' sidebar-shrink' }`}>
            <Header 
                sbToggle={ sidebarToggleHandler }
                sidebarShrink={sbShrink}
            />
            <div className="page__content d-flex align-items-stretch">
                <Sidebar sidebarShrink={sbShrink} />
                <div className="content__inner tasks">
                    <Container fluid>
                        <Row>
                            <div className="content__header">
                                <h1 className="content__header--title">Answers</h1>
                                <div className="breadcrumb__wrapper">
                                    <ul className="breadcrumb__list">
                                        <li className="breadcrumb__item">
                                            <a href="/" className="breadcrumb__link">Home</a>
                                        </li>
                                        <li className="breadcrumb__item">
                                            <span className="breadcrumb__link">Answers</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                        <Row className="flex-row">
                            <Col>
                                <div className="widget__wrapper has-shadow">
                                    <AnswersList />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}