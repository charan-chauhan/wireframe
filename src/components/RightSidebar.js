import styles from '../styles/RightSidebar.module.css'
import AdBlock from './AdSection'
import List from './List'

export default function RightSidebar() {
    // Function to generate dummy items
    const generateItems = (count, text) => Array.from({ length: count }, () => text);

    const numberedItems = generateItems(5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit");
    const bulletItems = generateItems(10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit");

    return (
        <aside className={styles.Ad_}>
            <AdBlock />
            <div className="Separator"></div>
            <List items={numberedItems} type="number" />
            <div className="Separator"></div>
            <List items={bulletItems} type="point" />
        </aside>
    )
}
