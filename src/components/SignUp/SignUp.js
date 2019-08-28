import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SignUp.css';

class SignUp extends Component {
    render() { 
        return ( 
            <section className="signup-section">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <label for="signup-firstName">First Name</label>
                <input type="text" id="signup-firstName" name="signup-firstName" required/>
                <label for="signup-lastName">Last Name</label>
                <input type="text" id="signup-lastName" name="signup-lastName" required/>
                <label for="login-email">Email</label>
                <input type="email" id="login-email" name="login-email" required/>
                <label for="login-password">Password</label>
                <input type="password" id="login-password" name="login-password" required/>
                <label for="login-repeat-password">Repeat Password</label>
                <input type="password" id="login-repeat-password" name="login-repeat-password" />
                <input type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            </section>
         );
    }
}
 
export default SignUp;