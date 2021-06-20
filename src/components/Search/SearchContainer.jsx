import { connect } from 'react-redux'
import {
	getGenres,
	getMovies,
	updateSearchingTitle,
} from '../../redux/movie/actions'
import store from '../../redux/store'
import Search from './Search'

store.dispatch(getGenres())

const mapStateToProps = state => ({
	searchingTitle: state.search.title,
	movieItems: state.search.movieItems,
	genres: state.search.genres,
})
const mapDispatchToProps = dispatch => ({
	onChangeTitle: e => dispatch(updateSearchingTitle(e.target.value)),
	onClickSearch: e => {
		if (store.getState().search.title.trim()) {
			dispatch(getMovies())
		}
	},
})

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
