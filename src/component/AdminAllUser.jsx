import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid } from "@mui/x-data-grid";

const AdminAllUser = () => {
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState("");
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        axios.get(`${apiUrl}/users/getusers`).then((res) => {
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
    };

    fetchUser();
  }, []);

  const handleRemove = async (user) => {
    try {
      await axios
        .delete(`${apiUrl}/users/deleteuser`, {
          data: {
            username: user.username,
            role: user.role,
          },
        })
        .then((res) => {
          setResponse(res.data.message);
          setUsers(users.filter((item) => item._id !== user._id));
        });
    } catch (error) {
      console.log("error : ", error);
    }
  };

  const columns = [
    { field: "username", headerName: "User Name", width: 150 },
    { field: "role", headerName: "Role", width: 150 },

    {
      field: "Remove",
      headerName: "Remove",
      width: 150,
      renderCell: (params) => (
        <button
          className=" px-4 rounded-lg"
          onClick={() => handleRemove(params.row)}
        >
          <DeleteIcon sx={{ color: "red" }} />
        </button>
      ),
    },
  ];

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-lightGray p-6">
        <h1 className="text-center">
          Welcome to the TravelEase Admin Dashboard! Manage your system
          effectively and ensure seamless travel experiences for your customers
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div style={{ height: 495, width: "60%" }}>
          <DataGrid
            rows={users}
            getRowId={(row) => row._id}
            columns={columns}
            pageSizeOptions={[5, 10, 25, { value: -1, label: "All" }]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            checkboxSelection
            sx={{
              // Header Styles
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: "", // Dark background for header
                color: "white", // White text
              },

              ".MuiDataGrid-columnHeaderTitleContainer": {
                backgroundColor: "#1a1a1a", 
                color: "white",
              },
              
              ".MuiDataGrid-columnHeader.MuiDataGrid-columnHeader--sortable.MuiDataGrid-withBorderColor":{
                backgroundColor: "#1a1a1a",
                color: "white",
              },
              ".MuiDataGrid-row--borderBottom.css-yrdy0g-MuiDataGrid-columnHeaderRow > .MuiDataGrid-filler" : {
                backgroundColor: "#1a1a1a",
                color: "white",
              },
              "& .MuiDataGrid-sortIcon": {
                color: "white", // Sort arrow color
              },
              "& .MuiDataGrid-menuIconButton": {
                color: "white", // Default color for the three-dot menu
              },
              // Cell Styles
              "& .MuiDataGrid-cell": {
                color: "#333", // Dark text color for rows
              },
              // Row Styles (Alternating Colors)
              "& .MuiDataGrid-row:nth-of-type(odd)": {
                backgroundColor: "#f7f7f7", // Light grey for odd rows
              },
              "& .MuiDataGrid-row:nth-of-type(even)": {
                backgroundColor: "#ffffff", // White for even rows
              },
              // Hover Styles
              "& .MuiDataGrid-cell:hover": {
                backgroundColor: "#ddd", // Light grey on hover
              },
              // Pagination and Grid Border
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: "#1a1a1a", // Footer background
                color: "white !important", // Footer text color
              },
              // Pagination and row display text
              "& .MuiTablePagination-displayedRows": {
                color: "white !important", // Text for displayed rows
              },
              "& .MuiTablePagination-selectLabel": {
                color: "white !important", // Text for "Rows per page"
              },
              "& .MuiSelect-select": {
                color: "white !important", // Dropdown text for page size
              },
              // Icons or buttons in the footer
              "& .MuiIconButton-root": {
                color: "white !important", // Pagination buttons
              },
              "& .MuiSelect-icon": {
                color: "white", // Dropdown arrow color
              },
              "& .MuiDataGrid-root": {
                border: "1px solid #ccc", // Light border around grid
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAllUser;
