const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to DevFlow API"
    });
});

app.listen(PORT, () => {
    console.log(`DevFlow server running on port ${PORT}`);
});