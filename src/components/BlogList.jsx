import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

function BlogList(){
	const navigate = useNavigate();
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		if(!JSON.parse(localStorage.getItem('user'))){navigate('/login');};
		const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
		setBlogs(storedBlogs);
	}, []);

	return(
		<div>
			<h2>Your Blogs</h2>
			<Link to="/create" className="btn btn-primary mb-3">
				Create New Blog
			</Link>
			<ul className="list-group">
				{blogs.map((blog,index) => (
					<li key={index} className="list-group-item">
						<h5>{blog.title}</h5>
						<p>{blog.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogList;