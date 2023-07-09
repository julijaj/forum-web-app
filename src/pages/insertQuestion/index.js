import styles from "./styles.module.css";
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'
import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import cookieCutter from "cookie-cutter";

const insertQuestion = () => {
  const router = useRouter()
  const [content, setContent] = useState();
  
  const postQuestion = async () => {
    
    const data = {
      content: content,
    }

    console.log(data);

    const url = `http://localhost:8080/questions/`
    const userId = cookieCutter.get('userId')
    axios.defaults.headers.common['user-id']=userId;
    const response = await axios.post(url, data);

    console.log("response", response);

    const redirectUrl = `/`

    router.push(redirectUrl)
  };

  return (
    <div className="global-container">
      <NavBar />
      <main>
        <h1 className={styles.title}>Ask Question!</h1>
        <div>
          <input className={styles.input}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Write your question..."
          />
          <button className={styles.button} onClick={() => postQuestion()}>Submit</button>
        </div>
      </main>
      <Footer />
    </div>
  )
};
export default insertQuestion;