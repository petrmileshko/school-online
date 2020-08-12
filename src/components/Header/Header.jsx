import React from 'react';
import { Navbar } from 'react-bootstrap';

import logo from '../../img/logo.png';


export default function Header () {
    return (
        <header className="header">
            <Navbar className="fixed-top">
                <div className="navbar__wrapper">
                    <div className="navbar__header">
                        <Navbar.Brand href="#">
                            <img
                                src={ logo }
                                width="70"
                                height="64"
                                className="brand__img"
                                alt="School Online"
                            />
                            <span className="brand__title">School Online</span>
                        </Navbar.Brand>
                        <button className="btn navbar__toggler" type="button">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </Navbar>
        </header>
    )
}