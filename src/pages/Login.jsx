import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="flex w-full justify-center top-36"
      style={{ position: "fixed" }}
    >
      <form className="shadow-xl bg-btnback rounded w-80 px-8 pt-6 pb-8">
        <div className="mb-4">
          <label
            className="block text-white text-sm mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="hover:bg-blue-700 bg-white hover:text-btnhover text-btnback py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline hover:underline cursor-pointer text-sm text-white hover:text-blue-800">
            Forgot Password?
          </a>
        </div>

        <Link to='/signup' className="inline-block hover:underline align-baseline mt-5 text-sm text-white hover:text-blue-800">
          Register ??
        </Link>
      </form>
    </div>
  );
};

export default Login;
