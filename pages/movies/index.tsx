import { useState } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import MovieCategory from 'components/movies/index/movieCategory';
import Filter from 'components/movies/index/filter';

import movies from 'pages/api/json/movies.json';

import styles from './movies.module.scss';

const Movies: NextPage = () => {
	const [search, setSearch] = useState('');

	return (
		<div className="container">
			<Head>
				<title>Фильмы</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<div className={styles.page__wrap}>
					<div className={styles.search}>
						<h4>Шаблоны фильтров</h4>
						<div className={styles.input}>
							<Image
								src="/svg/movies/search.svg"
								width={16}
								height={16}
								alt="svg"
							></Image>
							<input type="text" placeholder="Поиск..." />
						</div>
						<Filter />
					</div>
					<div className={styles.movies_wrap}>
						<div className={styles.cards__wrap}>
							{movies.map((movie, id) => {
								return <MovieCategory movie={movie} key={id} />;
							})}
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Movies;
