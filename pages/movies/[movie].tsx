import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import { usePopularMovies } from './hooks/usePopularMovies';

import styles from './movie.module.scss';

// import prisma from 'plugins/prisma';

// export const getServerSideProps: GetServerSideProps = async () => {
// 	const movies = await prisma.movie.findMany();

// 	return {
// 		props: { movies },
// 	};
// };

// interface Movies {
// 	movies: {
// 		id: number;
// 		score: string;
// 		name: string;
// 		euName: string;
// 		age: string;
// 		duration: string;
// 		release: string;
// 		country: string;
// 		genre: string;
// 		trailer: string;
// 		image: string;
// 		slug: string;
// 	}[];
// }

// const Movie = ({ movies }) => {
const Movie = () => {
	const { movie } = useRouter().query;
	const { popularMovies } = usePopularMovies();
	return (
		<div className="container">
			<Head>
				<title>
					{popularMovies
						.filter((movies) => movies.slug === movie)
						.map((movie) => {
							return movie.title;
						})}
				</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="main">
				{popularMovies
					.filter((movies) => movies.slug === movie)
					.map((movie, id) => {
						return (
							<div className={styles.movie} key={id}>
								<div className={styles.movie__content}>
									<div className={styles.movie__wrap}>
										<div className={styles.movie__content__image}>
											<Image
												src={movie.backdrop_path}
												width={300}
												height={450}
												className={styles.image}
												draggable="false"
												alt="image"
											/>
										</div>
										<div className={styles.movie__masthead__content}>
											<div className={styles.first__part}>
												<h1>
													{movie.title} ({movie.release_date})
												</h1>
												<span>
													{movie.original_title}{' '}
													<span className={styles.age}>{movie.age}+</span>
												</span>
											</div>

											<div className={styles.second__part}>
												<h2>О фильме</h2>
												<div className={styles.about__movie}>
													<span>Год производства</span>
													<span>{movie.release_date}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Страна</span>
													<span>{movie.country}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Жанр</span>
													<span>{movie.genre}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Возраст</span>
													<span>{movie.age}+</span>
												</div>
												<div className={styles.about__movie}>
													<span>Длительность</span>
													<span>{movie.duration}</span>
												</div>
											</div>
											<div className={styles.video}>
												<video src={movie.trailer} loop controls playsInline />
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
			</main>
			<Footer />
		</div>
	);
};

export default Movie;
