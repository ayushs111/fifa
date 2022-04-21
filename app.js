const express = require("express");
const app = express();
const morgan = require("morgan");
var cors = require("cors"); 
const bodyParser = require("body-parser");

app.use(morgan("dev"));
app.use('/public/images', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());




app.use("/player", require("./routes/Player"));
app.use("/team", require("./routes/Team"));
app.use("/match", require("./routes/Match"));
app.use("/user", require("./routes/User"));

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;