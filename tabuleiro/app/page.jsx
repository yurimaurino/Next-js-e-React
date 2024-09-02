import Tabuleiro from "./components/Tabuleiro";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Tabuleiro />
    </div>
  );
}
