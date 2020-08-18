import React from 'react';

import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Content from '../Content/Content.jsx';

class Layout extends React.Component {

    state = {
        user: {
            id: '',
            role: 'teacher',
            name: 'David Green'
        },
        sidebarShrink: true
    }

    handleToggleSidebar = () => {
        let sbShrink = !this.state.sidebarShrink;

        this.setState({sidebarShrink: sbShrink});
    }

    render() {

        let sbShrink = this.state.sidebarShrink;

        return (
            <div className={`page page__profile${ sbShrink ? '' : ' sidebar-shrink' }`}>
                <Header
                    sidebarToggle={ this.handleToggleSidebar }
                    sidebarShrink={ this.state.sidebarShrink }
                />
                <div className="page__content d-flex align-items-stretch">
                    <Sidebar sidebarShrink={ this.state.sidebarShrink } />
                    <Content />
                </div>
            </div>
        )
    }
}

export default Layout;