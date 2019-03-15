import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Home from '../components/Home';

const HomeRoute = ({ isAuthenticated, isAdmin, ...rest }) => {
    return <Route {...rest} render={() => {
        if (isAuthenticated && localStorage.getItem('token')) {
            if (isAdmin) {
                return <Redirect to='/admin' />
            } else {
                return <Redirect to='/teacher' />
            }
        } else {
            return <Home />
        }
    }} />
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isAdmin: state.user.isAdmin
});

export default withRouter(connect(mapStateToProps)(HomeRoute));