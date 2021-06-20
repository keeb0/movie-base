import { GET_GENRES, GET_MOVIES, UPDATE_SEARCHING_TITLE } from './types'

const initialState = {
	title: '',
	genres: [],
	movieItems: [],
}

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_SEARCHING_TITLE:
			return {
				...state,
				title: action.newTitle,
			}

		case GET_MOVIES:
			return {
				...state,
				movieItems: action.newItems,
			}

		case GET_GENRES:
			return {
				...state,
				genres: action.newGenres,
			}

		default:
			return state
	}
}

export default searchReducer
