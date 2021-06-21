import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	// withCredentials: true,
	params: {
		api_key: '355fb125954ee74d86daebefb44067c6',
	},
})
const getData = response => response.data

export const genreAPI = {
	getMovieGenres: () => axiosInstance.get('genre/movie/list').then(getData),
}

export const searchAPI = {
	getSearchingMovies: (query, page) =>
		axiosInstance.get(`search/movie?query=${query}&page=${page}&language=ru`).then(getData),
}
