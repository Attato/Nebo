import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'styles/movies.module.scss';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import movies from 'json/movies.json';

const Movies: NextPage = () => {
	const [isActiveFlag, setIsActiveFlag] = useState(false);

	return (
		<div className="container">
			<Head>
				<title>Фильмы</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<h1>Фильмы</h1>
				<p>Рейтинг из 100 лучших фильмов, которые должен посмотреть каждый.</p>
				<div className={styles.card__wrap}>
					{movies.map((movie, id) => {
						return (
							<div className={styles.card} key={id}>
								<Link href={`/movies/${movie.ref}`}>
									<a draggable="false">
										<Image
											src={movie.image}
											width={300}
											height={450}
											className={styles.image}
											alt="image"
											draggable="false"
										/>
									</a>
								</Link>
								<div className={styles.card__content}>
									<Link href={`/movies/${movie.ref}`}>
										<a className={styles.card__content__row} draggable="false">
											<div className={styles.card__score}>{movie.score}</div>
											<h2>
												{movie.name}, {movie.age}+
											</h2>
											<button
												onClick={() => {
													setIsActiveFlag(!isActiveFlag);
												}}
											>
												{isActiveFlag ? (
													<Image
														src="/svg/active_flag.svg"
														width={22}
														height={22}
														draggable="false"
														alt="image"
													/>
												) : (
													<Image
														src="/svg/flag.svg"
														draggable="false"
														width={22}
														height={22}
														alt="image"
													/>
												)}
											</button>
										</a>
									</Link>
									<Link href={`/movies/${movie.ref}`}>
										<a
											className={styles.card__content__column}
											draggable="false"
										>
											<p>
												{movie.euName}, {movie.release}, {movie.duration}
											</p>
											<p>
												{movie.country} • {movie.genre} • Место в топе:{' '}
												{movie.id + 1}
											</p>
										</a>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Movies;
