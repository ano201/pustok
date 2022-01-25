import { useEffect, useState } from "react";
import Card from "./Card";

const Latest = () => {
  const [books, setBooks] = useState([]);
  const [lastNum, setLastNum] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLastNum(data.length);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      {books != 0 && <h1 className="ml-2 text-2xl font-semibold text-gray-700">
        Latest Books
      </h1>}
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap flex-row-reverse">
        {books.slice(lastNum - 3, lastNum).map(booksData => <Card booksData={booksData} key={booksData._id}></Card>)}
      </div>
    </div>
  );
};

export default Latest;
