import styles from "./styles.module.css";
import NavBar from 'src/components/navbar/navbar'
import Footer from 'src/components/footer/footer'

const InsertQuestion = () => {
  return (
    <div className="global-container">
    <NavBar />
    <main>
      <h1 className={styles.title}>Ask Question!</h1>
      <div>
        <input className={styles.input}
          placeholder="Write your question..."
        />
        <button className={styles.button}>Submit</button>
      </div>
    </main>
    <Footer />
    </div>
  )
}
export default InsertQuestion;