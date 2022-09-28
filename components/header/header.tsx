import Link from 'next/link'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <Link href=""><a>Главная</a></Link>
                <Link href=""><a>Фильмы</a></Link>
                <Link href=""><a>Сериалы</a></Link>
            </div>
        </header>
    )

}

export default Header;