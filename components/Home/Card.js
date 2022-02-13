import Link from "next/link";

const Card = ({ booksData }) => {
  const { book, image, _id } = booksData;

  return (
    <div className="rounded-xl text-gray-100 bg-stone-500/80 my-6 flex justify-between flex-col items-center">
      <figure className="px-6 pt-1" style={{ width: "14rem" }}>
        <img
          style={{ width: "7rem", height: "12rem" }}
          className="rounded mx-auto"
          src={`data:image/png;base64,${image}`}
          alt=""
        />
        <div className="pt-6 space-y-4">
          <figcaption className="font-medium">
            <div className="text-slate-800 font-bold">{book.name}</div>
            <div>{book.writer}</div>
          </figcaption>
        </div>
      </figure>
      <Link href={`book/${_id}`}>
        <button className="py-1 text-center w-full my-2 font-bold bg-zinc-600 rounded">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
