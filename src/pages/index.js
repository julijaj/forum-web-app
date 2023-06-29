import styles from "./styles.module.css";
import NavBar from '/src/components/navbar/navbar'
import QuestionCard from '/src/components/questionCard/questionCard'
import Filter from '/src/components/Filter/Filter'

const Home = () => {
  return (
    <main>
      <div>
        <Filter />
        <div className={styles.grid}>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </main>
  )
}

export default Home;
