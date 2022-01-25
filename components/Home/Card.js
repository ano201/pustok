const Card = ({ booksData }) => {
  const { book, image } = booksData;
  console.log(booksData);

  return (
    <div style={{ width: "18rem" }}>
      <figure className="rounded-xl p-8 text-gray-100 bg-stone-600/80 my-6">
        <img
          style={{ width: "7rem", height: "12rem" }}
          className="rounded mx-auto"
          src={`data:image/png;base64,${image}`}
          alt=""
        />
        <div className="pt-6 space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark">{book.name}</div>
            <div>{book.writer}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
