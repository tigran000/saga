import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from '../Header'
import Routes from '../../routes';


const Layout = ({ isAuthenticated }) => (
    isAuthenticated ?
        <>
            <Header />
            <Routes />
            <h1>Footer</h1>
        </>
        :
        <>
            <Routes />
            <h1>Footer</h1>
        </>
)

const mapStateToProps = state => ({
    isAuthenticated: state.user.isAuthenticated
});

export default withRouter(connect(mapStateToProps)(Layout));