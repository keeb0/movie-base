import {
	GET_MOVIE_GENRES,
	GET_SEARCHING_MOVIES,
	UPDATE_PAGE,
	UPDATE_SEARCHING_TITLE,
} from './types'

const initialState = {
	title: '',
	movieGenres: [],
	movies: [],
	page: 1,
	totalPages: 1,
	totalResults: 0,
	isLoading: false,
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCHING_TITLE:
			return {
				...state,
				title: action.newTitle,
			}

		case GET_SEARCHING_MOVIES:
			return {
				...state,
				movies: action.data.results,
				page: action.data.page,
				// totalResults: action.data.total_results,
				totalPages: action.data.total_pages,
			}

		case GET_MOVIE_GENRES:
			return {
				...state,
				movieGenres: action.genres,
			}

		case UPDATE_PAGE:
			return {
				...state,
				page: action.page,
			}

		default:
			return state
	}
}

export default searchReducer
