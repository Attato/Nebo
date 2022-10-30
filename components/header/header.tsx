import { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from './header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.right__side}>
					<button onClick={() => setIsOpen(!isOpen)} className={styles.burger}>
						<span></span>
					</button>
					<div className={isOpen ? styles.menu__active : styles.menu}>
						<div className={styles.menu__content}>
							<Link href="/" onClick={() => setIsOpen(!isOpen)}>
								<Image src="/svg/home.svg" width={24} height={24} alt="svg" />
								<p>Главная</p>
							</Link>
							<Link href="/movies" onClick={() => setIsOpen(!isOpen)}>
								<Image src="/svg/movie.svg" width={24} height={24} alt="svg" />
								<p>Фильмы</p>
							</Link>
							<Link href="/cartoons" onClick={() => setIsOpen(!isOpen)}>
								<Image src="/svg/ticket.svg" width={24} height={24} alt="svg" />
								<p>Подписка</p>
							</Link>
						</div>
					</div>
					<div className={styles.right__side__content}>
						<Link href="/">
							<Image src="/svg/home.svg" width={24} height={24} alt="svg" />
							<p>Главная</p>
						</Link>
						<Link href="/movies">
							<Image src="/svg/movie.svg" width={24} height={24} alt="svg" />
							<p>Фильмы</p>
						</Link>
						<Link href="/cartoons">
							<Image src="/svg/ticket.svg" width={24} height={24} alt="svg" />
							<p>Подписка</p>
						</Link>
					</div>
				</div>

				<div className={styles.left__side}>
					<Link href="/signIn">Войти</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
