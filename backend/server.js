require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const applicationRoutes = require("./src/routes/applicationRoutes");
const errorMiddleware = require("./src/middleware/errorMiddleware");

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

// Middleware
app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.use(express.json());

app.use("/api/applications", applicationRoutes);

app.use(errorMiddleware);

// GET - Test route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to DevFlow API"
    });
});

// POST - Test req.body
app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Data received successfully",
        data: req.body
    });
});

// GET - Test req.query
app.get("/api/search", (req, res) => {
    console.log(req.query);

    res.json({
        filters: req.query
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`DevFlow server running on port ${PORT}`);
});