import styles from "./Home.module.css";

export default async function Home({ products }) {
  return (
    <main className={styles.mainSection}>
      <section className="section-main">
        <h1>Landing Page</h1>
      </section>
    </main>
  );
}
