import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {LoginPage} from './pages/LoginPage.jsx';
//import {Register} from './components/Auth/Register.jsx';
import {ProfilePage} from './pages/ProfilePage.jsx';
import {TasksPage} from './pages/TasksPage.jsx';
import {DetailTaskPage} from './pages/DetailTaskPage.jsx';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Route path="/tasks" exact>
                    <TasksPage />
                </Route>
                <Route path="/task/:id">
                    <DetailTaskPage />
                </Route>
                <Redirect to="/profile" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <LoginPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}