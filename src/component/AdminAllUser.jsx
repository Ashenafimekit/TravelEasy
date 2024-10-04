import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminAllUser = () => {
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState("");

  useEffect(() => {
    try {
      console.log("check 1");

      axios.get("http://localhost:3000/users/getusers").then((res) => {
        console.log("check 2");
        setUsers(res.data);
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status == 404) {
          setResponse(error.response.data.message);
        }
      }
      console.log("error ", error);
    }
  }, []);

  const handleRemove = async (user) => {
    try {
      console.log("check melos");
      await axios
        .delete("http://localhost:3000/users/deleteuser", {
          data: {
            username: user.username,
            role: user.role,
          },
        })
        .then((res) => {
          window.location.reload();
        });
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      {response && (
        <div className={`text-sm font-bold`}>
          <p>{response}</p>
        </div>
      )}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-200 border-b border-gray-300">
          <tr>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Username
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Role
            </th>
            <th className="px-6 py-3 text-left text-gray-600 font-semibold">
              Remove User
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 text-gray-800">{user.username}</td>
              <td className="px-6 py-4 text-gray-800">{user.role}</td>
              <td className="px-6 py-4 text-gray-800">
                <button
                  onClick={() => handleRemove(user)}
                  className="bg-black p-2 rounded-lg text-white"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllUser;
