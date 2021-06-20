import MovieList from './MovieList/MovieList'
import s from './Search.module.css'

const Search = ({
	searchingTitle,
	movieItems,
	onChangeTitle,
	onClickSearch,
}) => {
	return (
		<div>
			<div>
				<input value={searchingTitle} onChange={onChangeTitle} />
				<button onClick={onClickSearch}>Search</button>
			</div>

			<MovieList movieItems={movieItems} />
		</div>
	)
}

export default Search
