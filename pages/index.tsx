import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import styles from 'styles/index.module.scss';
const Home: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>Главная</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className="main">
				<div className={styles.masthead}>
					<div className={styles.row__wrap}>
						<h1>
							<span className={styles.selection}>View</span> - платформа, на
							которой вы найдёте фильмы по вкусу.
						</h1>
					</div>
					<p>qwe</p>
					<Link href="/movies">
						Начать{' '}
						<Image src="/svg/play.svg" width={24} height={24} alt="svg" />
					</Link>
				</div>
			</main>

			<section className={styles.white__section}>
				<div className={styles.content}></div>
			</section>
			<Footer />
		</div>
	);
};

export default Home;
