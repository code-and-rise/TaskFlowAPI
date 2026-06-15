const express = require("express");
const apiRoutes = require("./api/routes");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to TaskFlow API"
    })
})

app.listen(3000, () => {
    console.log("Server is running on PORT 3000");
})