# Riyadvi Software Technologies Website

A modern Full Stack company website developed for Riyadvi Software Technologies. The website showcases the company's services, portfolio, blog, careers, and contact information while allowing users to register, login, and submit enquiries.

---

## Project Overview

This project is built as a Full Stack web application using React.js for the frontend and Node.js with Express.js for the backend. MongoDB is used as the database.

The website helps businesses learn about Riyadvi Software Technologies and contact the company through an enquiry form.

---

## Features

### Frontend

- Responsive Design
- Modern Landing Page
- Services Page
- Portfolio Page
- About Page
- Blog Page
- Careers Page
- Contact Page
- Login Page
- Register Page
- Responsive Navigation Bar
- Mobile Menu
- Protected Navigation
- Logout Functionality

### Backend

- User Registration
- User Login
- JWT Authentication
- Password Encryption using bcrypt
- Contact Form API
- MongoDB Database
- Protected Routes
- Error Handling

---

## Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- React Icons
- JavaScript
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

---

## Folder Structure

```
riyadvi-website

frontend
│
├── src
│   ├── components
│   ├── pages
│   ├── assets
│   ├── api
│   └── App.jsx

backend
│
├── controllers
├── models
├── routes
├── middleware
├── config
├── server.js
└── package.json
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/shruthi06071995/riyadvi-website.git
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

### Backend Setup

```bash
cd backend

npm install

npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## API Endpoints

### User

Register User

```
POST /api/users/register
```

Login User

```
POST /api/users/login
```

User Profile

```
GET /api/users/profile
```

---

### Contact

Create Contact

```
POST /api/contact
```

---

## Authentication

- JWT Token Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

---

## Database

MongoDB Atlas

Collections

- users
- contacts

---

## Deployment

Frontend

Render Static Site

Backend

Render Web Service

Database

MongoDB Atlas

---

## Live Demo

Frontend

```
https://riyadvi-website-revamp.onrender.com/
```

Backend

```
https://riyadvi-website-icko.onrender.com
```

---

## GitHub Repository

```
https://github.com/shruthi06071995/riyadvi-website/tree/main
```

---

## Future Improvements

- Admin Dashboard
- Appointment Booking
- Email Integration
- Blog Management
- Dashboard Analytics
- CMS Integration

---

## Developed By

Shruthi Ganesan

Full Stack Developer

GitHub

https://github.com/shruthi06071995

LinkedIn

(https://www.linkedin.com/in/shruthi-m-07573212b/)