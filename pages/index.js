import Head from "next/head";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Review from "../components/Home/Review";
import Latest from "./../components/Home/Latest";

export default function Home({ setVisible }) {
  return (
    <div>
      <Head>
        <title>E-Pustok</title>
        <meta name="keywords" content="books" />
      </Head>
      <header className="pt-14 bg-gray-100">
        <Banner></Banner>
      </header>
      <main>
        <section className="mt-4">
          <Latest></Latest>
        </section>
        <section className="mt-4">
          <Categories></Categories>
        </section>
        <section className="mt-4">
          <Review></Review>
        </section>
      </main>
    </div>
  );
}
