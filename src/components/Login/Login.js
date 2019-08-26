import React, {Component} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';

class Login extends Component {
    render() { 
        return ( 
            <section className="login-section">
            <h2>Login</h2>
            <form className="login-form">
                <label for="login-email">Email</label>
                <input type="email" id="login-email" name="login-email" />
                <label for="login-password">Password</label>
                <input type="password" id="login-password" name="login-password" />
                <input type="submit" value="Login" />
            </form>
            <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
            </section>
         );
    }
}
 
export default Login;