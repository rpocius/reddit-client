import Image from "next/image";
import Link from "next/link";
import styles from './card.module.css';
import PostHeader from '../post_header/post_header.jsx'

export default function Card() {
    return(
        <div className={styles.card}>
            <PostHeader />
            <div className={styles.post}>
                <h2>Post Name</h2>
                <p>Post content Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis voluptatem eius aspernatur mollitia sequi, consequuntur ipsum cum architecto obcaecati? Impedit fugit modi sunt dignissimos esse obcaecati autem quidem aut!</p>
            </div>
            <div className={styles.footer}>
                <button>Comments</button>
                <button>Share</button>
            </div>
        </div>
    )
};