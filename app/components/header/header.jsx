import Image from "next/image";
import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
    return(
        <header>
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <Link href="/">
                        <Image 
                            src="/reddit-icon.svg"
                            width={52}
                            height={52}
                            alt="Reddit icon">
                        </Image>
                        <Image 
                            src="/reddit-wordmark.svg"
                            width={76}
                            height={52}
                            alt="Reddit wordmark">
                        </Image>
                    </Link>
                </div>
                <div className={styles.searchBar}>

                </div>
                <div className={styles.navRight}>

                </div>
            </nav>
        </header>
    )
}