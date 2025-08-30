import React, { useState } from 'react';
import {useNavigate, Link } from 'react-router-dom';

function Login(){
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	function handleLogin(e){
		e.preventDefault();
		const storedUser = JSON.parse(localStorage.getItem('user'));

		if(storedUser && storedUser.username === username && storedUser.password === password){
			navigate('/');
		} else {
			alert('Invalid credentials');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div className="mb-3">
					<label htmlFor="username" className="form-label">Username</label>
					<input
						type="text"
						className="form-control"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						vlaue={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
			<br/>
			<div> NOTE: Please register before logging in</div>
			<br/>
			<Link to="/register" className="btn btn-primary mb-3">
				Register
			</Link>
		</div>		
	);
};

export default Login;
