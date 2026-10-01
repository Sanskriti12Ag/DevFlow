const express = require("express");

const {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication
} = require("../controllers/applicationController");

const router = express.Router();

router.get("/", getAllApplications);

router.post("/", createApplication);

router.patch("/:id", updateApplication);

router.delete("/:id", deleteApplication);

router.get("/:id", getApplicationById);

module.exports = router;