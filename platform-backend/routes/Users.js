const express = require("express");
const router = express.Router();

router.get("/",(req,res,next) => {
    res.status(200).json({
        name:'Users GET route'
    });
});

module.exports = router;