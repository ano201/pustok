import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Link from "next/link";

const Dashbar = () => {
  const size = useWindowSize();
  const [large, setLarge] = useState(false);
  useEffect(() => {
    if (size.width >= 905) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  }, [size.width]);

  return (
    <div>
      <ul className="list-none bg-slate-800 py-4 flex justify-center items-center text-white">
        <li className="px-2 border rounded">
          <Link href="/dashboard/addAWriter">Add Writer</Link>
        </li>
        <li className="px-2 border rounded">
          <Link href="/dashboard/addABook">Add Book</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashbar;
