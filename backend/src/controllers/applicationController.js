const applicationService = require("../services/applicationService");

const getApplicationById = async (req, res) => {
    const application = await applicationService.getApplicationById(
        req.params.id
    );

    res.json(application);
};

const getAllApplications = async (req, res) => {
    const applications = await applicationService.getAllApplications();

    res.json(applications);
};

const createApplication = async (req, res) => {
    const application = await applicationService.createApplication(
        req.body
    );

    res.status(201).json(application);
};

const updateApplication = async (req, res) => {
    const application = await applicationService.updateApplication(
        req.params.id,
        req.body
    );

    res.json(application);
};

const deleteApplication = async (req, res) => {
    const application = await applicationService.deleteApplication(
        req.params.id
    );

    res.json({
        message: "Application deleted successfully",
        application
    });
};

module.exports = {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication
};