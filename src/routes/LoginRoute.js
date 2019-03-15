import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
const LoginRoute = ({ isAuthenticated, isAdmin, ...rest }) => {
    return <Route {...rest} render={() => {
        if (isAuthenticated) {
            if (isAdmin) {
                return <Redirect to='/admin' />
            } else {
                return <Redirect to='/teacher' />
            }
        } else {
            return <LoginForm />
        }
    }} />
}

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated,
    isAdmin: state.user.isAdmin
});

export default withRouter(connect(mapStateToProps)(LoginRoute));