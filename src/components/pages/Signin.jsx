import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input type="text" placeholder="Email Address"/>
                <input type="password" placeholder="Password" />
                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2">Log In</button>
            </div>

            <div className="card auth-card-account input-field">
                <p>Don't have account an accout? <Link to="/signup">Sign Up</Link></p>
            </div>
        </div>
    );
}
 
export default Signin;