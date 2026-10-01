const Application = require("../models/applicationModel");

const getApplicationById = async (id) => {
    const application = await Application.findById(id);

    if (!application) {
        const error = new Error("Application not found");
        error.statusCode = 404;
        throw error;
    }

    return application;
};

const getAllApplications = async (
    filter = {},
    page = 1,
    limit = 10,
    sort = "newest"
) => {
    const skip = (page - 1) * limit;

    const sortOrder = sort === "oldest" ? 1 : -1;

    const applications = await Application.find(filter)
        .sort({ createdAt: sortOrder })
        .skip(skip)
        .limit(limit);

    const total = await Application.countDocuments(filter);

    const totalPages = Math.ceil(total / limit);

    return {
        applications,
        page,
        limit,
        total,
        totalPages
    };
};

const createApplication = async (data) => {
    const application = await Application.create(data);

    return application;
};

const updateApplication = async (id, data) => {
    const application = await Application.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );

    if (!application) {
        const error = new Error("Application not found");
        error.statusCode = 404;
        throw error;
    }

    return application;
};

const deleteApplication = async (id) => {
    const application = await Application.findByIdAndDelete(id);

    if (!application) {
        const error = new Error("Application not found");
        error.statusCode = 404;
        throw error;
    }

    return application;
};

module.exports = {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication
};