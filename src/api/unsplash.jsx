import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 7695a9881dff45b0f2dd43203dae51e5f3db85982b179a8e6e7748886ed71ad6'
	}
});
