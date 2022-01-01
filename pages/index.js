import Head from "next/head";
import Banner from "../components/Home/Banner";
import Review from "../components/Home/Review";
import Latest from "./../components/Home/Latest";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pustok</title>
        <meta name="keywords" content="books" />
      </Head>
      <header className="mt-16">
        <Banner></Banner>
      </header>
      <main>
        <section className="mt-28">
          <Latest></Latest>
        </section>
        <section className="mt-28">
          <Review></Review>
        </section>
      </main>
    </div>
  );
}
