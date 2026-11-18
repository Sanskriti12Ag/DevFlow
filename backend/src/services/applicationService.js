
const mongoose = require("mongoose");
const Application = require("../models/applicationModel");

const getApplicationById = async (id, userId) => {
    const application = await Application.findOne({
        _id: id,
        user: userId
    });

    if (!application) {
        const error = new Error("Application not found");
        error.statusCode = 404;
        throw error;
    }

    return application;
};

const getAllApplications = async (
    userId,
    filter = {},
    page = 1,
    limit = 10,
    sort = "newest"
) => {
    const skip = (page - 1) * limit;
    const sortOrder = sort === "oldest" ? 1 : -1;

    // Always restrict queries to the logged-in user
    const userFilter = {
        ...filter,
        user: userId
    };

    const applications = await Application.find(userFilter)
        .sort({ createdAt: sortOrder })
        .skip(skip)
        .limit(limit);

    const total = await Application.countDocuments(userFilter);
    const totalPages = Math.ceil(total / limit);

    return {
        applications,
        page,
        limit,
        total,
        totalPages
    };
};

const createApplication = async (data, userId) => {
    const application = await Application.create({
        ...data,
        user: userId
    });

    return application;
};

const updateApplication = async (id, data, userId) => {
    // Never allow clients to change application ownership
    const { user, ...updateData } = data;

    const application = await Application.findOneAndUpdate(
        {
            _id: id,
            user: userId
        },
        updateData,
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

const deleteApplication = async (id, userId) => {
    const application = await Application.findOneAndDelete({
        _id: id,
        user: userId
    });

    if (!application) {
        const error = new Error("Application not found");
        error.statusCode = 404;
        throw error;
    }

    return application;
};


const getApplicationStats = async (userId) => {
    const objectId = new mongoose.Types.ObjectId(userId);

   
    const stats = await Application.aggregate([
        {
            $match: {
                user: objectId
            }
        },
        {
            $group: {
                _id: "$status",
                count: { $sum: 1 }
            }
        }
    ]);

    

    const result = {
        total: 0,
        Applied: 0,
        Interview: 0,
        Offer: 0,
        Rejected: 0,
        Withdrawn: 0
    };

    for (const stat of stats) {
        result[stat._id] = stat.count;
        result.total += stat.count;
    }

    return result;
};


module.exports = {
    getApplicationById,
    getAllApplications,
    createApplication,
    updateApplication,
    deleteApplication,
    getApplicationStats
};
