import Link from 'next/link'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.right__side}>
                    <Link href="/"><a>Главная</a></Link>
                    <Link href="/movies"><a>Фильмы</a></Link>
                    <Link href="/cartoons"><a>Мультфильмы</a></Link>

                </div>

                <div className={styles.left__side}>
                    <Link href="/auth"><a>Авторизация</a></Link>
                </div>
            </div>
        </header>
    )

}

export default Header;