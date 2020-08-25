import React, { useState, useCallback, useEffect, useContext } from 'react';
import { Header } from "../components/Header/Header.jsx";
import { Sidebar } from "../components/Sidebar/Sidebar.jsx";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { Profile } from "../components/Profile/Profile.jsx";
import { ProfileSettings } from "../components/Profile/ProfileSettings.jsx";

import { Container, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export const ProfilePage = props => {
    const [sbShrink, setSbShrink] = useState(true);
    const {userId, userAccess} = useContext(AuthContext);
    const {loading, request} = useHttp();
    const [user, setUser] = useState(null);
    
    const sidebarToggleHandler = useCallback( () => {
        
        setSbShrink(prev => !prev);
        
    }, []);

    useEffect(() => {
        const userData = async () => {
            try {
                const data = await request(
                    'https://cors-anywhere.herokuapp.com/http://test-school.webpeternet.com/RestController.php',
                    'POST',
                    {Table: 'Users', action: 'getUser', id: userId}
                );

                setUser(data);

            } catch (e) {}
        }
        userData();
    }, [userId, request]);

    return (
        <div className={`page page__profile${ sbShrink ? '' : ' sidebar-shrink' }`}>
            <Header 
                sbToggle={ sidebarToggleHandler }
                sidebarShrink={sbShrink}
            />
            <div className="page__content d-flex align-items-stretch">
                <Sidebar sidebarShrink={sbShrink} />
                {
                    (loading || !user) &&
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }
                {(!loading && user) &&
                    <div className="content__inner profile">
                    <Container fluid>
                        <Row>
                            <div className="content__header">
                                <h1 className="content__header--title">Profile</h1>
                                <div className="breadcrumb__wrapper">
                                    <ul className="breadcrumb__list">
                                        <li className="breadcrumb__item">
                                            <a href="/" className="breadcrumb__link">Home</a>
                                        </li>
                                        <li className="breadcrumb__item">
                                            <span className="breadcrumb__link">Profile</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                        <Row className="flex-row">
                            <Col xl={3}>
                                <Profile user={ user } />
                            </Col>
                            <Col xl={9}>
                                <div className="widget__wrapper has-shadow">
                                    <div className="widget__header">
                                        <h4 className="widget__title">Update Profile</h4>
                                    </div>
                                    <ProfileSettings user={ user } />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                }
            </div>
        </div>
    )
}