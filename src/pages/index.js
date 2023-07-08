import styles from "./styles.module.css";
import QuestionCard from '/src/components/questionCard/questionCard'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import { Radio, Spacer } from "@nextui-org/react";
import React, { useState, useEffect } from "react";

const Home = () => {

  const [questions, setQuestions] = useState();

  const fetchQuestions = async () => {

    const myData = [{ id: 1, questionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", canDelete: true }, { id: 2, questionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", canDelete: false }, { id: 3, questionText: "What is life?", canDelete: true }, { id: 4, questionText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", canDelete: false }]

    setQuestions(myData)
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const is_data_loaded = questions != null

  return (
    <div className="global-container">
      <NavBar />
      <main>
        {is_data_loaded && (
          <div>
            <Radio.Group orientation="horizontal" defaultValue="all" className={styles.filter}>
              <Radio value="all">Show all</Radio>
              <Radio value="answered">Show answered</Radio>
              <Radio value="unanswered">Show unanswered</Radio>
            </Radio.Group>
            <Spacer y={1} />
            <div className={styles.questioncards}>
              {questions.map((item) => (
                <QuestionCard
                  id={item.id}
                  content={item.questionText}
                  canDelete={item.canDelete}
                />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Home;
