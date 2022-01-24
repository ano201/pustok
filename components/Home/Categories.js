import Link from "next/link";
import Category from "./../Shared/Category";
import { useEffect, useState } from "react";

const Categories = () => {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("https://rocky-lake-30366.herokuapp.com/writers")
      .then((res) => res.json())
      .then((data) => {
        setWriters(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-4 relative">
      <h1 className="ml-2 text-2xl font-semibold text-stone-600">
        Writers:{writers.length}
      </h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap">
        {writers.map((writersData) => (
          <Category key={writersData._id} writersData={writersData}></Category>
        ))}
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
