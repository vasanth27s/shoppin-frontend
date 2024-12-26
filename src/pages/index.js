import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Apple Watch Studio</h1>
      <p className={styles.description}>Customize your Apple Watch and make it uniquely yours.</p>
      <Link href="/customize" className={styles.button}>
        Start Customizing
      </Link>
    </div>
  );
}
