const express = require("express");
const {
    deleteWorkout
} = require("../controllers/delete_controller")

const router = express.Router();

// Delete single workout
router.delete("/:id", deleteWorkout);

module.exports = router;