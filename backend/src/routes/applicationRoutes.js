const express = require("express");

const {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication,
    getApplicationStats
} = require("../controllers/applicationController");

const router = express.Router();

router.get("/", getAllApplications);

router.post("/", createApplication);

router.get("/stats", getApplicationStats);

router.patch("/:id", updateApplication);

router.delete("/:id", deleteApplication);

router.get("/:id", getApplicationById);

module.exports = router;