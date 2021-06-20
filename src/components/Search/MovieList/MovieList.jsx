import s from './MovieList.module.css'

import MovieItem from './MovieItem/MovieItem'

const MovieList = ({ movieItems }) => {
	console.log(movieItems)
	const items = movieItems.map(movie => (
		<MovieItem movie={movie } key={movie.id} />
	))
	return <div className={s.list}>{items}</div>
}

export default MovieList
