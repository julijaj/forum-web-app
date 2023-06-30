import styles from "./styles.module.css";

const tripCard = ({ id, content, canDelete }) => {
    return (
        <div>
            <a href={`/questions/${id}`} className={styles.card}>
                <p>{content}</p>
            </a>
            {canDelete && (<button>Delete</button>)}
        </div>
    )
}

export default tripCard;