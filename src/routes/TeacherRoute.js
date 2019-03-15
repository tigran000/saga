import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Teacher from '../components/Teacher/Teacher';
const AdminRoute = ({ isAuthenticated, isAdmin, ...rest }) => {
    return <Route {...rest} render={() => {
        if (isAuthenticated) {
            if (isAdmin) {
                return <Redirect to='/forbiden' />
            } else {
                return <Teacher />
            }
        } else {
            return <Redirect to='/login' />
        }
    }} />
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isAdmin: state.user.isAdmin
});

export default withRouter(connect(mapStateToProps)(AdminRoute));