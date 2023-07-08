import styles from "./styles.module.css";
import AnswerCard from '/src/components/answerCard/answerCard'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import AnswerForm from 'src/components/answerForm/answerForm'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router'

const Question = () => {

  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();

  const router = useRouter()
  const questionId = router.query.id

  const fetchQuestion = async () => {

    const urlQ = `http://localhost:8080/questions/${questionId}`
    const responseQ = await axios.get(urlQ);
    console.log("responseQ", responseQ);

    const urlA = `http://localhost:8080/questions/${questionId}/answers`
    const responseA = await axios.get(urlA);
    console.log("responseA", responseA);

    setAnswers(responseA.data.answers)
    setQuestion(responseQ.data.question)
  };

  useEffect(() => {
    questionId && fetchQuestion();
  }, [questionId]);

  const is_data_loaded = answers != null

  return (
    <div className="global-container">
      <NavBar />
      <main>
        {is_data_loaded && (
          <div>
            <div className={styles.card}>
              <p>{question.content}</p>
            </div>
            <div>
              {answers.map((item) => (
                <AnswerCard
                  id={item._id}
                  content={item.content}
                  canDelete={item.canDelete}
                />
              ))}
            </div>
            <div>
              <AnswerForm />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Question;
