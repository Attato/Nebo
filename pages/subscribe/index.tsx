import { useState } from 'react';
import type { NextPage } from 'next';

import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from 'components/header/header';
import Footer from 'components/footer/footer';

import Demo from 'components/ui/demo/demo';

import styles from './subscribe.module.scss';
import subscribe from './subscribe.json';

const Ticket: NextPage = () => {
	const router = useRouter();

	return (
		<div className="container">
			<Head>
				<title>Подписка</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="main">
				<div className={styles.masthead}>
					<h1>Полный доступ</h1>
					<p>
						Небо Плюс — премиум-сервис с ежемесячной подпиской. Он поcтавляется
						со множеством возможностей, к тому же подписчики получают
						дополнительные награды за просмотр любимых фильмов.
					</p>
				</div>

				<div className={styles.subscription}>
					<div className={styles.subscription__title}>
						<h1>Небо +</h1>
						<span>Премиальная подписка на наш сервис</span>
						{subscribe.map((subscribe, id) => {
							return (
								<Link
									href={{
										pathname: '/subscribe',
										query: { product: `${id}` },
									}}
									scroll={false}
									key={id}
									className={
										router.query.product === `${id}`
											? styles.product__option__active
											: styles.product__option
									}
								>
									<p>Подписка на {subscribe.duration}</p>
									<div className={styles.price}>
										<span>₽</span>
										<h2>{subscribe.monthly} / мес.</h2>
									</div>
									<p>Экономия {subscribe.economy} ₽ / г.</p>
								</Link>
							);
						})}

						{subscribe
							.filter((title) => `${title.id}` === router.query.product)
							.map((price) => {
								return (
									<div className={styles.price__wrap} key={price.id}>
										<div className={styles.price}>
											<h2>{price.price} RUB</h2>
											{price.full_price != 249 ? (
												<p>{price.full_price} RUB</p>
											) : null}
											{price.percent != '0%' ? (
												<div className={styles.percent}>
													<p>{price.percent}</p>
												</div>
											) : null}
										</div>
										<p>
											Cписание средств раз в {price.duration}. Вы можете в любой
											момент отменить подписку на сайте.
										</p>
									</div>
								);
							})}

						<Link href="/" className={styles.subscribe}>
							Оформить подписку
							<Image
								src="/svg/home/link.svg"
								width={16}
								height={16}
								alt="svg"
								draggable={false}
							/>
						</Link>
					</div>
				</div>

				<div className={styles.privileges__list}>
					<div className={styles.left__side}>
						<div className={styles.demonstration__blocks}>
							<Demo url="view">
								<div className={styles.page__wrap}>
									<div className={styles.input} />
									<div className={styles.movie__wrap}>
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
									</div>
								</div>
							</Demo>

							<Demo url="view">
								<div className={styles.page__wrap}>
									<div className={styles.input} />
									<div className={styles.movie__wrap}>
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
									</div>
								</div>
							</Demo>

							<Demo url="view">
								<div className={styles.page__wrap}>
									<div className={styles.input} />
									<div className={styles.movie__wrap}>
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
										<div className={styles.movie} />
									</div>
								</div>
							</Demo>
						</div>
					</div>

					<div className={styles.lines}>
						<span className={styles.gradient__line} />
						<span className={styles.circle} />
						<span className={styles.line} />
						<span className={styles.circle} />
						<span className={styles.line} />
						<span className={styles.circle} />
						<span className={styles.gradient__line__last} />
						<span className={styles.circle__last}></span>
					</div>
					<div className={styles.right__side}>
						<div className={styles.right__side__item}>
							<div className={styles.icon}></div>
							<h5>Безграничность в использовании</h5>
							<p>Смотрите все фильмы сервиса без ограничений</p>
						</div>
						<div className={styles.right__side__item}>
							<div className={styles.icon}></div>
							<h5>Выделяйтесь</h5>
							<p>Особая галочка аккаунта, которая выделит вас из толпы</p>
						</div>
						<div className={styles.right__side__item}>
							<div className={styles.icon}></div>
							<h5>Текст</h5>
							<p>Тут в скором времени будет текст</p>
						</div>
					</div>
				</div>
				<Footer />
			</main>
		</div>
	);
};

export default Ticket;
