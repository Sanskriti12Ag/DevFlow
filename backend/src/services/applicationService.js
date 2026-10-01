const Application = require("../models/applicationModel");

const getApplicationById = async (id) => {
    const application = await Application.findById(id);

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

    return application;
};

module.exports = {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication
};