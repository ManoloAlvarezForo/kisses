import React from 'react';

// Components.
import Login from '../../components/Login/Login';

class LoginPage extends React.Component {
    render() {
        return (
            <Login {...this.props} />
        );
    }
}

export default LoginPage;