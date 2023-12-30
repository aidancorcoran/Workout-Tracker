const logExercise = require("../controllers/post_controller");

const postRoutes = (app) => {
    app.post("/log", logExercise);
};

module.exports = postRoutes;