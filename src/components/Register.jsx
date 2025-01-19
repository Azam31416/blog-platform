import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register(){
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	function handleRegister(e){
		e.preventDefault();
		const user = {username, password};
		localStorage.setItem('user', JSON.stringify(user));

		alert('Registration successful!');
		navigate('/login');
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
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
					Register
				</button>
			</form>
		</div>		
	);
};

export default Register;