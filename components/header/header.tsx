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
							<Link href="/">Главная</Link>
							<Link href="/movies">Фильмы</Link>
							<Link href="/subscribe?product=3">Подписка</Link>
						</div>
					</div>
					<div className={styles.right__side__content}>
						<Link href="/">Главная</Link>
						<Link href="/movies">Фильмы</Link>
						<Link href="/subscribe?product=3">Подписка</Link>
						<Link href={{ pathname: '/user', query: { tab: 'Профиль' } }}>
							test user
						</Link>
					</div>
				</div>

				<div className={styles.left__side}>
					<Link href="/signin">Войти</Link>
				</div>
			</div>
			<div className={styles.offline_mode}>Автономный режим</div>
		</header>
	);
};

export default Header;
