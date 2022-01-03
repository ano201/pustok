import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className=" bg-gray-100 text-gray-700">
        <div className=" max-w-6xl border mx-auto">
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
                <a className="content-center px-2 py-1 hover:bg-gray-400 rounded">
                  {/* <img src={searchIcon} alt=""/> */}
                  <span className="font-semibold text-2l">Search</span>
                </a>
              </Link>
              <Link href="/">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 rounded">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 rounded">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="font-semibold text-2l px-2 py-1 hover:bg-gray-400 rounded">
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
