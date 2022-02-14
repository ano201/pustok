import classNames from "classnames";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";

const Book = () => {
  const [bookData, setBookData] = useState({});

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBookData(data);
        console.log(data);
      });
  }, []);

  const [large, setLarge] = useState(false);

  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 905) {
      setLarge(true);
    } else {
      setLarge(false);
    }
  }, [size.width]);

  return (
    <div className="pt-14">
      <h1 className="my-3 text-center font-extrabold text-2xl">
        {bookData?.book?.name}
      </h1>
      {bookData.book && (
        <div
          className={classNames("flex justify-evenly", {
            "flex-col": !large,
            "border-slate-600 rounded border-4": large,
          })}
        >
          <div
            className={classNames("mb-3 p-3", {
              "w-1/2": large,
            })}
          >
            <img
              className="rounded mx-auto w-full"
              src={`data:image/png;base64,${bookData?.image}`}
              alt=""
            />
          </div>

          <div
            className={classNames(
              "mb-3 flex flex-col items-center justify-around",
              {
                "w-1/2": large,
              }
            )}
          >
            <div>
              <h2 className="font-bold">Writer: {bookData?.book?.writer}</h2>
            </div>
            <div className="overflow-y-scroll px-2">
              <h2 className="font-semibold">{bookData?.book?.description}</h2>
            </div>
            <div>
              {bookData.book && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={bookData.book?.bookLink}
                >
                  <button className="py-1 text-center px-4 text-white my-2 font-bold bg-zinc-600 rounded">
                    Download
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Book;
