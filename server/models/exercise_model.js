const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    ExerciseName: {
        type: String,
        required: true,
    },
    Sets: {
        type: Number,
        required: true,
    },
    Repitions: {
        type: Number,
        required: true,
    },
    Weight: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Exercise", exerciseSchema);