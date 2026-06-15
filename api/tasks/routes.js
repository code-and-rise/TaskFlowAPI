const express = require("express");
const {
    _tasks
} = require("../../models/data");
const authMiddleware = require("../auth/authMiddleware");
const router = express.Router();

router.use(authMiddleware);

// Get all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await _tasks.findAll({
            where: {
                user_id: req.user.id
            }
        })

        res.status(200).json(tasks);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

// Get task by id
router.get("/:id", async (req, res) => {
    try {
        const task_id = req.params.id;
        const task = await _tasks.findByPk(task_id);

        if (!task) {
            res.status(404).json({
                message: "Task not found."
            });
        }

        res.status(200).json(task);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

// Update task
router.put("/:id", async (req, res) => {
    try {
        const task_id = req.params.id;
        const task = await _tasks.findByPk(task_id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        if (task.user_id !== req.user.id) {
            return res.status(403).json({
                message: "Forbidden."
            })
        }

        const {
            title,
            description,
            status,
            due_date
        } = req.body;

        await task.update({
            title,
            description,
            status,
            due_date
        })

        return res.status(200).json({
            message: "Task updated successfully.",
            task
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

function isValidDueDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return new Date(date) >= today;
}

// Create task
router.post("/", async (req, res) => {
    try {
        const {
            title,
            description,
            status,
            due_date
        } = req.body;

        if (!isValidDueDate(due_date)) {
            return res.status(400).json({
                message: "Due date cannot be in the past."
            })
        }

        const newTask = await _tasks.create({
            user_id: req.user.id,
            title,
            description,
            status,
            due_date
        })

        res.status(201).json(newTask);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

// Delete task
router.delete("/:id", async (req, res) => {
    try {
        const task_id = req.params.id;
        const task = await _tasks.findByPk(task_id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found."
            });
        }

        if (task.user_id !== req.user.id) {
            return res.status(403).json({
                message: "Forbidden."
            })
        }

        await task.destroy();

        return res.status(200).json({
            message: "Task deleted successfully."
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

module.exports = router;