import React from 'react';

class Login extends React.Component {
    render() { 
        return ( 
            <div style={{display: 'flex', flexDirection: 'column', width: '350px'}}>
                <form action="">
                    <div>
                    <label htmlFor="">Username</label>
                    <input type="text" title="username"/>
                    </div>
                    <div>
                    <label htmlFor="">Password</label>
                    <input type="password"/>
                    </div>
                </form>
                <button>login</button>
            </div>
         );
    }
}
 
export default Login;