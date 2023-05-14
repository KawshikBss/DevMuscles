var express = require("express");
var app = express();
const port = 3000;

var usersRouter = require("./routes/users");

app.get("/", (req, res) => {
    return res.json({ message: "Wellcome to Devmuscles" });
});

app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}/`);
});
