import React, { useState } from "react";
import gIcon from "../assets/gIcon.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/users/login", userData).then((res) => {
      setResponse(res.data.message);
      alert(response);
      setUserData({
        username: "",
        password: "",
      });
    });
  };

  return (
    <div className="flex justify-center items-center m-4 sm:m-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center bg-[#F5F5F5] rounded-lg shadow-lg gap-6 p-4 sm:p-5 w-full sm:w-8/12 md:w-6/12 lg:w-4/12"
      >
        <div>
          <h1 className="font-bold text-lg sm:text-xl">
            Log In to Your Account
          </h1>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="border border-black rounded-md text-center w-full p-2"
          />
        </div>
        <div className="w-full">
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="border border-black rounded-md text-center w-full p-2"
          />
        </div>
        <div className="">
          <button className="bg-black rounded-lg text-white p-2 w-full sm:w-48">
            Sign in
          </button>
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-white p-2 rounded-lg w-full sm:w-auto"
          >
            <img src={gIcon} alt="Google Icon" className="w-8 h-8 inline" />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
        <div className="w-full flex justify-between -mt-4 underline">
          <Link to="/signup">Signup</Link>
          <Link to="/">Back</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
