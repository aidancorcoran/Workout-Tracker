const allExercises = require("../controllers/get_controller");

const getRoutes = (app) => {
    app.get("/exercises", allExercises);
};

module.exports = getRoutes;