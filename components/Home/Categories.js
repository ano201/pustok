import Link from "next/link";
import Category from "./../Shared/Category";
import { useEffect, useState } from "react";

const Categories = () => {
  const [writers, setWriters] = useState([]);
  const [lastNum, setLastNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/writers")
      .then((res) => res.json())
      .then((data) => {
        setWriters(data);
        setLastNum(data.length);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-4 relative">
      <h1 className="ml-2 text-2xl font-semibold text-stone-600">
        Writers
      </h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap flex-row-reverse">
        {writers.slice(lastNum - 4, lastNum).map((writersData) => (
          <Category key={writersData._id} writersData={writersData}></Category>
        ))}
      </div>
      <div className="text-right px-8 py-4 text-stone-600 text-lg font-extrabold">
        <Link href="/allCategories/english">See All</Link>
      </div>
    </div>
  );
};

export default Categories;
