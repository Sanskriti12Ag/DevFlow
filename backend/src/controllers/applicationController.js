const applicationService = require("../services/applicationService");

const getApplicationById = async (req, res) => {
    const application = await applicationService.getApplicationById(
        req.params.id
    );

    res.json(application);
};

const getAllApplications = async (req, res) => {
    const { status, sort, search } = req.query;

    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(
        Math.max(Number(req.query.limit) || 10, 1),
        100
    );

    const filter = {};

    if (status) {
        filter.status = status;
    }

    if (search) {
        filter.$or = [
            { company: { $regex: search, $options: "i" } },
            { role: { $regex: search, $options: "i" } }
        ];
    }

    const applications = await applicationService.getAllApplications(
        filter,
        page,
        limit,
        sort
    );

    res.json(applications);
};

const getApplicationStats = async (req, res) => {
    const stats = await applicationService.getApplicationStats();

    res.json(stats);
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
    deleteApplication,
    getApplicationStats
};
