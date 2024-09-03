import React, { useState } from "react";

const BookForm = () => {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const [payment, setPayment] = useState(null);

  const handleBook = (e) => {
    e.preventDefault();
    console.log("booked ", {name, phone, payment})
  };

  return (
    <div className="flex items-center justify-center m-5 w-full">
      <div className="bg-[#F5F5F5] rounded-lg w-1/4 ">
        <h1 className="font-bold text-2xl text-center">Booking Form</h1>
        <form onSubmit={handleBook} className="flex flex-col gap-5 px-10 py-4">
          <input type="text" className="border border-black rounded-lg" />
          <input type="text" className="border border-black rounded-lg" />
          <input type="text" className="border border-black rounded-lg" />
          <input
            type="text"
            value={name}
            className="border border-black rounded-lg text-center"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={phone}
            className="border border-black rounded-lg text-center"
            placeholder="phone number"
            onChange={(e) => setPhone(e.target.value)}
          />
          <select
            value={payment}
            className="border border-black rounded-lg text-center"
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="">Payment Option</option>
            <option value="cbe">CBE</option>
            <option value="awash">Awash</option>
            <option value="tele">Tele Birr</option>
          </select>
          <button type="submit" className="bg-black text-white rounded-lg p-2">
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
