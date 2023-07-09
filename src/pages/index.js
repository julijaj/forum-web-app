import styles from "./styles.module.css";
import QuestionCard from '/src/components/questionCard/questionCard'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import { Radio, Spacer } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import cookieCutter from "cookie-cutter";

const Home = () => {

  const [questions, setQuestions] = useState();

  const fetchQuestions = async () => {

    const url = `http://localhost:8080/questions/`
    const userId = cookieCutter.get('userId')
    axios.defaults.headers.common['user-id']=userId;
    const response = await axios.get(url);
    console.log("response", response);

    setQuestions(response.data.questions)
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
                  id={item._id}
                  content={item.content}
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
