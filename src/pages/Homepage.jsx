import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Путешествуйте по России и Миру.
          <br />
          WorldWise будет помогать вам в этом.
        </h1>
        <h2>Карта мира, которая отслеживает ваши шаги в каждом городе.</h2>
        <Link to="/login" className="cta">
          Начните отслеживать сейчас
        </Link>
      </section>
    </main>
  );
}
