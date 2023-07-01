import styles from "./styles.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src='https://www.pngmart.com/files/11/Chat-Logo-PNG-Free-Download.png' />
            </div>
            <ul className={styles.list}>
                <li className={styles.navbutton}>
                    <a href="/">Home</a>
                </li>
                <li className={styles.navbutton}>
                    <a href="/insertQuestion">Ask Question!</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;