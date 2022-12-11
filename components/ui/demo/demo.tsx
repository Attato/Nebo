import styles from './demo.module.scss';
import Image from 'next/image';

const Demo = ({ children, url }) => {
	return (
		<div className={styles.demo}>
			<div className={styles.header}>
				<div className={styles.window__traffic}>
					<span className={styles.close}></span>
					<span className={styles.minimize}></span>
					<span className={styles.fullscreen}></span>
				</div>
				<div className={styles.browser__input}>
					<p>{url}</p>

					<Image
						src="/svg/subscribe/refresh.svg"
						width={12}
						height={12}
						alt="svg"
						draggable={false}
					></Image>
				</div>
				<div className={styles.space}></div>
			</div>
			<div className={styles.content}>
				<div className={styles.main}>{children}</div>
			</div>
		</div>
	);
};

export default Demo;
