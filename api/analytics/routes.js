const express = require("express");
const {
    _tasks
} = require("../../models/data");
const authMiddleware = require("../auth/authMiddleware");
const {
    Op
} = require("sequelize");
const sequelize = require("../../config/db");
const router = express.Router();

router.use(authMiddleware);

router.get("/overview", async (req, res) => {
    try {
        const totalTasks = await _tasks.count({
            where: {
                user_id: req.user.id
            }
        })

        const completedTasks = await _tasks.count({
            where: {
                user_id: req.user.id,
                status: "done"
            }
        })

        const pendingTasks = await _tasks.count({
            where: {
                user_id: req.user.id,
                status: "pending"
            }
        })

        const inProgressTasks = await _tasks.count({
            where: {
                user_id: req.user.id,
                status: "in_progress"
            }
        })

        const dueTodayTasks = await _tasks.count({
            where: {
                user_id: req.user.id,
                due_date: new Date().toISOString().split("T")[0]
            }
        })

        return res.status(200).json({
            totalTasks,
            completedTasks,
            pendingTasks,
            inProgressTasks,
            dueTodayTasks
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
});

// aggregate function
router.get("/status-distribution", async (req, res) => {
    try {
        const stats = await _tasks.findAll({
            attributes: ["status", [sequelize.fn("COUNT", sequelize.col("id")), "count"]],
            where: {
                user_id: req.user.id
            },
            group: ["status"]
        })

        return res.status(200).json(stats);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
});

router.get("/productivity", async (req, res) => {
    try {
        const totalTasks = await _tasks.count({
            where: {
                user_id: req.user.id
            }
        })

        const completedTasks = await _tasks.count({
            where: {
                user_id: req.user.id,
                status: "done"
            }
        })

        return res.status(200).json({
            completionRate: totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

module.exports = router;