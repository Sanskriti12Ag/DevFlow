const express = require("express");

const {
    getApplicationById
} = require("../controllers/applicationController");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Applications route working"
    });
});

router.get("/:id", getApplicationById);

module.exports = router;