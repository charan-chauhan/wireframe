import styles from '../styles/TopNav.module.css';
import BaseButton from './BaseButton';

export default function TopNav() {
  const navItems = Array.from({ length: 5 });

  return (
    <div className={styles.TopNav_wrapper}>
      <header className={styles.TopNav}>
        <div className={styles.Log}></div>
        <nav className={styles.Nav}>
          {navItems.map((_, index) => (
            <div key={index} className={styles.Nav_blk}></div>
          ))}
        </nav>
        <div className={styles.Actions}>
          <BaseButton variant="primary" size="md">Action</BaseButton>
          <BaseButton variant="primary" size="md">Login</BaseButton>
        </div>
      </header>
    </div>
  );
}
