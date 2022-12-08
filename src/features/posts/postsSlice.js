import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
	'posts/getPosts',
	async ({ dispatch, getState }) => {
		return fetch('https://jsonplaceholder.typicode.com/posts').then(
			(res) => res.json()
		);
	}
);

const postsSlice = createSlice({
	name: 'posts',
	initialState: {
		list: [],
		status: null,
	},
	extraReducers: {
		[getPosts.pending]: (state) => {
			state.status = 'loading';
		},
		[getPosts.fulfilled]: (state, { payload }) => {
			state.list = payload;
			state.status = 'success';
		},
		[getPosts.rejected]: (state) => {
			state.status = 'failed';
		},
	},
});

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;