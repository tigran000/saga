import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import Admin from './components/Admin/Admin'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component = {LoginForm}/>
        <Route exact path="/admin" component = {Admin}/>
        <Route render={
          () => (<h1> Not found Page</h1>)
        } />
      </Switch>
    )
  }
}

export default App;