const express = require("express");
const authRoutes = require("./auth/routes");
const tasksRoutes = require("./tasks/routes");
const analyticsRoutes = require("./analytics/routes");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("This is GET /api");
// });

router.use("/auth", authRoutes);
router.use("/tasks", tasksRoutes);
router.use("/analytics", analyticsRoutes);

module.exports = router;