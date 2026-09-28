const applicationService = require("../services/applicationService");

const getApplicationById = async (req, res) => {
    const application = await applicationService.getApplicationById(
        req.params.id
    );

    res.json(application);
};

module.exports = {
    getApplicationById
};