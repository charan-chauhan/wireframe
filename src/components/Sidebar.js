import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  const list1 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
  ];

  const list2 = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ];

  return (
    <div className={styles.Lst}>
      {/* List 1 */}
      <div className={styles.Lst_1}>
        {list1.map((item, index) => (
          <div key={index} className={styles.Lst_1_item}>
            <div className={styles.Lst_1_img}></div>
            <p className={styles.Lst_1_tx}>{item}</p>
          </div>
        ))}
      </div>

      <div className="Separator"></div>

      {/* List 2 */}
      <div className={styles.Lst_2_}>
        {list2.map((item, index) => (
          <div key={index} className={styles.Lst_2_item}>
            <div className={styles.Lst_2_img}></div>
            <p className={styles.Lst_2_tx}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
