const Category = ({ writersData }) => {
  const { writer, image } = writersData;

  return (
    <div style={{ width: "13rem", height: "17rem" }} className="bg-gray-800/60 my-6 rounded-md">
      <figure className="p-8 text-gray-100">
        <img
          className="w-32 h-32 full mx-auto rounded"
          src={`data:image/png;base64,${image}`}
          alt=""
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">{writer.name}</p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
};

export default Category;
