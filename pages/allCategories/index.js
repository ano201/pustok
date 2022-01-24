
import Head from 'next/head';
import AllCategories from '../../components/Categories/AllCategories';

const categories = () => {
  return (
    <div className="pt-14">
      <Head>
        <title>E-Pustok-Categories</title>
      </Head>
      <main>

      <AllCategories></AllCategories>
      </main>
    </div>
  );
};

export default categories;
