require("dotenv").config();

const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.use(express.json());

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

// GET - Test req.params
app.get("/api/applications/:id", (req, res) => {
    console.log(req.params.id);

    res.json({
        applicationId: req.params.id
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