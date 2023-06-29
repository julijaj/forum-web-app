import styles from "./styles.module.css";

const tripCard = ({id, destination}) => {
    return (
        <a href={`/trips/${id}`} className={styles.card}>
            <h3>{destination} &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>
    )
}

export default tripCard;