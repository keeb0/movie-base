import { Component } from 'react'
import { connect } from 'react-redux'
import {
	getGenres,
	updateSearchingTitle,
	getSearchingMovies,
	updatePage,
} from '../../redux/search/actions'
import Search from './Search'

class SearchContainer extends Component {
	componentDidMount() {
		this.props.getGenres()
	}

	render() {
		return <Search {...this.props} />
	}
}

const mapStateToProps = state => ({ ...state.search })

const dispatchFunctions = {
	getGenres,
	updateSearchingTitle,
	getSearchingMovies,
	updatePage,
}

export default connect(mapStateToProps, dispatchFunctions)(SearchContainer)
