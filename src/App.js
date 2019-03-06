import React, { Component } from 'react';
import { connect } from 'react-redux'

import { loadTitlesRequest } from './actions';

class App extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={() => this.props.dispatch(loadTitlesRequest())}> Get Titles </button>
      </div>
    );
  }
}

export default connect(state => ({
  a1: state
}))(App);