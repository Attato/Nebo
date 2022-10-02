import Link from 'next/link'
import styles from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <Link href=""><a>Cinema</a></Link>
            </div>
        </footer>
    )

}

export default Footer;