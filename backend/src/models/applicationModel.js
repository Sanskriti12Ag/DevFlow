const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
            trim: true
        },

        role: {
            type: String,
            required: true,
            trim: true
        },

        status: {
            type: String,
            required: true,
            default: "Applied"
        }
    },
    {
        timestamps: true
    }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;