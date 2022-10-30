import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>
				<div className={styles.left__side}>
					<Link href="/" className={styles.logo}>
						View
					</Link>
					<p>следите за нами в соц. сетях.</p>
					<div className={styles.social__icons}>
						<Link href="https://vk.com/qwaqwakva" target="blank">
							<Image src="/svg/vk.svg" width={20} height={20} alt="link" />
						</Link>
						<Link href="https://t.me/qwaqwakwa" target="blank">
							<Image
								src="/svg/telegram.svg"
								width={20}
								height={20}
								alt="link"
							/>
						</Link>
						<Link href="https://github.com/Attato" target="blank">
							<Image src="/svg/github.svg" width={20} height={20} alt="link" />
						</Link>
					</div>
				</div>
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
