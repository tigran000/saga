import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

import Admin from '../components/Admin';

const AdminRoute = ({ isAuthenticated, isAdmin, ...rest }) => {
  return <Route {...rest} render={() => {
    if (isAuthenticated) {
      if (isAdmin) {
        return <Admin />
      } else {
        return <Redirect to='/forbiden' />
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