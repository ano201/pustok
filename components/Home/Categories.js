import Category from "./Category.js";

const Categories = () => {
  return (
    <div className="bg-gray-800">
      <h1 className="ml-2 text-2xl font-semibold text-gray-300">Categories</h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap">
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
        <Category></Category>
      </div>
    </div>
  );
};

export default Categories;
