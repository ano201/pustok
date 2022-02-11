const Card = ({ booksData }) => {
  const { book, image } = booksData;

  return (
    <div className="rounded-xl text-gray-100 bg-stone-500/80 my-6">
      <figure className="p-8" style={{ width: "18rem" }}>
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
    </div>
  );
};

export default Card;
