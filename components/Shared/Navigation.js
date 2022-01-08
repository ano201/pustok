import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useScrollDirection } from "./../../hooks/useScrollDirection";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import classNames from "classnames";

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const direction = useScrollDirection();
  const scrollingUp = direction == "up";

  const [open, setOpen] = useState(false);

  const [large, setLarge] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 800) {
      setLarge(true);
      setOpen(true);
    } else {
      setLarge(false);
      setOpen(false);
    }
  }, [size.width]);

  useEffect(() => {
    if (scrollingUp) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [scrollingUp]);

  return (
    <>
      {visible && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{
            y: 1,
          }}
          exit={{ y: "-100%", transition: { duration: 0.2 } }}
          transition={{
            duration: 0.4,
            ease: [0.5, 1, 0.89, 1],
          }}
          className="w-screen h-14 z-50 bg-white/70 backdrop-filter backdrop-blur-lg shadow fixed"
        >
          <nav className=" bg-gray-100 text-gray-700 py-1 pr-2 pb-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center">
                <div>
                  <Link href="/">
                    <a className="content-center">
                      {/* logo? should be here */}
                      <span
                        className={classNames("font-extrabold px-2 py-1", {
                          "text-4xl": large,
                          "text-xl": !large,
                        })}
                      >
                        E-Pustok
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="pl-2 pr-4">
                  <div
                    className={classNames(
                      "text-right",
                      {
                        hidden: large,
                      },
                      {
                        hidden: open,
                      }
                    )}
                  >
                    <button>
                      <FontAwesomeIcon
                        onClick={() => setOpen(true)}
                        icon={faBars}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                  <div
                    className={classNames(
                      "text-right",
                      {
                        hidden: large,
                      },
                      {
                        hidden: !open,
                      }
                    )}
                  >
                    <button>
                      <FontAwesomeIcon
                        onClick={() => setOpen(false)}
                        icon={faTimes}
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                  {open && (
                    <motion.div
                      initial={{ y: "-200" }}
                      animate={{
                        y: 3,
                      }}
                    >
                      <div
                        className={classNames("flex justify-between", {
                          "items-center": large,
                          "flex-col": !large,
                        })}
                      >
                        <Link href="/">
                          <a className="content-center px-2 py-1 bg-gray-200 hover:bg-gray-400 duration-300 rounded">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            &nbsp; &nbsp;
                            <span className="font-semibold text-2l">
                              Search
                            </span>
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
                        <Link href="/account">
                          <a className="font-semibold text-2l px-2 py-1 bg-gray-300 hover:bg-gray-400 duration-300 rounded">
                            Sign In
                          </a>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
