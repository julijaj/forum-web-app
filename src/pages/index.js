import styles from "./styles.module.css";
import QuestionCard from '/src/components/questionCard/questionCard'
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

const Home = () => {
  return (
    <div className="global-container">
      <NavBar />
      <main>
        <ul className={styles.filter}>
          <li>Show all</li>
          <li>Show answered</li>
          <li>Show unanswered</li>
        </ul>
        <div className={styles.grid}>
          <QuestionCard
            id="1"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
            canDelete={true}
          />
          <QuestionCard
            id="2"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            canDelete={false}
          />
          <QuestionCard
            id="3"
            content="What is life?"
            canDelete={true}
          />
          <QuestionCard
            id="4"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            canDelete={false}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
