import React from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
    logOut = () => {
        this.props.history.push('/');
        localStorage.removeItem('token');
    }
    render() {
        return <>
            <h1> Header</h1>
            <button onClick={this.logOut}> logOut</button>
        </>
    }
}


export default withRouter(Header);