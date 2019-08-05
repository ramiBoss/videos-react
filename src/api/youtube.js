import axios from 'axios';

const KEY = 'AIzaSyCGdEgrPF4BS7aGUjE0FlbFclEdtpZcnFI';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3', 
	params: {
		part: 'snippet', 
		maxResults: 5,
		key: KEY
	}
});