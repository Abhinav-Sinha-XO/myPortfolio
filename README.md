# Portfolio Website

A modern, responsive portfolio website built with React and Express, showcasing my projects and skills as a full-stack developer.

## Features

- **Modern UI Design**: Clean and responsive interface built with React and Tailwind CSS
- **Project Showcase**: Display of key projects with live demo links
- **About Section**: Professional profile and skill set overview
- **Contact Form**: Interactive contact form with MongoDB backend storage
- **Responsive Layout**: Optimized for all device sizes

## Tech Stack

### Frontend
- React
- Tailwind CSS
- React Router
- Vite (Build tool)

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Configure Environment Variables
Create a .env file in the backend directory with:
```
MONGO_URL=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

4. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Running the Application

1. Start the Backend Server
```bash
cd backend
npm start
```

2. Start the Frontend Development Server
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5174
- Backend: http://localhost:5001

## Project Structure

```
├── frontend/           # React frontend application
│   ├── src/           # Source files
│   ├── public/        # Static files
│   └── vite.config.js # Vite configuration
└── backend/           # Express backend application
    ├── models/        # Database models
    ├── routes/        # API routes
    └── server.js      # Server configuration
```

## Features Overview

### Home Page
- Professional introduction
- Quick navigation to different sections

### Projects Section
- Weather App
- Invertis-payments
- Spotify Clone

### About Section
- Professional background
- Skills and expertise
- Education and experience

### Contact Form
- User-friendly contact interface
- Form validation
- MongoDB storage for messages

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is licensed under the ISC License.