import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>О приложении.</h2>
          <p>
            Учебный проект написанный на стеке технологий:
            JavaScript,React.js,html,css,jsx,ReactRouter,ContextAPI
          </p>
          <p>Обратная связь: andryusha.yukhin@mail.ru</p>
        </div>
      </section>
    </main>
  );
}
