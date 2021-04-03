const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes

const postsRoute = require("./routes/Posts");
const usersRoute = require("./routes/Users");

app.use("/posts",postsRoute);
app.use("/user",usersRoute);

app.use((req,res,next) => {
    const err = new Error("not found");
    err.status = 404;
    next(err);
});

app.use((error,req,res,next) => {
    res.status( error.status || 500 );
    res.json({
        message:"server error"
    });
});

module.exports = app;