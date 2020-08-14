import React from 'react';

import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Content from '../Content/Content.jsx';

export default function Layout () {

    return (
        <div className="page page__profile">
            <Header />
            <div className="page__content d-flex align-items-stretch">
                <Sidebar />
                <Content />
            </div>
        </div>
    )
}