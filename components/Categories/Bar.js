import Link from "next/link";

const bar = () => {
  return (
    <div className="pt-4">
      <div>
        <ul className="list-none flex justify-around px-2">
          <li className="w-1/2 bg-stone-400 rounded py-2">
            <Link href="/allCategories/english">
              <button className="w-full">English</button>
            </Link>
          </li>
          <li className="w-1/2 bg-stone-300 rounded py-2">
            <Link href="/allCategories/bengali">
              <button className="w-full">Bengali</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

};

export default bar;
