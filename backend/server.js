// Import modules/required packages
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Load environment variables from .env file
dotenv.config();

// Initialize express app by making a new instance of express
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Use environment variable for frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database and pass the connection string in .env file
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
connectDB();

// Routes
const contactRoutes = require("./routes/contacts");

// Contact routes
app.use("/api/contacts", contactRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to my portfolio");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
