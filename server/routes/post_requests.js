const express = require("express");
const {
    createWorkout
} = require("../controllers/post_controller");

const router = express.Router();

// Create a new workout
router.post("/createWorkout", createWorkout);

module.exports = router;