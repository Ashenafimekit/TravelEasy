import React, { useEffect, useState } from "react";
import gIcon from "../assets/gIcon.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [response, setResponse] = useState("");
  const [responseType, setResponseType] = useState("");
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;


  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setResponse("");
    setResponseType("");
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(`${apiUrl}/users/login`, userData)
        .then((res) => {
          const { token, user } = res.data;

          sessionStorage.setItem("token", token);
          sessionStorage.setItem("username", user.username);
          sessionStorage.setItem("role", user.role);

          if (user.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }

          if (res.status === 201) {
            setResponse(res.data.message);
            toast.success(res.data.message)
            setResponseType("success");
          }
          setUserData({
            username: "",
            password: "",
          });
        });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setResponse(error.response.data.message);
          toast.error(error.response.data.message)
          setResponseType("error");
        } else if (error.response.status === 500) {
          setResponse("Server Error : please try again");
          toast.error("Server Error please try agian!")
          setResponseType("error");
        }
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
        <ToastContainer/>
       </div>
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
