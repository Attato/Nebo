import Link from 'next/link'
import Image from 'next/image'
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
                    <Link href="/signIn"><a>Войти <Image src="/svg/avatar.svg" width={22} height={22}/></a></Link>
                </div>
            </div>
        </header>
    )

}

export default Header;