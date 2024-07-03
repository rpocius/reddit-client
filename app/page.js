import styles from "./page.module.css";
import Header from "./components/header/header.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Finally started doing this</h1>
      </main>
    </>
  );
}
