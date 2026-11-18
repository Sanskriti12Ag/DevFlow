
const express = require("express");

const {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication,
    getApplicationStats
} = require("../controllers/applicationController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Protect all application routes
router.use(authMiddleware);

router.get("/", getAllApplications);

router.post("/", createApplication);

router.get("/stats", getApplicationStats);

router.patch("/:id", updateApplication);

router.delete("/:id", deleteApplication);

router.get("/:id", getApplicationById);

module.exports = router;
