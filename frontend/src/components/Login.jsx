import React, { useState } from 'react';
import PropTypes from "prop-types"

import "./Login.css"



async function loginUser(credentials) {
    return fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }


    return (
        <div id="login-container">
            <h1 id="login-title">Login</h1>
            <form autoComplete={"off"} onSubmit={handleSubmit}>
            <div id='username-label-div'>
                <label>
                    <input className="login-text-input" type="text" placeholder="username" onChange={e => setUserName(e.target.value)} />
                </label>
            </div>
            <div id='password-label-div'>
                <label>
                    <input className="login-text-input" type="password" placeholder="password" autoComplete={"off"} onChange={e => setPassword(e.target.value)} />
                </label>
            </div>
            <div id='login-btn-div'>
                <button type="submit" onClick={() => (console.log("button clicked"))}>Login</button>
            </div>
            </form>
        </div >
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}