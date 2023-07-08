import styles from "./styles.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const answerForm = () => {
    const router = useRouter()
    const questionId = router.query.id

    const [content, setContent] = useState();

    const insertAnswer = async () => {
        const data = {
            content: content,
        };

        console.log(data);

        const url = `http://localhost:8080/questions/${questionId}/answers`
        const response = await axios.post(url, data);

        console.log("response", response);

        router.reload(window.location.pathname)
        
    };

    return (
        <div>
            <input className={styles.input}
                value={content}
                onChange={(event) => setContent(event.target.value)}
                placeholder="Type your Answer"
            />
            <button onClick={() => insertAnswer()} className={styles.button}>Submit</button>
        </div>
    )
}

export default answerForm;