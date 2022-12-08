import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './postsSlice';
import './posts.css';

export const Posts = () => {
	const { posts, loading } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<div>
			<h2>Posts List...</h2>
			{posts.map((post) => (
				<ul className="list">
					<li key={post.id}>
						<h2 className="post-title">{post.title}</h2>
						<p className="paragraph">{post.body}</p>
					</li>
				</ul>
			))}
		</div>
	);
};
