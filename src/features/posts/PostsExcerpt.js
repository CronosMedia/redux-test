import React from 'react';

export const PostsExcerpt = ({ post }) => (
	<div>
		<h2>{post.title}</h2>
		<p>{post.body}</p>
	</div>
);
