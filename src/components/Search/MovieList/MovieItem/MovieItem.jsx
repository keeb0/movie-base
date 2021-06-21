import s from './MovieItem.module.css'
import npPoster from '../../../../assets/img/no-poster.png'

const MovieItem = ({ movie: { poster_path, title } }) => {
	// const emptyPoster = <div className={s.noPoster}>{title}</div>
	return (
		<div className={s.item}>
			<div>
				{poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
						alt={title}
					/>
				) : (
					<img src={npPoster} className={s.noPoster} />
				)}
			</div>
			<div>{title}</div>
		</div>
	)
}

export default MovieItem
