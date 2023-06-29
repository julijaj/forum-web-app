import styles from "./styles.module.css";

const Footer = () => {
    return (
        <footer>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className="global-logo" />
            </a>
        </footer>
    )
}

export default Footer;