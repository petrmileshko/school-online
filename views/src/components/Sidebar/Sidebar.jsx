import React from 'react';
import { Link } from 'react-router-dom';

import { Nav } from 'react-bootstrap';
import { ReactComponent as IconUser } from '../../img/user.svg';
import { ReactComponent as OpenBook } from '../../img/open-book.svg';
import { ReactComponent as LogOut } from '../../img/logout.svg';

export default function Sidebar (props) {

    let dropdownToggler = evt => {
        evt.target.closest('.sb-dropdown').classList.toggle('open');
    }
    
    return (
        <div className="sidebar sidebar__default">
            <div className={ `side-navbar${ props.sidebarShrink ? ' shrink' : '' }` }>
                <Nav className="side-navbar__list flex-column flex-nowrap">
                    <li className="side-navbar__item">
                        <Link to="/profile" className="side-navbar__link">
                            <IconUser className="side-navbar__icon icon-user" />
                            <span className="side-navbar__link--title">Profile</span>
                        </Link>
                    
                    </li>
                    <li className="side-navbar__item sb-dropdown">
                        <span
                            className="side-navbar__link sb-dropdown__toggler"
                            onClick={ dropdownToggler }
                        >
                            <OpenBook className="side-navbar__icon icon-edu" />
                            <span className="side-navbar__link--title">Education</span>
                        </span>
                        <ul className="nav sb-dropdown__menu flex-column">
                            <li className="nav-item sb-dropdown__item">
                                <Link to="/classes" className="sb-dropdown__link">Classes</Link>
                            </li>
                            <li className="nav-item sb-dropdown__item">
                                <Link to="/lessons" className="sb-dropdown__link">Lessons</Link>
                            </li>
                            <li className="nav-item sb-dropdown__item">
                                <Link to="/tasks" className="sb-dropdown__link">Tasks</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="side-navbar__item">
                        <Link to="/" className="side-navbar__link">
                            <LogOut className="side-navbar__icon icon-logout" />
                            <span className="side-navbar__link--title">Logout</span>
                        </Link>
                    </li>
                </Nav>
            </div>
        </div>
    )
}