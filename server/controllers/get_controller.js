const Exercise = require("../models/exercise_model");

const allExercises = async(req, res) => {
    const exercises = await Exercise.find({}).sort({createdAt: -1});

    res.status(200).json(exercises);
};

module.exports = allExercises;