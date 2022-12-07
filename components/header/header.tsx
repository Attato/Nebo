import { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = useRouter().pathname;

	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.right__side}>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className={isOpen ? styles.burger__active : styles.burger}
					/>
					<div className={isOpen ? styles.menu__active : styles.menu}>
						{isOpen && (
							<div className={styles.blur} onClick={() => setIsOpen(false)} />
						)}
						<div className={styles.menu__content}>
							<Link href="/" onClick={() => setIsOpen(!isOpen)}>
								{pathname === '/' ? (
									<Image
										src="/svg/header/home/home_active.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								) : (
									<Image
										src="/svg/header/home/home.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								)}
							</Link>
							<Link href="/movies" onClick={() => setIsOpen(!isOpen)}>
								{pathname === '/movies' ? (
									<Image
										src="/svg/header/movies/movies_active.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								) : (
									<Image
										src="/svg/header/movies/movies.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								)}
								<p>Фильмы</p>
							</Link>
							<Link href="/subscription" onClick={() => setIsOpen(!isOpen)}>
								{pathname === '/subscription' ? (
									<Image
										src="/svg/header/subscription/subscription_active.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								) : (
									<Image
										src="/svg/header/subscription/subscription.svg"
										width={24}
										height={24}
										alt="svg"
									/>
								)}
								<p>Подписка</p>
							</Link>
						</div>
					</div>
					<div className={styles.right__side__content}>
						<Link href="/">
							{pathname === '/' ? (
								<Image
									src="/svg/header/home/home_active.svg"
									width={24}
									height={24}
									alt="svg"
								/>
							) : (
								<Image
									src="/svg/header/home/home.svg"
									width={24}
									height={24}
									alt="svg"
									style={{ paddingBottom: 1 }}
								/>
							)}
							<p>Главная</p>
						</Link>
						<Link href="/movies">
							{pathname === '/movies' ? (
								<Image
									src="/svg/header/movies/movies_active.svg"
									width={24}
									height={24}
									alt="svg"
									style={{ paddingBottom: 1 }}
								/>
							) : (
								<Image
									src="/svg/header/movies/movies.svg"
									width={24}
									height={24}
									alt="svg"
								/>
							)}
							<p>Фильмы</p>
						</Link>
						<Link href="/subscribe">
							{pathname === '/subscribe' ? (
								<Image
									src="/svg/header/subscribe/subscribe_active.svg"
									width={24}
									height={24}
									alt="svg"
								/>
							) : (
								<Image
									src="/svg/header/subscribe/subscribe.svg"
									width={24}
									height={24}
									alt="svg"
								/>
							)}
							<p>Подписка</p>
						</Link>

						<Link href={{ pathname: '/user', query: { tab: 'Профиль' } }}>
							user
						</Link>
					</div>
				</div>

				<div className={styles.left__side}>
					<Link href="/signin">Войти</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
