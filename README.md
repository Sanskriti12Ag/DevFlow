# DevFlow – Developer Job Application Tracker

DevFlow is a full-stack job application tracking platform designed to help developers organize their job search, manage applications, track interview progress, and monitor application statistics from one place.

The project is being built with the MERN stack, with a focus on RESTful API development, authentication, database management, and clean backend architecture.

## 🚀 Project Status

**Currently in Development**

The backend authentication and job application management APIs have been implemented. Frontend development and further enhancements are planned.

## ✨ Features

### Implemented
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Create, view, update, and delete job applications
- User-specific application ownership and data isolation
- Application status management
- Search applications by company and role
- Filter applications by status
- Pagination and sorting
- Application statistics using MongoDB aggregation
- Notes for individual applications
- Centralized error handling and input validation

### Planned
- React-based user interface
- Dashboard with application statistics
- Visual application status charts
- Improved search and filtering experience
- Interview scheduling and reminders
- Deployment and production configuration

## 🛠️ Tech Stack

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

**Frontend (Planned)**
- React.js
- JavaScript
- CSS / Tailwind CSS

**Tools**
- Git and GitHub
- VS Code
- Postman / PowerShell for API testing

## 📁 Project Structure

```text
DevFlow/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── applicationController.js
│   │   │   └── authController.js
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   └── errorMiddleware.js
│   │   ├── models/
│   │   │   ├── applicationModel.js
│   │   │   └── userModel.js
│   │   ├── routes/
│   │   │   ├── applicationRoutes.js
│   │   │   └── authRoutes.js
│   │   └── services/
│   │       └── applicationService.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account or local MongoDB instance
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Sanskriti12Ag/DevFlow.git
cd DevFlow
```

### 2. Navigate to the backend

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

Use your own MongoDB connection string and a secure JWT secret. Never commit your `.env` file.

### 5. Start the server

```bash
node server.js
```

The backend runs at:

`http://localhost:5000`

## 🔗 API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |

### Job Applications

All application endpoints require a valid JWT Bearer token.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/applications` | Get all applications |
| POST | `/api/applications` | Create an application |
| GET | `/api/applications/:id` | Get an application by ID |
| PATCH | `/api/applications/:id` | Update an application |
| DELETE | `/api/applications/:id` | Delete an application |
| GET | `/api/applications/stats` | Get application statistics |

### Query Parameters

The applications endpoint supports:

- `status` – Filter by application status
- `search` – Search by company or role
- `page` – Select a page
- `limit` – Set the number of results
- `sort` – Sort by `newest` or `oldest`

Example:

```text
GET /api/applications?status=Applied&page=1&limit=10&sort=newest
```

## 🔐 Security

- Passwords are hashed before being stored.
- JWT tokens are used to authenticate protected requests.
- Application routes require authentication.
- Every application is associated with its owner.
- Users can only access and modify their own applications.
- Sensitive environment variables are excluded from version control.

## 🎯 Learning Objectives

This project is helping me develop practical experience in:

- Designing and building REST APIs
- Structuring backend applications using MVC and service layers
- Implementing JWT authentication and authorization
- Working with MongoDB and Mongoose
- Writing database aggregation queries
- Implementing pagination, filtering, and sorting
- Handling errors and validating API data
- Using Git and GitHub for version control

## 👩‍💻 Author

**Sanskriti Agarwal**

- GitHub: [Sanskriti12Ag](https://github.com/Sanskriti12Ag)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/sanskriti-agarwal-2807a7251/)

---

*DevFlow is an ongoing personal project. More features and improvements will be added as development progresses.*