import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.right__side}>
					<Link href="/">
						<a>
							<Image src="/svg/home.svg" width={24} height={24} alt="svg" />
							<p>Главная</p>
						</a>
					</Link>
					<Link href="/movies">
						<a>
							<Image src="/svg/movie.svg" width={24} height={24} alt="svg" />
							<p>Фильмы</p>
						</a>
					</Link>
					<Link href="/cartoons">
						<a>
							<Image src="/svg/ticket.svg" width={24} height={24} alt="svg" />
							<p>Билеты</p>
						</a>
					</Link>
				</div>

				<div className={styles.left__side}>
					<Link href="/signIn">
						<a>Войти</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
