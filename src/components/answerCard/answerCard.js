import styles from "./styles.module.css";

const answerCard = ({ id, content, canDelete }) => {
    return (
        <div>
            <p>{content}</p>
            {canDelete && (<button>Delete</button>)}
        </div>
    )
}

export default answerCard;