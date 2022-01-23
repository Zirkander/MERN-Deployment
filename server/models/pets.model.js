const mongoose = require("mongoose");

const PetsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: [true, "We already have a pet by that {PATH}"],
            required: [true, "{PATH} is required."],
            minlength: [3, '{PATH} must be at least {MINLENGTH} characters.']
        },
        type: {
            type: String,
            lowercase: true,
            required: [true, "{PATH} is required."],
            minlength: [3, "{PATH} must be at least {MINLENGTH}."]
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minlength: [5, "{PATH} must be at least {MINLENGTH} characters."]
        },

        skills1: {
            type: String,
            required: [false],
        },
        skills2: {
            type: String,
            required: [false],
        },
        skills3: {
            type: String,
            required: [false],
        },
    },
    { timestamps: true }
);

const Pets = mongoose.model("Pets", PetsSchema);
module.exports = Pets;