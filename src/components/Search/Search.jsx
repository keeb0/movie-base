import MovieList from './MovieList/MovieList'
import Pagination from '../common/Pagination/Pagination'
import s from './Search.module.css'

const Search = props => {
	let searchingInterface = null
	if (props.movies.length) {
		searchingInterface = (
			<>
				<Pagination
					totalPages={props.totalPages}
					currentPage={props.page}
					searchingTitle={props.title}
					getSearchingMovies={props.getSearchingMovies}
					updatePage={props.updatePage}
				/>
				<MovieList movies={props.movies} />
				<Pagination
					totalPages={props.totalPages}
					currentPage={props.page}
					searchingTitle={props.title}
					getSearchingMovies={props.getSearchingMovies}
					updatePage={props.updatePage}
				/>
			</>
		)
	}

	const onChangeTitle = e => {
		props.updateSearchingTitle(e.target.value)
	}
	const onClickSearch = e => {
		e.preventDefault()

		if (props.title.trim()) {
			props.getSearchingMovies(props.title)
		}
	}

	return (
		<div>
			<form>
				<input value={props.title} onChange={onChangeTitle} />
				<button onClick={onClickSearch}>Search</button>
			</form>
			{searchingInterface}
		</div>
	)
}

export default Search
