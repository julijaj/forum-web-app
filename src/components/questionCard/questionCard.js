import styles from "./styles.module.css";

const questionCard = ({ id, content, canDelete }) => {
    return (
        <div className={styles.cards}>
            <a href={`/questions/${id}`} className={styles.card}>
                <p>{content}</p>
            </a>
            {canDelete && (<button>Delete</button>)}
        </div>
    )
}

export default questionCard;