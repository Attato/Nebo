import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/header/header';
import Footer from 'components/footer/footer';
import styles from 'styles/subscription.module.scss';
import subscribe from 'json/subscribe.json';

const Ticket: NextPage = () => {
	const [option, setOption] = useState(3);
	const [duration, setDuration] = useState('1 месяц');
	const [price, setPrice] = useState(249);
	const [fullPrice, setFullPrice] = useState(249);
	const [percent, setPercent] = useState('0%');

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
					<h1>Получите полный доступ ко всем нашим фильмам.</h1>
				</div>

				<div className={styles.widget}>
					<div className={styles.subscription}>
						<div className={styles.subscription__title}>
							<h1>View +</h1>
							<span>Премиальная подписка на наш сервис</span>
							{subscribe.map((subscribe, id) => {
								return (
									<div
										key={id}
										className={
											option === id
												? styles.product__option__active
												: styles.product__option
										}
										onClick={() => {
											setDuration(subscribe.duration);
											setPrice(subscribe.price);
											setFullPrice(subscribe.full_price);
											setPercent(subscribe.percent);
											setOption(id);
										}}
									>
										<p>Подписка на {subscribe.duration}</p>
										<div className={styles.price}>
											<span>₽</span>
											<h2>{subscribe.monthly} / мес.</h2>
										</div>
										<p>Экономия {subscribe.economy} ₽ / г.</p>
									</div>
								);
							})}
							<div className={styles.price__wrap}>
								<div className={styles.price}>
									<div className={styles.price}>
										<h2>{price} RUB</h2>
										{fullPrice != 249 ? <p>{fullPrice} RUB</p> : null}
									</div>
									{percent != '0%' ? (
										<div className={styles.percent}>
											<p>{percent}</p>
										</div>
									) : null}
								</div>
								<p>
									Cписание средств раз в {duration}. Вы можете в любой момент
									отменить подписку на сайте.
								</p>
							</div>
							<Link href="/">Оформить подписку</Link>
						</div>
					</div>
				</div>

				<div className={styles.privileges__list}>
					<div className={styles.left__side}>
						<div className={styles.demonstration__blocks}>
							<div className={styles.demonstration__block}>
								<div className={styles.header}>
									<div className={styles.window__traffic}>
										<span className={styles.close}></span>
										<span className={styles.minimize}></span>
										<span className={styles.fullscreen}></span>
									</div>
									<div className={styles.browser__input}>
										<p>view/movies</p>

										<Image
											src="/svg/refresh.svg"
											width={12}
											height={12}
											alt="svg"
										></Image>
									</div>
									<div className={styles.space}></div>
								</div>
								<div className={styles.content}>
									<div className={styles.main}>
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
									</div>
								</div>
							</div>

							<div className={styles.demonstration__block}>
								<div className={styles.header}>
									<div className={styles.window__traffic}>
										<span className={styles.close}></span>
										<span className={styles.minimize}></span>
										<span className={styles.fullscreen}></span>
									</div>
									<div className={styles.browser__input}>
										<p>view/user</p>

										<Image
											src="/svg/refresh.svg"
											width={12}
											height={12}
											alt="svg"
										></Image>
									</div>
									<div className={styles.space}></div>
								</div>
								<div className={styles.content}>
									<div className={styles.main}>
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
									</div>
								</div>
							</div>

							<div className={styles.demonstration__block}>
								<div className={styles.header}>
									<div className={styles.window__traffic}>
										<span className={styles.close}></span>
										<span className={styles.minimize}></span>
										<span className={styles.fullscreen}></span>
									</div>
									<div className={styles.browser__input}>
										<p>view</p>

										<Image
											src="/svg/refresh.svg"
											width={12}
											height={12}
											alt="svg"
										></Image>
									</div>
									<div className={styles.space}></div>
								</div>
								<div className={styles.content}>
									<div className={styles.main}>
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
									</div>
								</div>
							</div>
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
						<span className={styles.circle__last}>
							{' '}
							<Image
								src="/svg/finish.svg"
								width={16}
								height={16}
								alt="svg"
							></Image>
						</span>
					</div>
					<div className={styles.right__side}>
						<div className={styles.right__side__item}>
							<div className={styles.icon}>
								<Image
									src="/svg/infinite.svg"
									width={24}
									height={24}
									alt="svg"
								></Image>
							</div>
							<h5>Безграничность в использовании</h5>
							<p>Смотрите все фильмы сервиса без ограничений</p>
						</div>
						<div className={styles.right__side__item}>
							<div className={styles.icon}>
								<Image
									src="/svg/star.svg"
									width={20}
									height={20}
									alt="svg"
								></Image>
							</div>
							<h5>Выделяйтесь</h5>
							<p>Особая галочка аккаунта, которая выделит вас из толпы</p>
						</div>
						<div className={styles.right__side__item}>
							<div className={styles.icon}>
								<Image
									src="/svg/star.svg"
									width={20}
									height={20}
									alt="svg"
								></Image>
							</div>
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