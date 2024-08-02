const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const { connectDB } = require("./config/connectDb");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create Express application
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/users", require("./routes/userRoute"));

// Port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`.yellow.bold));
