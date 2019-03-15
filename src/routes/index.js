import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminRoute from './AdminRoute';
import LoginRoute from './LoginRoute';
import TeacherRoute from './TeacherRoute';
import HomeRoute from './HomeRoute';
const Routes = () => (
    <Switch>
        <HomeRoute exact path="/" />
        <LoginRoute exact path="/login" />
        <TeacherRoute exact path="/teacher" />
        <AdminRoute exact path="/admin" />
        <Route exact path="/forbiden" render={
            () => (<h1> 403 Not Autherized</h1>)
        } />
        <Route render={
            () => (<h1> Not found Page</h1>)
        } />
    </Switch>
)

export default Routes