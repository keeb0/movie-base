import axios from 'axios'
import { GET_GENRES, GET_MOVIES, UPDATE_SEARCHING_TITLE } from '../search/types'
import store from '../store'

const apiKey = '355fb125954ee74d86daebefb44067c6'

export const updateSearchingTitle = newTitle => ({
	type: UPDATE_SEARCHING_TITLE,
	newTitle,
})
export const getMovies = () => {
	return dispatch => {
		const searchingTitle = store.getState().search.title
		const url = 'https://api.themoviedb.org/3/search/movie'
		const params = { api_key: apiKey, query: searchingTitle }

		axios(url, { params }).then(response => {
			const onlyMovieGenres = store
				.getState()
				.search.genres.reduce((genreIds, { id }) => {
					genreIds.push(id)
					return genreIds
				}, [])

			const newItems = response.data.results.filter(item => {
				for (let genreId of item.genre_ids) {
					if (onlyMovieGenres.includes(genreId)) {
						return true
					}
				}
				return false
			})

			dispatch({ type: GET_MOVIES, newItems })
		})
	}
}
export const getGenres = () => {
	return dispatch => {
		const url = 'https://api.themoviedb.org/3/genre/movie/list'
		const params = { api_key: apiKey }

		axios(url, { params }).then(response => {
			const newGenres = response.data.genres

			dispatch({ type: GET_GENRES, newGenres })
		})
	}
}
