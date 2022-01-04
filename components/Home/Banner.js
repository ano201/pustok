const Banner = () => {
  return (
    <div className="relative">
      <img className="w-full h-screen" src="/Images/library.jpg" alt="" />
      <div className="absolute top-1/4 w-full">
        <div className="p-12 bg-gray-500/60 text-gray-100 font-semibold text-xl mx-auto rounded-3xl w-fit">
          <div className="text-center">
            <h2>“The more that you read, the more things you will know.</h2>
            <h2>The more that you learn, the more places you&apos;ll go.”</h2>
          </div>
          <div className="text-center mt-8">
            <h2>
              <h4>Dr. Seuss__</h4>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
