import Link from "next/link";

const bar = () => {
  return (
    <div className="mt-9">
      <div>
        <ul className="max-w-md m-auto list-none flex justify-around">
          <li className="w-1/2">
            <Link href="/allCategories/english">
              <button className="w-full">English</button>
            </Link>
          </li>
          <li className="w-1/2">
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
