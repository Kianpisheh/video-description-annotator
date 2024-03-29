import React, { useState } from "react";
import PropTypes from "prop-types";

import "./LoginPage.css";

async function loginUser(credentials) {
	return fetch("https://secret-gorge-06842.herokuapp.com/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export default function LoginPage({ setToken }) {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser({
			username,
			password,
		});
		console.log(token);
		setToken(token, username);
	};

	return (
		<div id="login-container">
			<h1 id="login-title">Login</h1>
			<form autoComplete={"off"} onSubmit={handleSubmit}>
				<div id="username-label-div">
					<label>
						<input
							className="login-text-input"
							type="text"
							placeholder="username"
							onChange={(e) => setUserName(e.target.value)}
						/>
					</label>
				</div>
				<div id="password-label-div">
					<label>
						<input
							className="login-text-input"
							type="password"
							placeholder="password"
							autoComplete={"off"}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<div id="login-btn-div">
					<button id="login-btn" type="submit">
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

LoginPage.propTypes = {
	setToken: PropTypes.func.isRequired,
};
