const express = require("express");
const {
    getAllWorkouts,
    getWorkout
} = require("../controllers/get_controller");

const router = express.Router();

// List all created workouts
router.get("/", getAllWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

module.exports = router;