import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "motion/react";
import AOS from "aos";

const BookTable = () => {
  const [userData, setUserData] = useState([]);
  const [formatedData, setFormatedData] = useState([]);
  const [response, setResponse] = useState("");
  const token = sessionStorage.getItem("token");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get(`${apiUrl}/book/getbook`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setUserData(res.data);
          });
      } catch (error) {
        console.log("error ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    userData.map(
      (item) => (item.date = new Date(item.date).toLocaleDateString("en-GB"))
    );
    setFormatedData(userData);
  }, [userData]);

  const handleCancel = async (user) => {
    try {
      const res = await axios.delete(`${apiUrl}/book/cancel`, {
        data: {
          departure: user.departure,
          destination: user.destination,
          seatNumber: user.seatNumber,
          date: user.date,
        },
      });
      setResponse(res.data.message);
      toast.success(res.data.message);
      console.log(response);
      setFormatedData(formatedData.filter((data) => data._id !== user._id));
    } catch (error) {
      console.log("error : ", error);
      toast.error(error);
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
    });
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div>
        <ToastContainer />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {formatedData.map((user, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            data-aos="fade-bottom"
            className="border border-gray-300 rounded-lg shadow-md p-4 bg-white "
          >
            <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
            <p>
              <strong>Phone Number:</strong> {user.phone}
            </p>
            <p>
              <strong>Seat Number:</strong> {user.seatNumber}
            </p>
            <p>
              <strong>Departure:</strong> {user.departure}
            </p>
            <p>
              <strong>Destination:</strong> {user.destination}
            </p>
            <p>
              <strong>Date:</strong> {user.date}
            </p>
            <p>
              <strong>Payment Option:</strong> {user.payment}
            </p>
            <button
              onClick={() => handleCancel(user)}
              className="bg-darkGray hover:bg-black p-2 rounded-lg text-white mt-2 w-full "
            >
              Cancel
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BookTable;
