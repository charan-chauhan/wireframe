import styles from '../styles/CardList.module.css'

export default function CardList({ items = [], columns = 3 }) {
  return (
    <ul className={`${styles.Crd_ul} ${styles[`Crd_ul-${columns}`]}`}>
      {items.map((item, index) => (
        <li key={index}>
          <div className={styles.Crd_img}></div>
          <p className={styles.Crd_tx}>{item}</p>
        </li>
      ))}
    </ul>
  )
}
