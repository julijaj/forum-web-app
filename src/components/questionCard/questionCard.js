import styles from "./styles.module.css";
import axios from "axios";

const questionCard = ({ id, content, canDelete }) => {
    const deleteQuestion = async () => {
        console.log(`Question was deleted (ID=${id})`);
        document.getElementById(`question-card-${id}`).remove();
        const url = `http://localhost:8080/questions/${id}`
        const response = await axios.delete(url);

        console.log(response);
    };
    return (
        <div className={styles.cards} id={`question-card-${id}`}>
            <a href={`/questions/${id}`} className={styles.card}>
                <p>{content}</p>
            </a>
            {canDelete && (<button onClick={() => deleteQuestion()} className={styles.button}>Delete</button>)}
        </div>
    )
}

export default questionCard;