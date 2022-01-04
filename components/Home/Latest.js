import Card from "./Card";
const Latest = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="ml-2 text-2xl font-semibold text-gray-700">Latest Updated</h1>
      <div className="max-w-6xl mx-auto flex justify-evenly flex-wrap">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Latest;
