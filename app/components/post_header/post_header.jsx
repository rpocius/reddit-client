import Image from "next/image";
import Link from "next/link";
import styles from './post_header.module.css';

export default function PostHeader() {
    return(
        <>
            <div className={styles.top}>
                <Link href="/" className={styles.subredditLink}>
                    <Image src="/reddit-icon.svg" width={52} height={52} alt="subreddit logo" className={styles.subredditImage} />
                    <p className={styles.subredditName}>Placeholder</p>
                </Link>
                <p className={styles.timestamp}>Placeholder hours ago</p>
            </div>
        </>
    )
};