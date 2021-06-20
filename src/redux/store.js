import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import searchReducer from './search/reducer'

const rootReducer = combineReducers({
	search: searchReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
