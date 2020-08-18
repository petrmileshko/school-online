import React from 'react';

import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Content from '../Content/Content.jsx';

class Layout extends React.Component {

    state = {
        user: {},
        sidebarShrink: true,
        loading: false
    }

    handleToggleSidebar = () => {
        let sbShrink = !this.state.sidebarShrink;

        this.setState({sidebarShrink: sbShrink});
    }

    getUserData = () => {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/users/4')
            .then(data => data.json())
            .then(json => {

                this.setState({user: json});
                this.setState({loading: false});
            });
    }

    componentDidMount() {

        this.getUserData();
    
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
                    {!this.state.loading && <Content user={this.state.user} />}
                </div>
            </div>
        )
    }
}

export default Layout;