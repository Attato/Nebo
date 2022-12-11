import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				©{' '}
				{new Date().getFullYear() === 2022
					? new Date().getFullYear()
					: '2022 - ' + new Date().getFullYear()}
				&nbsp;Небо. Все права защищены
			</p>
		</footer>
	);
};

export default Footer;
