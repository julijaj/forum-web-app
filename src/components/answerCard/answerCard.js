import styles from "./styles.module.css";

const answerCard = ({ id, content, canDelete }) => {
    return (
        <div className={styles.answercard}>
            <p className={styles.content}>{content}</p>
            {canDelete && (<button className={styles.button}>Delete</button>)}
        </div>
    )
}

export default answerCard;