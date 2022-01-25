import { useEffect, useState } from "react";

const AddABook = () => {
  const [booksData, setBooksData] = useState({});
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);

  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/writers")
      .then((res) => res.json())
      .then((data) => {
        setWriters(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newBooksData = { ...booksData };
    newBooksData[field] = value;
    setBooksData(newBooksData);
  };

  const handlePdf = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();

    formData.append("name", booksData.name);
    formData.append("writer", booksData.writer);
    formData.append("description", booksData.description);

    formData.append("image", image);
    formData.append("pdf", pdf);

    fetch("http://localhost:5000/books", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <form
          className="bg-gray-100 shadow-md m-auto rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Enter Book&apos;s Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="eg: Something"
              required
              name="name"
              onBlur={handleOnBlur}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Book&apos;s description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Description"
              required
              name="description"
              onBlur={handleOnBlur}
              rows="4"
            ></textarea>
          </div>
          <div className="mb-6">
            <label htmlFor="writer">Select writer:</label>

            <select name="writer" onChange={handleOnBlur} required id="writer">
              <option></option>
              {writers.map((writer) => (
                <option value={writer.writer.name} key={writer._id}>
                  {writer.writer.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Select Book&apos;s photo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              required
              onBlur={handleImage}
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pdf"
            >
              Select Book
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="pdf"
              type="file"
              accept="application/pdf,application/vnd.ms-excel"
              required
              onBlur={handlePdf}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Book
            </button>
          </div>
        </form>
        {loading && (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border
              animate-spin
              inline-block
              w-24 h-24 border-8
              rounded
              border border-purple-500
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
                <p className="font-bold">Book added successfully!!!</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddABook;
