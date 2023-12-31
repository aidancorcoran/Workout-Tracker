const express = require("express");
const connectDb = require("./db/conn");
const postRoutes = require("./routes/post_requests");
const getRoutes = require("./routes/get_requests");

const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

postRoutes(app);
getRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});