import React, { useEffect, useState } from "react";
import gIcon from "../assets/gIcon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);


  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };
  const toggleVisibility2 = () => {
    setIsVisible2((prev) => !prev);
  };

  const [userData, setUserData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [response, setResponse] = useState("");
  const [responseType, setResponseType] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setResponse("");
    setResponseType("");
  };

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (!userData.username) {
      newErrors.username = "Username is required";
    } else if (userData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    } else if (/\s/.test(userData.username)) {
      newErrors.username = "Username cannot contain spaces";
    }

    // Password validation
    if (!userData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}/.test(
        userData.password
      )
    ) {
      newErrors.password =
        "Password must be at least 5 characters, include an uppercase letter, a lowercase letter, a number, and a special character";
    }

    // Confirm Password validation
    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (userData.confirmPassword !== userData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run validation before submitting
    if (!validate()) {
      Object.values(errors).forEach((error) => toast.error(error));
      return;
    }

    try {
      const res = await axios.post(`${apiUrl}/users/register`, userData);
      if (res.status === 201) {
        setResponse(res.data.message);
        toast.success(res.data.message);
        setResponseType("success");
        setUserData({
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      if (error.response) {
        const errorMessage =
          error.response.status === 400
            ? error.response.data.message
            : "Server Error please try again!";
        setResponse(errorMessage);
        toast.error(errorMessage);
        setResponseType("error");
      }
    }
  };
  return (
    <div className="flex justify-center items-center m-4 sm:m-10">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center justify-center bg-[#F5F5F5] rounded-lg shadow-lg gap-6 p-4 sm:p-5 w-full sm:w-8/12 md:w-6/12 lg:w-4/12 ${
          responseType === "error"
            ? "border border-red-500"
            : responseType === "success"
              ? "border border-green-500"
              : ""
        }`}
      >
        <div className="">
          <ToastContainer />
        </div>
        <div>
          <h1 className="font-bold text-lg sm:text-xl">Join Us! Sign Up Now</h1>
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="border border-black rounded-md text-center w-full p-2"
          />
        </div>
        <div className="w-full relative">
          <input
            type={isVisible ? "text" : "password"}
            name="password"
            value={userData.password}
            placeholder="Password"
            onChange={handleChange}
            className="border border-black rounded-md text-center w-full p-2"
          />
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute top-2 right-3 cursor-pointer"
          >
            {isVisible ? "🙈" : "👁️"}
          </button>
        </div>
        <div className="w-full relative">
          <input
            type={isVisible2 ? "text" : "password"}
            name="confirmPassword"
            value={userData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            className="border border-black rounded-md text-center w-full p-2"
          />
          <button
            type="button"
            onClick={toggleVisibility2}
            className="absolute top-2 right-3 cursor-pointer"
          >
            {isVisible2 ? "🙈" : "👁️"}
          </button>
        </div>
        <div className="">
          <button className="bg-black rounded-lg text-white p-2 w-full sm:w-48">
            Sign up
          </button>
        </div>
        <div className="">
          <button className="bg-white p-2 rounded-lg w-full sm:w-auto">
            <img src={gIcon} alt="Google Icon" className="w-8 h-8 inline" />
            <span className="ml-2">Sign in with Google</span>
          </button>
        </div>
        <div className="w-full flex justify-between -mt-4 underline">
          <Link to="/signin">Sign In</Link>
          <Link to="/">Back</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
