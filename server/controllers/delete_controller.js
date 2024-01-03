const Exercise = require("../models/exercise_model");
const mongoose = require("mongoose");

const deleteWorkout = async(req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "Workout does not exist"});
    }

    const workout = await Exercise.findOneAndDelete({_id: id});

    if(!workout) {
        return res.status(400).json({error: "Workout does not exist"});
    }

    res.status(200).json(workout);
}

module.exports = {
    deleteWorkout
}