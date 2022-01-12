import Link from "next/link";
import { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import useAuth from "./../../hooks/useAuth";

const Registration = () => {
  const { registerUser } = useAuth();
  const [registrationData, setRegistrationData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegistrationData = { ...registrationData };
    newRegistrationData[field] = value;
    setRegistrationData(newRegistrationData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registrationData.email, registrationData.password);
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
            htmlFor="password"
          >
            Enter Your Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            required
            name="password"
            onBlur={handleOnBlur}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-center">
        <h1>
          Already have an account?{" "}
          <Link href="login">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Log In
            </a>
          </Link>{" "}
          now.
        </h1>
        ---------- OR ----------
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Registration;
