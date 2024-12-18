# TravelEase - Bus Ticket Management System

![TravelEase Image](path/to/your/image.png)

**TravelEase** is a comprehensive bus ticket management system designed to provide users with an easy and efficient way to search for, book, and manage bus tickets. It includes an intuitive user interface for customers and an advanced admin dashboard to manage routes, bookings, and user data.

---

## Features

### User Features:
- **Route Search**: Filter routes based on **departure**, **destination**, **date**, **time**, and **price**.
- **Booking History**: View past bookings with detailed information.
- **Real-time Booking**: Select and book tickets instantly.
- **Responsive Design**: Optimized for all devices, providing a smooth user experience on mobile, tablet, and desktop.

### Admin Features:
- **Manage Routes**: Admins can add, update, and delete bus routes.
- **Booking Management**: View and manage all bookings across the system.
- **User Management**: Admins can view and manage users and their bookings.
- **Analytics**: Admin dashboard includes insights on route popularity, user activity, and more.

### Additional Features:
- **Secure Authentication**: Use of **JWT Authentication** to secure both user and admin pages.
- **RESTful API Integration**: Seamless integration between frontend and backend to manage bus route data and user bookings.

---

## Technologies Used

- **Frontend**:
  - **React.js**: Building the dynamic and interactive user interface.
  - **Tailwind CSS**: Customizable, utility-first CSS framework for responsive design.
  - **Axios**: For making HTTP requests to the backend.

- **Backend**:
  - **Node.js** & **Express.js**: Backend server running the API logic.
  - **MongoDB**: NoSQL database to store bus route data, bookings, and user information.
  - **JWT Authentication**: For secure access to both user and admin pages.

- **Version Control**: **Git** & **GitHub** for collaboration and version tracking.

---

## Setup & Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/travelease.git
   ```

2. Navigate to the project folder:
   ```bash
   cd travelease
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

5. Set up environment variables in the `.env` file for both frontend and backend (e.g., database URL, JWT secret).

6. Run the project:
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```

Visit `http://localhost:5173` in your browser to view the app!

---
