import styles from '../styles/TopBar.module.css';

export default function TopBar() {
  const blocks = Array.from({ length: 12 });

  return (
    <div className={styles.TpNv}>
      {blocks.map((_, index) => (
        <div key={index} className={styles.TpNv_blk}></div>
      ))}
    </div>
  );
}
