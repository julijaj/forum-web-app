import styles from "./styles.module.css";
import axios from "axios";
import cookieCutter from "cookie-cutter";

const answerCard = ({ id, content, canDelete }) => {
    const deleteAnswer = async () => {
        console.log(`Answer was deleted (ID=${id})`);
        document.getElementById(`answer-card-${id}`).remove();
        const url = `http://localhost:8080/questions/ignore/answers/${id}`
        const userId = cookieCutter.get('userId')
        axios.defaults.headers.common['user-id'] = userId;
        const response = await axios.delete(url);

        console.log(response);
    };
    return (
        <div className={styles.answercard} id={`answer-card-${id}`}>
            <p className={styles.content}>{content}</p>
            {canDelete && (<button onClick={() => deleteAnswer()} className={styles.button}>Delete</button>)}
        </div>
    )
}

export default answerCard;