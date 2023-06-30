import styles from "./styles.module.css";
import AnswerCard from '/src/components/answerCard/answerCard'

const Question = () => {
  return (
    <main>
      <div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div>
        <AnswerCard
          id="1"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          canDelete={true}
        />
        <AnswerCard
          id="2"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          canDelete={false}
        />
        <AnswerCard
          id="3"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          canDelete={true}
        />
      </div>
      <div>
        <input 
        placeholder="Write your answer"
        />
        <button>Submit</button>
      </div>
    </main>
  )
}

export default Question;
