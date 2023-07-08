import styles from "./styles.module.css";
import AnswerCard from '/src/components/answerCard/answerCard'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import AnswerForm from 'src/components/answerForm/answerForm'
import React, { useState, useEffect } from "react";

const Question = () => {

  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();

  const fetchQuestion = async () => {

    const questionData = { id: 1, contentText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }

    const answersData = [{ id: 1, answerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", canDelete: true }, { id: 2, answerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", canDelete: false }, { id: 3, answerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", canDelete: true }]

    setAnswers(answersData)
    setQuestion(questionData)
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const is_data_loaded = answers != null

  return (
    <div className="global-container">
      <NavBar />
      <main>
        {is_data_loaded && (
          <div>
            <div className={styles.card}>
              <p>{question.contentText}</p>
            </div>
            <div>
              {answers.map((item) => (
                <AnswerCard
                  id={item.id}
                  content={item.answerText}
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
