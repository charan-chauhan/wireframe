import styles from '../styles/MainContent.module.css'
import CardList from './CardList'

export default function MainContent() {
  const cardItems3 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  ];

  const cardItems4 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  ];

  return (
    <div className={styles.Stp}>
      <h2 className={styles.Stp_tl}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      </h2>
      <p className={styles.Stp_tx}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <div className={styles.Stp_img}></div>

      {/* Card lists below the main image */}
      <CardList items={cardItems3} columns={3} />
      <CardList items={cardItems4} columns={4} />
    </div>
  )
}
