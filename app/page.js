import styles from "./page.module.css";
import Header from "./components/header/header.jsx";
import Card from "./components/card/card.jsx"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Card />
        <Card />
        <Card />
        <Card />
        <p>Rest of the page</p>
      </main>
    </>
  );
}
