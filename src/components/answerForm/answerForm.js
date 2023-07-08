import styles from "./styles.module.css";
import React, { useState } from "react";

const answerForm = () => {

    const [content, setContent] = useState();

    const insertAnswer = async () => {
        const data = {
            content: content,
        };

        console.log(data);
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