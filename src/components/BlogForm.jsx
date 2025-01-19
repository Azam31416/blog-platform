import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function BlogForm(){
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if(!JSON.parse(localStorage.getItem('user'))){navigate('/login')};
	}, []);

	function handleSubmit(e){
		e.preventDefault();
		const newBlog = {title, content};

		const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
		storedBlogs.push(newBlog);
		localStorage.setItem('blogs', JSON.stringify(storedBlogs));

		navigate('/');
	};

	return (
		<div>
			<h2>Create New Blog</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="title" className="form-label">Title</label>
					<input
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="content" className="form-label">Content</label>
					<textarea
						className="form-control"
						id="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
						rows="5"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Save Blog
				</button>
			</form>
		</div>
	);
};

export default BlogForm;