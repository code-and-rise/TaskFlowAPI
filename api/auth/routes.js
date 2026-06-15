const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("This is GET /api/auth");
// });

router.post("/login", (req, res) => {
    res.send(req.body);
})

module.exports = router;