import React from 'react';

import Header from '../Header/Header.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import MagazineContent from '../MagazineContent/MagazineContent';

import Spinner from 'react-bootstrap/Spinner';
import Loader from '../Loader/Loader';

class MagazineList extends React.Component {

    state = {
        user: null,
        sidebarShrink: true,
        loading: false,
        magazine: null,
    }

    handleToggleSidebar = () => {
        let sbShrink = !this.state.sidebarShrink;

        this.setState({sidebarShrink: sbShrink});
    }

    getUserData = () => {
        this.setState({loading: true});

        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let body = {Table: 'Answers', action: 'scores'};
        let headers = {};

        body = JSON.stringify(body);
       // headers['Content-Type'] = 'application/json';

        fetch(
                proxy + 'http://test-school.webpeternet.com/RestController.php',
                { method: 'POST', body, headers }
            )
            .then(data => data.json())
            .then(json => {

                this.setState({user: json});
                this.setState({loading: false});
            });
           
    }

    componentDidMount() {
        setTimeout(() => {
            
            this.getUserData();
        }, 0);
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
                {
                        (this.state.loading || !this.state.user) &&
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    }
                {
                        (!this.state.loading && this.state.user) &&
                        <Sidebar
                            sidebarShrink={ this.state.sidebarShrink }
                            user={this.state.user}
                        />
                    }
                   
                    {
                        (!this.state.loading && this.state.user) && 
                        <MagazineContent 
                        user={this.state.user} />
                    }
                </div>
            </div>
        )

    }
}
export default MagazineList;

// (!this.state.loading && this.state.user) && 
//                     <MagazineContent 
//                     user={this.state.user} />