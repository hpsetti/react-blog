const express = require("express");
const router = express.Router();

router.get("/",(req,res,next) => {
    res.status(200).json({
        name:'Posts GET route'
    })
});

router.post("/",(req,res,next) => {
    res.status(201).json({
        name:'Posts POST route'
    })
});

router.get("/:postid",(req,res,next) => {
    res.status(200).json({
        name:'Posts id GET route'
    })
});

router.patch("/:postid", (req,res,next) => {
    res.status(201).json({
        name:'Posts id PATCH route'
    })
});

router.delete("/:postid",(req,res,next) => {
    res.status(201).json({
        name:'Posts id DELETE route'
    })
})

module.exports = router;