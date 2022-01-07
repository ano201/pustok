const Category = () => {
  return (
    <div style={{ width: "13rem" }}>
      <figure className="rounded-md p-8 text-gray-100 bg-gray-400/20 my-6">
        <img
          className="w-24 h-24 full mx-auto"
          src="/Images/Icons/folder.svg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">“Tailwind CSS”</p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
};

export default Category;
