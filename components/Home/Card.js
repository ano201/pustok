const Card = () => {
  return (
    <div style={{ width: "18rem" }}>
      <figure className="rounded-xl p-8 text-gray-100 bg-stone-600/80 my-6">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="/Images/library.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark">Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
