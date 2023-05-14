var express = require("express");
var app = express();
const port = 3000;

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/devmuscles", {
    useNewUrlParser: true,
});

var mongooseConnection = mongoose.connection;
mongooseConnection.on("error", (err) => console.error(err));
mongooseConnection.once("open", () => console.log("Connected to database"));

var usersRouter = require("./routes/users");

app.get("/", (req, res) => {
    return res.json({ message: "Wellcome to Devmuscles" });
});

app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
});
