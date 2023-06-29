import styles from "./styles.module.css";

const tripCard = () => {
    return (
        <div>
        <a href={`/questions/1`} className={styles.card}>
            <h3>1st question</h3>
            <p>What is life?</p>
        </a>
        </div>
    )
}

export default tripCard;