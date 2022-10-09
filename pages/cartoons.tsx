import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/home.module.scss';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import cartoons from 'json/cartoons.json';

const Сartoons: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>Мультфильмы</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="main">
				<h1>Мультфильмы</h1>
				<div className={styles.card__wrap}>
					{cartoons.map((cartoon, id) => {
						return (
							<div className={styles.card} key={id}>
								<div className={styles.image} />
								<div className={styles.card__content}>
									<h2></h2>
									<p></p>
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

export default Сartoons;
