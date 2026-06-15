const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require('body-parser');
const apiRoutes = require("./api/routes");

const initDatabase = require("./config/db-init");

const app = express();

initDatabase();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TaskFlow API"
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})