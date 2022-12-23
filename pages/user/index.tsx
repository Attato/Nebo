import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from 'components/header/header';

import { tabs } from 'pages/api/user/tabs';

import styles from './user.module.scss';

const User: NextPage = () => {
	const router = useRouter().query;
	const { data: session } = useSession();

	return (
		<div className="container">
			<Head>
				<title>
					{tabs
						.filter((title) => title.name === router.tab)
						.map((title) => {
							return title.title;
						})}
				</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="main">
				<div className={styles.profile}>
					<div className={styles.profile__title__wrapper}>
						<div className={styles.profile__title}>
							<Image
								src={
									session != null
										? session.user.image
										: '/images/user/avatar.png'
								}
								width={175}
								height={175}
								alt=""
								className={styles.avatar}
								priority
							/>
							<div className={styles.user__title}>
								{session != null ? <h2>{session.user.name}</h2> : <h2>User</h2>}
								<p>@username</p>
								<span className={styles.status}>
									Хаха, кря кря, я утка, я утка, кря кря, хаха
								</span>
								<div className={styles.row}>
									<Image
										src="/svg/user/friends.svg"
										width={16}
										height={16}
										alt=""
									/>
									<span>171 подписчик</span>
								</div>
								<div className={styles.row}>
									<Image
										src="/svg/user/location.svg"
										width={16}
										height={16}
										alt=""
									/>
									<span>Saint-Petersburg</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.main__content}>
						<div className={styles.tabs}>
							{tabs.map((tab, id) => {
								return (
									<Link
										href={{ pathname: '/user', query: { tab: `${tab.name}` } }}
										key={id}
										className={
											router.tab === tab.name ? styles.active__tab : styles.tab
										}
									>
										<Image
											src={`/svg/user/${tab.name}.svg`}
											width={18}
											height={18}
											alt=""
										/>
										{tab.title}
									</Link>
								);
							})}
						</div>

						{tabs.map((tab, id) => {
							return (
								router.tab === tab.name && (
									<div className={styles.content} key={id}>
										{tab.wrap}
									</div>
								)
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
};

export default User;
