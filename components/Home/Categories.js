import Link from "next/link";
import Category from "./../Shared/Category";

const Categories = () => {
  return (
    <div className="bg-gray-100 py-4 relative">
      <h1 className="ml-2 text-2xl font-semibold text-stone-600">Categories</h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap">
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </div>
      <aside>
        <button></button>
      </aside>
      <aside>
        <button></button>
      </aside>
      <div className="text-right px-8 py-4 text-stone-600 text-lg font-extrabold">
        <Link href="/allCategories">See All</Link>
      </div>
    </div>
  );
};

export default Categories;
