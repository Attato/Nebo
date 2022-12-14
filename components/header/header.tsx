import { useState, useEffect, useRef } from 'react';

import { useRouter } from 'next/router';

import Link from 'next/link';
import Image from 'next/image';

import { useSession, signOut } from 'next-auth/react';

import pages from './header.json';

import styles from './header.module.scss';

const Header = () => {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const dropdown = useRef(null);

	useEffect(() => {
		if (!isDropdownOpen) return;
		function handleClick(event) {
			if (dropdown.current && !dropdown.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		}

		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	}, [isDropdownOpen]);

	const router = useRouter();
	const { data: session } = useSession();

	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.right__side}>
					{/* Mobile */}
					<button
						onClick={() => setIsBurgerOpen(!isBurgerOpen)}
						className={isBurgerOpen ? styles.burger__active : styles.burger}
					/>
					<div className={isBurgerOpen ? styles.menu__active : styles.menu}>
						{isBurgerOpen && (
							<div
								className={styles.blur}
								onClick={() => setIsBurgerOpen(false)}
							/>
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

				<div className={styles.left__side} ref={dropdown}>
					{session != null ? (
						<div className={styles.left__side__content}>
							<div
								className={
									isDropdownOpen
										? styles.user__dropdown__active
										: styles.user__dropdown
								}
								onClick={() => {
									setIsDropdownOpen(!isDropdownOpen);
								}}
							>
								<Image
									src={`${session.user.image}`}
									width={28}
									height={28}
									alt="img"
								></Image>
								<span>{session.user.name}</span>
								<Image
									src="/svg/movies/arrow.svg"
									width={16}
									height={16}
									alt="svg"
									style={{ transform: 'rotate(90deg)' }}
								></Image>
								{isDropdownOpen && (
									<div className={styles.dropdown__content}>
										<Link href="/user?tab=profile">
											<Image
												src={`/svg/user/profile.svg`}
												width={18}
												height={18}
												alt=""
											/>
											Профиль
										</Link>
										<Link href="/user?tab=friends">
											<Image
												src={`/svg/user/friends.svg`}
												width={18}
												height={18}
												alt=""
											/>
											Друзья
										</Link>
										<Link href="/user?tab=messages">
											<Image
												src={`/svg/user/messages.svg`}
												width={18}
												height={18}
												alt=""
											/>
											Сообщения
										</Link>
										<Link href="/user?tab=settings">
											<Image
												src={`/svg/user/settings.svg`}
												width={18}
												height={18}
												alt=""
											/>
											Настройки
										</Link>
										<hr />
										<button onClick={() => signOut()}>Выйти</button>
									</div>
								)}
							</div>
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
