import { useState } from "react";

const AddAWriter = () => {
  const [writersData, setWritersData] = useState({});
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newWritersData = { ...writersData };
    newWritersData[field] = value;
    setWritersData(newWritersData);
    setSuccess(false);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("name", writersData.name);
    formData.append("categories", writersData.categories);
    formData.append("image", image);

    fetch("http://localhost:5000/writers", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something Went Wrong,,,, Please try again");
        setLoading(false);
      });
  };

  return (
    <div className="relative">
      {loading && (
        <div className="flex justify-center items-center w-screen h-screen absolute top-0 z-50">
          <div
            className="spinner-border
              animate-spin
              inline-block
              w-24 h-24 border-8
              rounded
             border-purple-500
              "
            role="status"
          >
            <span className="hidden">Uploading...Your...Book...</span>
          </div>
        </div>
      )}
      {success && (
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Writer added successfully!!!</p>
            </div>
          </div>
        </div>
      )}
      <form
        className="bg-gray-100 shadow-md m-auto rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Enter Writer&apos;s Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="eg: Someone"
            required
            name="name"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="categories">Select Language:</label>

          <select
            name="categories"
            onChange={handleOnBlur}
            required
            id="categories"
          >
            <option></option>
            <option value="en">English</option>
            <option value="bn">Bengali</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Select Writer&apos;s photo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            required
            name="image"
            onBlur={handleImage}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Writer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAWriter;
