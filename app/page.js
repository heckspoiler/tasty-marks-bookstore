import styles from "./Home.module.css";

async function fetchData() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // return [1, 2, 3];
  // await new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     return reject("an error occured");
  //   }, 3000)
  // );

  const res = await fetch("http://localhost:3000/api/hello");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
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
