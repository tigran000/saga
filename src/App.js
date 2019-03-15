import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const App = ({ isFetching }) => (
  isFetching
    ? <h1>Lօading</h1>
    : <Layout />
)

const mapStateToProps = state => ({
  isFetching: state.user.isFetching
});

export default withRouter(connect(mapStateToProps)(App));