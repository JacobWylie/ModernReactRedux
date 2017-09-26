import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = `?key=jacobwylie`;

export function fetchPosts() {
	return {
		const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

		type: FETCH_POSTS,
		payload: request
	};
}