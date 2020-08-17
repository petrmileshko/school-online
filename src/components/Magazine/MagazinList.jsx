import React from 'react';

import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import MagazineContent from './MagazineContent.jsx';

export default function MagazineList () {

    return (
        <div className="page page__profile">
            <Header />
            <div className="page__content d-flex align-items-stretch">
                <Sidebar />
                <MagazineContent />
            </div>
        </div>
    )
}