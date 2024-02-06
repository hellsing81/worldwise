// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <div>
          <h2>
            <br />
            Всего 2$/мес.
          </h2>
          <p>
            Используйте это приложение с удовольствием и делитесь с друзьями
            впечатлениями о своих поездках.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
