import styles from "./Home.module.css";

async function fetchData() {
  const res = await fetch("http://localhost:3000/api/hello");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export default async function Home({ products }) {
  const data = await fetchData();
  console.log(data);
  return (
    <main className={styles.mainSection}>
      <section className="section-main">
        <h1>Landing Page</h1>
      </section>
    </main>
  );
}
