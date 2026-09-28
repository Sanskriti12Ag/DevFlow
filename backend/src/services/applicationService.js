const getApplicationById = async (id) => {
    return {
        id: id,
        company: "Google",
        role: "Software Engineer",
        status: "Applied"
    };
};

module.exports = {
    getApplicationById
};