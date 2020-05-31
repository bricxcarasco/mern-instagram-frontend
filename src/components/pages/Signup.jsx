import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const validateEmailAddress = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    const postCredential = () => {
        if (!validateEmailAddress(email)) {
            M.toast({
                html: "Invalid email adress format", 
                classes:"#e53935 red darken-1"
            });
            return;
        }

        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                M.toast({
                    html: data.error, 
                    classes:"#e53935 red darken-1"
                });
            } else {
                M.toast({
                    html: data.message,
                    classes: "#43a047 green darken-1"
                });
                history.push('/signin');
            }
        });
    }

    return (
        <div className="my-card">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>

                <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    />

                <input 
                    type="text" 
                    placeholder="Email Address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />

                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    
                <button 
                    onClick={() => postCredential()} 
                    className="btn waves-effect waves-light #64b5f6 blue darken-2">Sign up</button>
            </div>

            <div className="card auth-card-account input-field">
                <p>Have account an accout? <Link to="/signin">Log In</Link></p>
            </div>
        </div>
    );
}
 
export default Signup;