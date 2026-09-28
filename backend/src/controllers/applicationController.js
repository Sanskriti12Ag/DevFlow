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

module.exports = {
    getApplicationById,
    getAllApplications,
    createApplication
};