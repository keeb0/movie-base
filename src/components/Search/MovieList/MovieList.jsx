import s from './MovieList.module.css'

import MovieItem from './MovieItem/MovieItem'

const MovieList = ({ movies }) => {
	const items = movies.map(movie => <MovieItem movie={movie} key={movie.id} />)
	return <div className={s.list}>{items}</div>
}

export default MovieList
