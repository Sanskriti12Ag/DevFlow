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

const getAllApplications = async () => {
    const applications = await Application.find();

    return applications;
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