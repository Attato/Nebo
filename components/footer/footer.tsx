import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<Link href="/" className={styles.logo}>
					View
				</Link>
				<div className={styles.right__side}>
					<div className={styles.columns}>
						<h2>Разделы</h2>
						<Link href="/">Главная</Link>
						<Link href="/movies">Фильмы</Link>
						<Link href="/tickets">Билеты</Link>
						<Link href="/signIn">Кабинет</Link>
					</div>
					<div className={styles.columns}>
						<h2>Информация</h2>
						<Link href="/movies">Документация</Link>
						<Link href="/movies">Скидки</Link>
						<Link href="/tickets">FAQ</Link>
					</div>
				</div>
			</div>
			<div className={styles.under__footer}>
				<p> © 2022 View. Все права защищены</p>
				<div className={styles.right_side}>
					<Link href="/movies">Политика конфиденциальности</Link>
					<Link href="/tickets">Кабинет</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
