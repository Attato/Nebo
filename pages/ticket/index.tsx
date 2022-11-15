import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image'
import Header from 'components/header/header';
import styles from 'styles/ticket.module.scss'

const Ticket: NextPage = () => {
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
					<h1>Получите полный доступ ко всем нашм фильмам.</h1>
					<h2>как часто вы хотите платить?</h2>
					<div className={styles.payment__frequency}>
						<button>Ежемесячно</button>
						<button>Ежегодно ! получите 1 месяц бесплатно	</button>
					</div>
				</div>
				
				<div className={styles.subscription__type}>
					<div className={styles.subscription}>
						<div className={styles.subscription__title}>
							<h1>Стандартная</h1>
							<span>Основная подписка для <br/> всех пользователей</span>
							<div className={styles.price__wrap}>
								<div className={styles.price}>
									<span>₽</span>
									<h2>0</h2>
								</div>
								<p>в год <br /> навсегда</p>
							</div>
							<Link href="/">Присоединитесь бесплатно</Link>
						</div>
						<div className={styles.privileges__list}>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Доступны бесплатные фильмы</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Просмотр без рекламы</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Личные категории</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Настройка профиля</p>
							</div>
						</div>
					</div>

					<div className={styles.subscription}>
						<div className={styles.subscription__title}>
							<h1>Премиальная</h1>
							<span>Расширенный доступ для <br/> особых пользователей</span>
							<div className={styles.price__wrap}>
								<div className={styles.price}>
									<span>₽</span>
									<h2>2749</h2>
								</div>
								<p>в год <br /> за первые 12 месяцев</p>
							</div>
							<Link href="/">Продолжить с подпиской</Link>
						</div>
						<div className={styles.privileges__list}>
						<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Доступны бесплатные фильмы</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Просмотр без рекламы</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Личные категории</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/check.svg" width={14} height={14} alt="svg" />
								<p>Настройка профиля</p>
							</div>

							<div className={styles.item}>
								<Image src="/svg/check/active_check.svg" width={14} height={14} alt="svg" />
								<p>Доступны все фильмы сервиса</p>
							</div>
							<div className={styles.item}>
								<Image src="/svg/check/active_check.svg" width={14} height={14} alt="svg" />
								<p>Особое обозначение премиального профиля</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Ticket;
