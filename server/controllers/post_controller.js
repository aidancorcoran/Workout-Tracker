const Exercise = require("../models/exercise_model");

const createWorkout = async(req, res) => {
    const { exercise_name, sets, reps, weight } = req.body;

    try {
        const exercise = await Exercise.create({
            ExerciseName: exercise_name,
            Sets: sets,
            Repitions: reps,
            Weight: weight
        });

        res.status(200).json(exercise);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    createWorkout
};