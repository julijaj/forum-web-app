import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="mailto:julija.janeliunaite@gmail.com"
                target="_blank"
            >
                Created by Julija | 2023
                {/* <img src="/vercel.svg" alt="Vercel" className="global-logo" /> */}
            </a>
        </footer>
    )
}

export default Footer;