import { motion } from 'framer-motion';
import styles from 'pages/movies/movies.module.scss';
import Link from 'next/link';

const MovieCategory = ({ movie }) => {
	return (
		<motion.div
			className={styles.card}
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
		>
			<Link href={`/movies/${movie.slug}`}>
				<img
					src={movie.backdrop_path}
					width={220}
					height={180}
					alt="image"
					draggable="false"
				/>
				<h3>
					{movie.vote_average.toFixed(1)} &nbsp; {movie.title}
				</h3>
				<p>{movie.overview}</p>
			</Link>
		</motion.div>
	);
};

export default MovieCategory;
