import React, { useState } from "react";
import phone from "../assets/telephone.jpg";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('',formData)
      console.log("success ",response.data )
      alert(response.data.message)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="flex flex-row items-center justify-center mx-32 m-5 mb-10 gap-2 bg-white rounded-lg shadow-xl ">
      <div className="flex w-1/2 relative">
        <img src={phone} alt="" className="rounded-lg p-1" />
        <div className="flex flex-col items-center  absolute inset-0 py-6">
          <h1 className="font-semibold text-lg ">Contact Information</h1>
          <p className="text-sm">
            Reach out to us, and we'll get back to you as soon as possible.
          </p>

          <h1 className="mt-10">
            <PhoneInTalkIcon></PhoneInTalkIcon> +251987654321
          </h1>
          <h1 className="mt-2">
            <EmailIcon></EmailIcon> TravelEasy@gmail.com
          </h1>
          <h1 className="mt-2">
            <LocationOnIcon></LocationOnIcon> 1234 TravelEase Lane, Suite 567
            City, State, 89012
          </h1>
          <h1 className="mt-32 space-x-4">
            <FacebookIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <XIcon fontSize="small" />
          </h1>
        </div>
      </div>
      <div className=" w-1/2 pr-5">
        <form onSubmit={handleSubmit} className="space-y-2 ">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="4"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-900 text-white font-medium rounded-md shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
