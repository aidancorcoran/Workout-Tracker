const Exercise = require("../models/exercise_model");
const mongoose = require("mongoose");

const getAllWorkouts = async(req, res) => {
    const exercises = await Exercise.find({}).sort({createdAt: -1});

    res.status(200).json(exercises);
};

const getWorkout = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Workout does not exist"});
    }

    const workout = await Exercise.findById(id)

    if(!workout) {
        return res.status(400).json({error: "Workout does not exist"});
    }

    res.status(200).json(workout);
};

module.exports = {
    getAllWorkouts,
    getWorkout
};