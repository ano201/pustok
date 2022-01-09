const Loading = () => {
  return (
    <div className="bg-black/80 w-screen h-screen flex justify-center items-center z-50">
      <div className="loading">
        <img className="w-full m-1" src="/Images/loading.png" alt="" />
      </div>
    </div>
  );
};

export default Loading;
