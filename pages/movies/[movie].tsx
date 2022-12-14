import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import Head from 'next/head';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import movies from './movies.json';

import styles from 'pages/movies/movie.module.scss';

const Movie: NextPage = () => {
	const { movie } = useRouter().query;
	const [dataResponse, setDataResponse] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const apiUrlEndpoint = `http://localhost:3000/api/getData`;
			const response = await fetch(apiUrlEndpoint);
			const res = await response.json();
			console.log(res.movies);
			setDataResponse(res.movies);
		};
		getMovies();
	}, []);

	return (
		<div className="container">
			<Head>
				<title>
					{movies
						.filter((title) => title.slug === movie)
						.map((title) => {
							return title.title;
						})}
				</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="main">
				{movies
					.filter((title) => title.slug === movie)
					.map((movie, id) => {
						return (
							<div className={styles.movie} key={id}>
								<div className={styles.movie__content}>
									<div className={styles.movie__wrap}>
										<div className={styles.movie__content__image}>
											<img
												src={movie.poster_path}
												width={300}
												height={450}
												alt="image"
												draggable="false"
											/>
										</div>
										<div className={styles.movie__masthead__content}>
											<div className={styles.first__part}>
												<h1>
													{movie.title} ({movie.release_date})
												</h1>
												<span>
													{movie.original_title}{' '}
													<span className={styles.adult}>{movie.adult}+</span>
												</span>
											</div>

											<div className={styles.second__part}>
												<h2>О фильме</h2>
												<div className={styles.about__movie}>
													<span>Год производства</span>
													<span>{movie.release_date}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Исходный язык</span>
													<span>{movie.original_language}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Жанр</span>
													<span>{movie.genre.join(', ')}</span>
												</div>
												<div className={styles.about__movie}>
													<span>Возраст</span>
													<span>{movie.adult}+</span>
												</div>
												<div className={styles.about__movie}>
													<span>Длительность</span>
													<span>{movie.duration}</span>
												</div>
											</div>
											<div className={styles.video}>
												<video src={movie.video} loop controls playsInline />
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
