import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './postsSlice';
// import { PostsExcerpt } from './PostsExcerpt';

const Posts = () => {
	const allPosts = useSelector((state) => state.fulfilled);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts({ allPosts }));
	}, [dispatch, allPosts]);

	return (
		<div>
			<h2>Posts List...</h2>
		</div>
	);
};

export default Posts;
