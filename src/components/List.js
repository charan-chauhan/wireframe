import styles from '../styles/List.module.css';

export default function List({ items = [], type = 'number' }) {
  if (type === 'number') {
    return (
      <ol className={`${styles.Lst} ${styles.Lst_3}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    );
  } else {
    return (
      <ul className={`${styles.Lst} ${styles.Lst_4}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
}
