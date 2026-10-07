const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        company: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
},

        role: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
},

        status: {
    type: String,
    required: true,
    enum: [
        "Applied",
        "Interview",
        "Offer",
        "Rejected",
        "Withdrawn"
    ],
    default: "Applied"
},

        notes: {
            type: String,
            trim: true,
            default: ""
}

    },
    {
        timestamps: true
    }
);

const Application = mongoose.model("Application", applicationSchema);

module.exports = Application;