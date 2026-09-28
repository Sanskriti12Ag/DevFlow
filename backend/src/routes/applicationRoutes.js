const express = require("express");

const {
    getApplicationById,
    getAllApplications,
    createApplication
} = require("../controllers/applicationController");

const router = express.Router();

router.get("/", getAllApplications);

router.post("/", createApplication);

router.get("/:id", getApplicationById);

module.exports = router;