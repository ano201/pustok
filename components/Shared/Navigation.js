import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
    {/* fixed top-0 w-full */}
      <nav className=" bg-gray-100 text-gray-700 py-1 nav">
        <div className=" max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="content-center">
                  {/* logo should be here */}
                  <span className="font-extrabold px-2 py-1 text-4xl">
                    E-Pustok
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="content-center px-2 py-1 bg-gray-200 hover:bg-gray-400 duration-300 rounded">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                  &nbsp; &nbsp;
                  <span className="font-semibold text-2l">Search</span>
                </a>
              </Link>
              <Link href="/">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 duration-300 rounded">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 duration-300 rounded">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 duration-300 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
