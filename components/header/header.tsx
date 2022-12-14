import { useState } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';

import pages from './header.json';

import styles from './header.module.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const { data: session } = useSession();

	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.right__side}>
					{/* Mobile */}
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
					{/* Desktop */}
					<div className={styles.right__side__content}>
						{pages.map((page, id) => {
							return (
								<Link
									href={page.link + `${page.query}`}
									key={id}
									className={
										router.route === page.link
											? styles.link__active
											: styles.link
									}
								>
									{page.page}
								</Link>
							);
						})}
					</div>
				</div>

				<div className={styles.left__side}>
					{session != null ? (
						<div className={styles.left__side__content}>
							<Image
								src={`${session.user.image}`}
								width={28}
								height={28}
								alt="img"
							></Image>
							<span>{session.user.name}</span>
							<button onClick={() => signOut()}>Выйти</button>
						</div>
					) : (
						<Link href="/signin">Войти</Link>
					)}
				</div>
			</div>
			<div className={styles.offline_mode}>Автономный режим</div>
		</header>
	);
};

export default Header;
