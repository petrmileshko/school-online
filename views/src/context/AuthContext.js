import {createContext} from 'react';

function noop() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    userName: null,
    userEmail: null,
    userAccess: null,
    userSubject: null,
    login: noop,
    logout: noop,
    isAuthenticated: false
});