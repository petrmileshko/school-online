import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';

import { ReactComponent as IconUser } from '../../img/user.svg';
import { ReactComponent as OpenBook } from '../../img/open-book.svg';
import { ReactComponent as LogOut } from '../../img/logout.svg';

export default function Sidebar (props) {

    // let dropdownToggler = evt => {
    //     evt.target.closest('.sb-dropdown').classList.toggle('open');
    // }

    const {user} = props;
   
    return (
        <div className="sidebar sidebar__default">
            <div className={ `side-navbar${ props.sidebarShrink ? ' shrink' : '' }` }>
                <Nav className="side-navbar__list flex-column flex-nowrap">
                    <Nav.Item className="side-navbar__item">
                        <Link to="/profile" className="side-navbar__link">
                            <IconUser className="side-navbar__icon icon-user" />
                            <span className="side-navbar__link--title">Profile</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="side-navbar__item">
                        <Link to="/education" className="side-navbar__link">
                            <OpenBook className="side-navbar__icon icon-edu" />
                            <span className="side-navbar__link--title">Education</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="side-navbar__item">
                        <Link to="/" className="side-navbar__link">
                            <LogOut className="side-navbar__icon icon-logout" />
                            <span className="side-navbar__link--title">Logout</span>
                        </Link>
                    </Nav.Item>
                    <Nav.Item className="side-navbar__item">
                        <Link to="/magazine" className="side-navbar__link">
                        <OpenBook className="side-navbar__icon icon-edu" />
                            <span className="side-navbar__link--title">Журнал</span>
                        </Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}