import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newContactData = { ...contactData };
    newContactData[field] = value;
    setContactData(newContactData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactData);
    e.target.reset();
  };

  return (
    <div className="w-full max-w-md">
      <form
        className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Enter Your E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="example@email.com"
            required
            name="email"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Enter Your Message
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            type="text"
            placeholder="Example Messages"
            required
            name="message"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
