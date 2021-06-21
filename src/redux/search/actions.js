import { genreAPI, searchAPI } from '../../api/api'
import {
	GET_MOVIE_GENRES,
	UPDATE_SEARCHING_TITLE,
	GET_SEARCHING_MOVIES,
	UPDATE_PAGE,
} from './types'

export const getGenres = () => {
	return dispatch =>
		genreAPI
			.getMovieGenres()
			.then(({ genres }) => dispatch({ type: GET_MOVIE_GENRES, genres }))
}

export const updateSearchingTitle = newTitle => ({
	type: UPDATE_SEARCHING_TITLE,
	newTitle,
})

export const getSearchingMovies = (searchingTitle, page) => {
	return dispatch => {
		searchAPI
			.getSearchingMovies(searchingTitle, page)
			.then(data => dispatch({ type: GET_SEARCHING_MOVIES, data }))
	}
}
export const updatePage = page => ({
	type: UPDATE_PAGE,
	page,
})
