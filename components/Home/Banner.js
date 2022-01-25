import classNames from "classnames";
import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

const Banner = () => {
  const [large, setLarge] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 800) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  }, [size.width]);

  return (
    <div className="relative">
      <img className="w-full" src="/Images/library.jpg" alt="" />
      <div className="absolute top-0 flex items-center justify-center w-full h-full px-2">
        <div
          className={classNames(
            "bg-gray-500/40 text-gray-100 w-fit rounded-md",
            {
              "font-semibold text-lg mx-auto p-8": large,
              "text-xs p-2": !large,
            }
          )}
        >
          <div className="text-center">
            <h2>“The more that you read, the more things you will know.</h2>
            <h2>The more that you learn, the more places you&apos;ll go.”</h2>
          </div>
          <div className="text-center mt-8">
            <h2>Dr. Seuss__</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
