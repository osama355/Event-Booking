import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase.config";

const Login = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        setFormData({
          email: "",
          password: "",
        });
        console.log("Register");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        console.log("Not Register");
      });
  };

  return (
    <div
      className="flex w-full justify-center top-36"
      style={{ position: "fixed" }}
    >
      {!!user ? (
        navigate('/')
      ) : (
        <form className="shadow-xl bg-btnback rounded w-80 px-8 pt-6 pb-8">
          <div className="mb-4">
            <label className="block text-white text-sm mb-2" htmlFor="username">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="hover:bg-blue-700 bg-white hover:text-btnhover text-btnback py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a className="inline-block align-baseline hover:underline cursor-pointer text-sm text-white hover:text-blue-800">
              Forgot Password?
            </a>
          </div>

          <Link
            to="/signup"
            className="inline-block hover:underline align-baseline mt-5 text-sm text-white hover:text-blue-800"
          >
            Register ??
          </Link>
        </form>
      )}
    </div>
  );
};

export default Login;
