const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const app = express();

app.use("/images", express.static(path.join(__dirname, "/images")));

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRoutes);

module.exports = app;
