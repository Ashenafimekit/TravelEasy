import React, { useState } from "react";
import phone from "../assets/telephone.jpg"; // Ensure this image path is correct
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3000/contact", formData).then((res) => {
        alert(res.data.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mx-4 md:mx-10 lg:mx-32 m-5 mb-10 gap-5 bg-white rounded-lg shadow-xl p-5 md:p-10">
      {/* Contact Information Card */}
      <div className="flex flex-col w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={phone} alt="Contact" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h1 className="font-semibold text-lg mb-2">Contact Information</h1>
          <p className="text-sm mb-6">
            Reach out to us, and we'll get back to you as soon as possible.
          </p>
          <div className="flex items-center mb-4">
            <PhoneInTalkIcon className="mr-2" /> +251987654321
          </div>
          <div className="flex items-center mb-4">
            <EmailIcon className="mr-2" /> TravelEasy@gmail.com
          </div>
          <div className="flex items-center mb-4">
            <LocationOnIcon className="mr-2" /> 1234 TravelEase Lane, Suite 567, City, State, 89012
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <FacebookIcon fontSize="small" />
            <InstagramIcon fontSize="small" />
            <XIcon fontSize="small" />
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="flex w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
        <h1 className="font-bold text-2xl text-center">Contact Form</h1>
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
              type="text"
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
