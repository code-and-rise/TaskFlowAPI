const express = require("express");
const {
    _users
} = require("../../models/data");

const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// router.get("/", (req, res) => {
//     res.send("This is GET /api/auth");
// });

// Login route
router.post("/login", async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // Find the user
        const user = await _users.findOne({
            where: {
                email
            }
        });

        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign({
            name: user.name
        }, 'secretKey', {
            expiresIn: '1h'
        })

        res.json({
            token
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
})

// Register route
router.post("/register", async (req, res) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;

        // Check if user exists
        const existingUser = await _users.findOne({
            where: {
                email
            }
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }


        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store new user
        const createUser = await _users.create({
            name,
            email,
            password: hashedPassword
        })

        return res.status(201).json({
            message: "User created",
            user: {
                id: createUser.id,
                email: createUser.email,
            },
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error"
        })
    }
});

// Protected route

module.exports = router;