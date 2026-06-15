const express = require("express");
const authRoutes = require("./auth/routes");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("This is GET /api");
// });

router.use("/auth", authRoutes);

module.exports = router;