const express = require("express");
const authRoutes = require("./auth/routes");
const tasksRoutes = require("./tasks/routes");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("This is GET /api");
// });

router.use("/auth", authRoutes);
router.use("/tasks", tasksRoutes);

module.exports = router;