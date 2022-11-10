import type { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/header/header';

const Ticket: NextPage = () => {
	return (
		<div className="container">
			<Head>
				<title>Подписка</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="main"></main>
		</div>
	);
};

export default Ticket;